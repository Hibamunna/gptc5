import { AppBar, Button, LinearProgress, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbarr = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>Employee App</Typography>&nbsp;
          <Button variant='contained' color='success'>
          <Link to ={'/'} style={{textDecoration:'none',colo:'white'}}>
            View
          </Link>
          </Button>
          &nbsp; &nbsp;
          <Button variant='contained' color='error'>
            <Link to={'/add'} style={{textDecoration:'none', color:'white'}}>
              Add
              </Link>
           </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbarr