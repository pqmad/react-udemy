// MENU LATERAL

import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <>
      <Box
        sx={{
          width:
            { sm: drawerWidth, },
          flexShrink:
            { sm: 0, },
        }}
      >
        <Drawer
          variant="permanent" // permanent: no se cierra, temporary: se cierra
          open={true}
          sx={
            {
              display: { xs: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }
          }
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">Madeline</Typography>
          </Toolbar>
          <Divider />
          <List>
            {
              ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <Grid container>
                      <ListItemText primary={text} />
                      <ListItemText secondary={"item no................ " + index} />

                    </Grid>
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>
        </Drawer>
      </Box>
    </>
  )
}
