import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const New = () => {
  var[data,setData]=useState()
    var[input,setInput]=useState()
    const addName=()=>{
      setData(input)
    }
    const inputHandler=(e)=>{
console.log()
setInput(e.target.value)
    }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h3'>{data}</Typography>
      <TextField variant='outlined' label="Enter your name" onChange={inputHandler} ></TextField>
     <br></br><br></br>
      <Button variant='contained' color="secondary" onClick={addName}>ADD</Button>
    </div>
  )
}

export default New
