import RowAndColumnSpacing from '../RowAndColumnFunction';

import {useLocation} from 'react-router-dom'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const alist = [['CARS1', '123234', 'CAR'],
['CARS2', '12322324', 'CAR'],
['CARS3', '112234', 'CAR']]

export default function BasicGrid() {
    const location= useLocation();
    // console.log("last time")
    // console.log(location.state)
    return (


            <Box sx={{ flexGrow: 1 }}>

{
            location.state && location.state.map((q,index) => (
                
                <Grid container spacing={2}>
                    
                    <Grid item xs={6} sx={{backgroundColor: "lightblue"}}>
                        <Item sx={{backgroundColor: "lightblue"}}>

                          <img style={{maxWidth: "100%", height: 'auto'}} src={`https://image.tmdb.org/t/p/w500${q[1]}`}>
                          </img>
                        </Item>
                    </Grid>
                    {/* right */}
                    <Grid item xs={6} sx={{backgroundColor: "lightgray"}}>

                        <Item  sx={{backgroundColor: "pink"}}>

                            {/* top right */}
                            <Grid item xs={12}>
                                <Item sx={{backgroundColor: "white"}}>


                                    {q[0]}


                                </Item>
                            </Grid>
                            {/* bottom right */}
                            <Grid item xs={12}>
                                <Item sx={{backgroundColor: "white"}}>


                                    {q[2]}


                                </Item>
                            </Grid>

                        </Item>
                    </Grid>

                </Grid>
                                
                                
                                
                                
                            )
                            )
                        }
            </Box>
    );
}



// function displayMovies (){
//     return(




//         alist.map((m, index)=>(
//             index={index}
//             title photo description
//               title={m[0]}
//               photo={m[1]}
//               desc={m[2]}

//           )
//         )

//     )



// }


// export displayMovies;
