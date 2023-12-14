import { AppBar, Grid, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import { Grade, LogoutOutlined, MenuOutlined } from '@mui/icons-material'
export const NavBar = ({ drawerWidth }) => {
    return (
        <AppBar position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction={'row'} justifyContent='space-around' alignItems={'center'}>
                    <Typography variant='h6' noWrap component={'div'}>JournalAPP</Typography>
                    <IconButton
                            color='error'
                        >
                        <LogoutOutlined/>
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
