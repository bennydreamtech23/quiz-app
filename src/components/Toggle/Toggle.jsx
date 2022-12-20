import React, { useContext } from 'react'
import './Toggle.module.scss'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
//import { orange } from '@mui/material/colors';
import { themeContext } from '../../Context';

function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const changeMode = ()=>{
    console.log('Theme Changed');
    theme.dispatch({type:'toggle'})
  }
  return (
    <div className="toggle" onClick={changeMode}>
      <LightModeOutlinedIcon style={{color:'var(--orange)',fontSize:'1rem'}}/>
      <DarkModeOutlinedIcon style={{color:'var(--orange)',fontSize:'1rem', marginLeft:'2px'}}/>
      <div className="t-btn" style={darkMode?{right:1}:{left: 1}} />
    </div>
  )
}

export default Toggle