import React, { useState, useContext } from 'react';
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Modal,
  Box,
} from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';

import Atendimento from './Forms/Atendimento';
import Solicitante from './Forms/Solicitante';
import Paciente from './Forms/Paciente';
import AgenteToxico from './Forms/AgenteToxico';
import Exposicao from './Forms/Exposicao';
import OutrasInformacoes from './Forms/OutrasInformacoes';
import Acompanhamento from './Forms/Acompanhamento';
import ClassificacaoFinal from './Forms/ClassificacaoFinal';
import { useHttpClient } from '../../Hooks/http-hook';
import { AuthContext } from '../../Hooks/AuthContext';
import LoadingSpinner from '../../IUElements/LoadingSpinner';
import Exame from './Forms/Exame';

function getSteps() {
  return [
    'Atendimento',
    'Solicitante',
    'Paciente',
    'Agente Tóxico',
    'Exposição',
    'Exame',
    'Outros informações',
    'Acompanhamento ',
    'Classificacao Final ',
  ];
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Atendimento />;

    case 1:
      return <Solicitante />;
    case 2:
      return <Paciente />;
    case 3:
      return <AgenteToxico />;
    case 4:
      return <Exposicao />;
    case 5:
      return <Exame />;
    case 6:
      return <OutrasInformacoes />;
    case 7:
      return <Acompanhamento />;
    case 8:
      return <ClassificacaoFinal />;

    default:
      return 'unknown step';
  }
}

const LinaerStepper = () => {
  const [openModal, setOpenModal] = useState(false);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const auth = useContext(AuthContext);

  const methods = useForm({
    defaultValues: {
      atendimento: {
        centro_atendimento: '',
        ficha: {
          tipo_ficha: '',
          exposicao: '',
          data_ficha: '',
          hora_ficha: '',
        },
        data_atendimento: '',
        horario_atendimento: '',
        meio_atendimento: '',
        local_atendimento: '',
        responsavel_atendimento: '',
        responsavel_revisao: '',
        responsavel_supervisao: '',
        controle_centro: '',
      },
      solicitante: {
        categoria_multiple_select: [],
        nome_solicitante: '',
        uf_solicitante: '',
        municipio_solicitante: '',
        fone_solicitante: '',
        instituicao_solicitante: '',
      },

      paciente: {
        nome_paciente: '',
        gestante_select_paciente: '',
        raca_cor_paciente: '',
        escolaridade_paciente: '',
        ocupacao_paciente: '',
        data_nascimento_paciente: '',
        idade_paciente: '',
        peso_paciente: '',
        sexo_paciente: '',

        endereco: {
          pais_paciente: '',
          municipio_paciente: '',
          cep_paciente: '',
          bairro_paciente: '',
          logradouro_paciente: '',
          numero_casa_paciente: '',
          complemento_casa_paciente: '',
        },
        telefone_paciente: '',
        nome_mae_paciente: '',
        prontuario_paciente: '',
        cpf_paciente: '',
        rg_paciente: '',
        cartao_sus_paciente: '',
        convenio_paciente: '',
      },

      agenteToxico: {
        dados: [
          {
            nome: '',
            substancia_Genero: '',
            subclasse: '',
            classe: '',
            grupo: '',
          },
        ],
        dados_complementares: '',
        quantidade_apresentacao: '',
        dose: '',
      },

      exposicao: {
        data: '',
        horario: '',
        tempo_decorrido: '',
        duracao_exposicao: '',
        especificar_mordida: '',
        tipos: {
          //Dropdowns!
          tipo_exposicao: [],
          local_exposicao: [],
          zona_exposicao: [],
          via_de_exposicao: [],
          circunstancia_de_exposicao: [],
          local_mordida: [],
        },
        endereco: {
          pais: '',
          estado: '',
          municipio: '',
          cep: '',
          bairro: '',
          logradouro: '',
          numero: 0,
          complemento: '',
          fone: '',
        },
      },

      outrasInformacoes: {
        classificacao_gravidade: '',
        manifestacoesClinicas: {
          manifestacao: '',
          sinais_sintomas: '',
        },
        tratamento: {
          medida_tomada: '',
          medida_orientada: '',
          medida_realizada: '',
          informacoes_adicionais: '',
          exames_resultados_lab: '',
        },
        historia: '',
        fonte: '',
        complemento: '',
        imagens: '',
        observacoes: '',
      },

      acompanhamento: {
        //ArrayField
        dados: [
          {
            data_hora: '',
            responsavel: '',
            evolucao: '',
            informante: '',
            instituicao: '',
            cidade: '',
            fone: '',
          },
        ],
      },

      classificacaoFinal: {
        classificacao_gravidade_final: '',
        desfecho: '',
        obito: '',
        data: '',
        autopsia: '',
        resultado_autopsia: '',
        contribuicao_obito: '',
      },

      exame: {
        dados: [
          {
            nomeExame: '',
            resultadoExame: '',
          },
        ],
      },
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  var error_content = false;

  const steps = getSteps();

  const submitFormRequest = async (data) => {
    var data_post = {};
    data_post = data;
    data_post.creator = auth.userId;
    data_post.updateby = auth.userId;
    data_post.atendimentoStatus = 'aberto';
    try {
      await sendRequest(
        'https://api-tcc-unicamp.herokuapp.com/api/fichas',
        'POST',
        JSON.stringify(data_post),
        {
          'Content-Type': 'application/json',
        },
      );
    } catch (error) {
      setOpenModal(true);
      error_content = true;
    }
  };

  const handleNext = (data) => {
    if (activeStep === steps.length - 1) {
      //Se tiver acabado o stepper, ele submete!!
      submitFormRequest(data);
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleClose = () => {
    setOpenModal(false);
    clearError();
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ocorreu um erro - Contacte o suporte!!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            O erro é: {error}
          </Typography>
          <Box maxWidth={false}>
            <Button
              onClick={handleClose}
              variant="contained"
              style={{ backgroundColor: '#FE6969' }}
              size="small"
            >
              Fechar
            </Button>
          </Box>
        </Box>
      </Modal>

      {isLoading && <LoadingSpinner asOverlay />}

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length && !error_content ? (
        <Typography variant="h4" align="center" m={5} color={'green'}>
          Cadastro realizado com sucesso!
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button disabled={activeStep === 0} onClick={handleBack}>
                back
              </Button>

              <Button
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
