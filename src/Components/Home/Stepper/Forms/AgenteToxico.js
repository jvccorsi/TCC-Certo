import { TextField, Grid } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const AgenteToxico = () => {
  const { control } = useFormContext();

  return (
    <Grid container spacing={1}>
      <Grid item xs={8}>
        <Controller
          control={control}
          name="emailAddress"
          render={() => (
            <TextField
              id="email"
              label="aaa"
              variant="filled"
              placeholder="Enter Your E-mail Address"
              fullWidth
              margin="normal"
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          control={control}
          name="emailAddress"
          render={() => (
            <TextField
              id="email"
              label="aaa"
              variant="filled"
              placeholder="Enter Your E-mail Address"
              fullWidth
              margin="normal"
            />
          )}
        />
      </Grid>

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </Grid>
  );
};

export default AgenteToxico;
