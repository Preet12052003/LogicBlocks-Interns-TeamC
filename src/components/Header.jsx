import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/system/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';




const theme = createTheme({
  palette: {
    primary: {
     
      main: '#d500f9',
      
    },
    secondary:lime
    
  },
});
const ProjectNameInput = styled(TextField)({
  maxWidth: '200px',
  '& .MuiInputBase-input': {
    textAlign: 'center',
    fontWeight: 'bold',
    color:'white',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});





export default function Header() {
  // Add state management for project name if needed
  const [projectName, setProjectName] = React.useState('Project_Name');

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };


  return (
    <ThemeProvider theme={theme}>
    <Box bgcolor="primary.main" sx={{flexGrow: 1 , width: "100%",display: 'flex' }}>
      <AppBar  position="static">
        <Toolbar >
          {/* LogicBlocks Title */}
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h1 style={{fontfamily:"Georgia",fontweight: '400',fontstyle: 'normal'}}>LogicBlocks</h1>
          </Typography>

          {/* Navigation Buttons */}
          <div style={{position:"absolute",left:"300px"}}>
          <Button style={{fontFamily:"Georgia, serif;"}} sx={{ textTransform: 'capitalize',fontWeight: 'bold'  }} color="inherit"><SaveAsIcon/>Files</Button>
          <Button color="inherit" style={{fontFamily:"Georgia, serif;"}} sx={{ textTransform: 'capitalize',fontWeight: 'bold'  }}><CreateOutlinedIcon/>Edit</Button>
          <Button color="inherit" style={{fontFamily:"Georgia, serif;"}} sx={{ textTransform: 'capitalize' ,fontWeight: 'bold' }}><TipsAndUpdatesOutlinedIcon/>Tutorials</Button>
          
        
          <Button color="inherit" style={{fontFamily:"Georgia, serif;"}} sx={{ textTransform: 'capitalize' ,fontWeight: 'bold' }}>Boards</Button>
          <Button color="inherit" style={{fontFamily:"Georgia, serif;"}} sx={{ textTransform: 'capitalize' ,fontWeight: 'bold'  }}>Connect</Button>
          </div>
          
          <div style={{position:"absolute",left:"1200px"}}>
          {/* Editable Project Name */}
          <ProjectNameInput
            value={projectName}
            onChange={handleProjectNameChange}
            variant="outlined"
            placeholder="Project Name"
            InputProps={{
              startAdornment: <Typography >|</Typography>,
              endAdornment: <Typography>|</Typography>,
            }}/>

          </div>

          {/* Spacing Element */}
          <Box  sx={{ flexGrow: 1 }} />

          {/* Logo Placeholder */}
          <img src="trial_sprite_nobkg.png" alt="Logo" style={{ height: '50px' }} />

          {/* Sign In Button */}
          <Button color="inherit" style={{fontFamily:"Georgia, serif;"}} sx={{ textTransform: 'capitalize',fontWeight: 'bold' }}>Sign In</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
    
  );
}
