import logo from './logo.svg';
import './App.css';
import BasicButtons from './BasicButtons.js'
import Button from '@mui/material/Button'

import {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function RowAndColumnSpacing({index, setAnswers, question,horror,action,comedy,drama}) {
    const [selected, setSelected] = useState(null);
    
    // useEffect(()=>{
    //     console.log(selected)
    // }, [selected])

    return (
    
    
    <Box sx={{ width: '80%', display:"flex", alignItems:"center", justifyContent: 'center', margin: 10  }}>
      
    <RadioGroup

        value={selected}
        onChange={(e)=> {
          setAnswers(prev => {
            const next = [...prev];
            next[index] = e.target.value;
            return next;
          })
            setSelected(e.target.value);

        }} 
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
        <Grid item xs={12} sx={{textDecoration: "underline"}}>
            {question}
        </Grid>
        <Grid item xs={6}>
            <Button variant="outlined" size="large" sx={{border: 2}}>
              <FormControlLabel sx={{color:"white"}} value = "Horror" control = {<Radio sx={{color:"white"}}/>} label = {horror}/>
            </Button>
        </Grid>
        <Grid item xs={6}>
         
          <Button variant="outlined" size="large" sx={{border: 2}}>
            <FormControlLabel sx={{color:"white"}} value = "Comedy" control = {<Radio sx={{color:"white"}}/>} label = {comedy}/>
            </Button>
      
        </Grid>
        <Grid item xs={6}>
 
          <Button variant="outlined" size="large" sx={{border: 2}}>
            <FormControlLabel sx={{color:"white"}} value = "Action" control = {<Radio sx={{color:"white"}}/>} label = {action}/>
            </Button>
    
        </Grid>
        <Grid item xs={6}>
          
          <Button variant="outlined" size="large" sx={{border: 2}}>
            <FormControlLabel sx={{color:"white"}} value = "Drama" control = {<Radio sx={{color:"white"}}/>} label = {drama}/>
            </Button>

          

            
            
            
            
          
        </Grid>
      </Grid>
    </RadioGroup>
    </Box>
  );
}

export default RowAndColumnSpacing;