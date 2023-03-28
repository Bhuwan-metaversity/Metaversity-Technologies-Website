import React from 'react'
import "../Button/Button.css"
import Button from '@mui/material/Button';

const Buttons = (props) => {
  return (
    <Button sx={{background:"#FBB03B",color:"white",fontWeight:"bold",height:"50px"}} >{props.name}</Button>   
  )
}

export default Buttons
