import { ChildCare } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React, { Children } from 'react'

export const AuthLayout = ({children, titulo=""}) => {
    return (
        <>
            <Grid
                container
                spacing={0}
                direction={"column"}
                alignContent={"center"}
                justifyContent={"center"}
                sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
            >
                <Grid item className="box-shadow" xs={3} sx={{ backgroundColor: "white", padding: 3, borderRadius: 2, width:{md:450} }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>{titulo}</Typography>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}
