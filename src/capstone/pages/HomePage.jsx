import {Typography, Grid} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../components/AppBar';
import MediaCard from '../components/Card';
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
    <ResponsiveAppBar xs={12} sm={12}></ResponsiveAppBar>
    <Grid container spacing={0} justifyContent="center" mt={20}>
      <Grid item md={3} xs={12} sm={6}>
        <MediaCard title={'See Samples'} icon={'science'}></MediaCard>
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <MediaCard title={'Statistics'} icon={'stats'}></MediaCard>
      </Grid>
    </Grid>
    </>
    
  )
}
