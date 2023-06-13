import { Grid, Typography, TextField, Button } from '@mui/material'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import userData from '../../db/users.json'

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [auth, setAuth ] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const res = userData.filter(user => user.email == email && user.password == pass);
      if (res.length > 0) {
        setAuth(true);
      }    
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if(auth) {
      localStorage.setItem("auth", auth);
      navigate('/home/');
    }
  }, [auth]);
    

  return (
    <>
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >

      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>

        <Typography variant='h5' sx={{ mb: 1 }}> Login</Typography>

        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField
                id=""
                label="email"
                type='email'
                placeholder='Email'
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2}}>
                <TextField
                  id=""
                  label="password"
                  type='password'
                  placeholder='Password'
                  fullWidth
                  value={pass}
                  onChange={(e) => setPass(e.target.value)} 
                />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2}}>
              <Grid item xs={12} sm={12}>
                <Button variant="contained" fullWidth sx={{ mt: 2}} type='submit'>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>

      </Grid>

    </Grid>
    </>
    
  )
}
