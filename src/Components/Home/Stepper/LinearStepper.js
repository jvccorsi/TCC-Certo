import React, { useState } from 'react';
import { Typography, Button, Stepper, Step, StepLabel } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';

import Atendimento from './Forms/Atendimento';
import Solicitante from './Forms/Solicitante';
import Paciente from './Forms/Paciente';
import AgenteToxico from './Forms/AgenteToxico';
import Exposicao from './Forms/Exposicao';

function getSteps() {
  return [
    'Atendimento',
    'Solicitante',
    'Paciente',
    'Agente Tóxico',
    'Exposição',
    'Outros informações',
    'Acompanhamento ',
    'Classificacao Final ',
  ];
}

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
      return <Exposicao />;

    case 6:
      return <Exposicao />;
    case 7:
      return <Exposicao />;

    default:
      return 'unknown step';
  }
}

const LinaerStepper = () => {
  const methods = useForm({
    defaultValues: {
      //ATENDIMENTO VALUES:
      atendimento: {
        centro_atendimento: '',
        ficha: {
          tipo_ficha: '',
          exposicao: '',
          data_ficha: new Date(),
          hora_ficha: '',
        },
        data_atendimento: new Date(),
        horario_atendimento: '',
        meio_atendimento: '',
        local_atendimento: '',
        responsavel_atendimento: '',
        responsavel_revisao: '',
        responsavel_supervisao: '',
        controle_centro: '',
      },

      //FIM ATENDIMENTO VALUES:

      //Solicitante values:
      solicitante: {
        categoria_multiple_select: [],
        nome_solicitante: '',
        uf_solicitante: '',
        municipio_solicitante: '',
        fone_solicitante: '',
        instituicao_solicitante: '',
      },

      //FIM Solicitante values:

      //Inicio Paciente Values:
      paciente: {
        nome_paciente: '',
        gestante_select_paciente: '',
        raca_cor_paciente: '',
        escolaridade_paciente: '',
        ocupacao_paciente: '',
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
        agente1: {
          nome: '',
          substancia_Genero: '',
          subclasse: '',
          classe: '',
          grupo: '',
        },
        agente2: {
          nome: '',
          substancia_Genero: '',
          subclasse: '',
          classe: '',
          grupo: '',
        },
        agente3: {
          nome: '',
          substancia_Genero: '',
          subclasse: '',
          classe: '',
          grupo: '',
        },
        dados_complementares: '',
        quantidade_apresentacao: '',
        dose: '',
      },

      //Fim Paciente Values:
    },
  });

  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      console.log('Modo json:' + JSON.stringify(data));

      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
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

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Finalizado
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
