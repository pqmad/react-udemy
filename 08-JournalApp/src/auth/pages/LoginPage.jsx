import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import {Google} from "@mui/icons-material"
import {Link as RouterLink} from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
export const LoginPage = () => {
  return (
    <AuthLayout titulo="Login">
        <form>
          <Grid container>
            <Grid item xs={12} sm={12} sx={{ mt:2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="correo@gmail.ocm"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} sx={{ mt:2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="contraseña"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb:2, mt:1}}>
              <Grid item xs={12} sm={6} sx={{ mt:2 }}>
                <Button variant="contained" fullWidth>Login</Button>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ mt:2 }}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml:1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction={"row"} justifyContent={"end"}>
              <Link component={RouterLink} to="/auth/register" color={'inherit'} sx={{ mt:1 }}>Crear una cuenta</Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
  )
}
