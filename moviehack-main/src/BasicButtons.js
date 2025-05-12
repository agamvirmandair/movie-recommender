import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function BasicButtons() {
  return (
    <Stack spacing={0} direction="row" sx={{margin: 10, display:"flex", justifyContent: 'center', alignItems:"center"}}>
      <Link to={'/movies'}><Button variant="outlined">SUBMIT</Button>
      </Link>
    </Stack>
  );
}