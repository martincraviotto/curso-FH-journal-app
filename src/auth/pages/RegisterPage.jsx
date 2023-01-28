import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';


const formData={
  email:'',
  password:'',
  displayName:'',
};

const formValidation = {
  email:[(value)=>value.includes('@'),'El correo debe tener un @'],
  password: [(value)=>value.length >= 6, 'El password debe de tener de mas 6 letras'],
  displayName: [(value)=>value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const [formSubmited, setFormSubmited] = useState(false);


  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid,emailValid,passwordValid,
  } = useForm(formData, formValidation);

 
  const onSubmit = (event) => {
    event.preventDefault();  
    setFormSubmited(true);
  }

  return (
    <AuthLayout title='Register'>
      <h1>FormValid: {isFormValid ? 'Válido' : 'Incorrecto'}</h1>

      <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder="Nombre completo"
                fullWidth 
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error= {!!displayNameValid && formSubmited}
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com"
                fullWidth 
                name="email"
                value={email}
                onChange={onInputChange}
                error= {!!emailValid && formSubmited}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña"
                fullWidth 
                name="password"
                value={password}
                onChange={onInputChange}
                error= {!!passwordValid && formSubmited}
                helperText={passwordValid}
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2 , mt: 1 }}>
              
              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                  type='submit'
                  variant='contained' 
                  fullWidth
                >Crear Cuenta</Button>
              </Grid>
              
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}> ¿Ya tienes cuenta? </Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                ingresar
              </Link>
            </Grid>  

          </Grid>
        </form>

    </AuthLayout>

        
      
  )
}
