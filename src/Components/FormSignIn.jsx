import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormDialog from "./FormLogIn";
import CreateUna from "./CreateUna";

//-----------------------------------

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./FormLogIn.css"
import { Link } from 'react-router-dom';

export default function FormDialogSign() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //-------------------------------------------------------------
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Button id='boton' onClick={handleClickOpen}>
        SIGN IN
      </Button>
      <Dialog 
        
        open={open}
        onClose={handleClose}
        PaperProps={{
          //PONER PROPIEDADES DEL MODAL
          style:{
            backgroundColor: "#1F1D1D",
            color: "#62079F",
            fontFamily: "Catamaran",
            alignItems: "center",
            borderRadius: "75px",
            width: "500px",
            height: "450px",
            padding: "40px",
            boxShadow: " 0 0 0 2px #62079F",
          } ,
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
          
        }}
      >
        <DialogTitle id='titulo' >SIGN IN</DialogTitle>
        <DialogContent id='campos'>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Correo electrónico"
            type="email"
            fullWidth
            variant="filled"
            placeholder='Jhon_Doe@mail.com'
            color='secondary'
            style={{backgroundColor: "#F3F3F322", borderRadius: "5px", color: "#62079F", fontFamily: "Inder", }}
          />
          <FormControl id="passContainer" sx={{ height: "10px"}} variant="filled" required  color='secondary' fullWidth>
          <InputLabel id="contaLabel" htmlFor="filled-adornment-password">Contraseña</InputLabel>
          <Input
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            style={{backgroundColor: "#F3F3F322", borderRadius: "5px", color:"#F6F5E4", fontFamily: "Inder", paddingTop: "0px", fontWeight: "500" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className='checkboxContainer'>
        <label>Aún no tenes cuenta? {<a><CreateUna/></a>}
        </label>
        
        </div>        

        </DialogContent>
        <DialogActions>
          <Button id='boton' onClick={handleClose}>Cancelar</Button>
          <Button id='boton' type="submit">Acceder</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}