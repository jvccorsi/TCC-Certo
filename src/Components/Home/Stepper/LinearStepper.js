import React, { useState } from 'react';
import { Typography, Button, Stepper, Step, StepLabel } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';

import Atendimento from './Forms/Atendimento';
import Solicitante from './Forms/Solicitante';
import Paciente from './Forms/Paciente';
import AgenteToxico from './Forms/AgenteToxico';

function getSteps() {
  return [
    'Atendimento',
    'Solicitante',
    'Paciente',
    'Agente Tóxico',
    'Exposição',
    'Tratamento',
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
      return <AgenteToxico />;
    case 5:
      return <AgenteToxico />;
    default:
      return 'unknown step';
  }
}

const LinaerStepper = () => {
  const methods = useForm({
    defaultValues: {
      //ATENDIMENTO VALUES:
      centro_atendimento: '',
      tipo_ficha: '',
      exposicao: '',
      data_ficha: new Date(),
      hora_ficha: '',
      data_atendimento: new Date(),
      horario_atendimento: '',
      meio_atendimento: '',
      local_atendimento: '',
      responsavel_atendimento: '',
      responsavel_revisao: '',
      responsavel_supervisao: '',
      controle_centro: '',

      //FIM ATENDIMENTO VALUES:

      multipleSelect: [],
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      console.log('Modo json:' + JSON.stringify(data));

      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep),
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
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
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
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
