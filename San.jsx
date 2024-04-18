import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const San = () => {
  var[data,setData]=useState()
  
  const dataHandling=()=>{
    setData("Welcome to Gallery")
  }
  const tataHandling=()=>{
    setData("Welcome to Home")
  }
  const bataHandling=()=>{
    setData("contact us")
  }
  return (
    <div style={{margin:'10%'}}>
      <Typography variant='h3'>{data}</Typography>
     
  <Button  variant='contained'color="secondary" onClick={dataHandling}>Gallery</Button>
<Button variant="contained" color="success" onClick={tataHandling}>
  Home
</Button>
<Button  variant="contained" color="error" onClick={bataHandling}>
  Contact us
</Button>
     
    </div>
  )
}

export default San
