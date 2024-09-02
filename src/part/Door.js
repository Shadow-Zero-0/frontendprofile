import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Outlet } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';



import { Avatar, Stack } from "@mui/material";
import { Brightness4, Brightness7 } from '@mui/icons-material';
const drawerWidth = 240;

const Door = () => {
    const [mode, setmode] = React.useState('dark');
    const darkTheme = createTheme({
        palette: {
          mode: mode,
        },
      });
      
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [isClosing, setIsClosing] = React.useState(false);
    const arr =[
        {name:'Home',path:'/',icons:<HomeIcon />},
        {name:'About myself',path:'/Aboutmyself',icons:<PersonIcon />}
    ]
    const Navigate = useNavigate()
    const handleDrawerClose = () => {
      setIsClosing(true);
      setMobileOpen(false);
    };
  
    const handleDrawerTransitionEnd = () => {
      setIsClosing(false);
    };
  
    const handleDrawerToggle = () => {
      if (!isClosing) {
        setMobileOpen(!mobileOpen);
      }
    };
  
    const drawer = (
      <div>
        
        <List sx={{textAlign:'center'}}>
         <IconButton onClick={() => {
           setmode( mode === 'dark' ? 'light':'dark')
         
         }} >
       
        {mode==='light'? <Brightness7 sx={{color:'orange'}}/>: <Brightness4 sx={{color:'orange'}}/>}
      </IconButton>
         </List>
        <Divider />
        <List>
          {arr.map((item) => (
            <ListItem onClick={() => {
                Navigate(item.path)
            }} key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon >
                  {item.icons}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      
    
      </div>
    );
  
    

  
    return (
        <ThemeProvider theme={darkTheme}>
              <CssBaseline />
           <Box>
           <AppBar position="static"  sx={{ width:  {sm:`calc(100% - ${drawerWidth}px)`}, ml:{sm:`${drawerWidth}px`} }}>
           <Toolbar>
           <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               ProFlie
             </Typography>
     
             <Stack sx={{ alignItems: "center", flexDirection: "row" }}>
               <Typography mr={1} variant="body1" color="#fff">
                 Omar Ahmed
               </Typography>
     
               <Avatar alt="Remy Sharp" src="1.png" />
             </Stack>
           </Toolbar>
         </AppBar>
    
           <Box sx={{ display: 'flex' }}>
         <CssBaseline />
        
         <Box
           component="nav"
           sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
           aria-label="mailbox folders"
         >
    
           <Drawer
    
             variant="temporary"
             open={mobileOpen}
             onTransitionEnd={handleDrawerTransitionEnd}
             onClose={handleDrawerClose}
             ModalProps={{
               keepMounted: true, 
             }}
             sx={{
               display: { xs: 'block', sm: 'none' },
               '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
             }}
           >
             {drawer}
           </Drawer>
           <Drawer
             variant="permanent"
             sx={{
               display: { xs: 'none', sm: 'block' },
               '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
             }}
             open
           >
             {drawer}
           </Drawer>
         </Box>
    
       </Box>
       <Outlet />
 </Box>  
        </ThemeProvider>

    );
}

export default Door;
