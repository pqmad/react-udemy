import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import {Google} from "@mui/icons-material"
import {Link as RouterLink} from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"


export const RegisterPage = () => {
  return (
    <AuthLayout titulo="Registro">
      <form>
        <Grid container>
        <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Madeline"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@gmail.ocm"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <Button variant="contained" fullWidth>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction={"row"} justifyContent={"end"}>
            <Typography sx={{ mr: 1, mt: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} to="/auth/login" color={'inherit'} sx={{ mt: 1 }}>Ingresar</Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
