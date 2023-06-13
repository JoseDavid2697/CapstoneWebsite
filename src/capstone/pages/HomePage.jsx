import {Typography, Grid} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../components/AppBar';

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if(!isAuthenticated){
      navigate("/auth/")
    }
  });
  
  return (
    <>
      <Grid container spacing={0}>
        <Grid item>
          <ResponsiveAppBar></ResponsiveAppBar>
        </Grid>
        <Grid item sx={{mt:10}}>
          <Typography variant='h1'>HomePage</Typography>
        </Grid>
      </Grid>
    </>
    
  )
}
