import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Typography } from '@mui/material';

const Count = () => {
    var[count,setCount]= useState(0)
    
    var add=()=>{ 
       setCount(count+1)
    }
    var sub=()=>{
        setCount(count-1)
    }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h4'>{count}</Typography>
    
 <br/>
    <Button variant="contained" onClick={add}><AddIcon/></Button>&nbsp;
    <Button variant="contained" onClick={sub}><RemoveIcon/></Button>
    </div>
  )
}

export default Count
