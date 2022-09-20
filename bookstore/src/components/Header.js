import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState()
  return (
    <div>
        <AppBar sx={{backgroundColor:'#5da5b0'}} position='sticky'>
        <Toolbar>
        <Typography>

        <MenuBookIcon/>
        </Typography>
        <Tabs
        sx={{ml:'auto'}} 
        textColor='inherit' 
        indicatorColor='primary' 
        value={value} 
        onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={NavLink} to="/books" label='Books' />
            <Tab LinkComponent={NavLink} to="/add" label='Add Book'/>
            <Tab LinkComponent={NavLink} to="/delete" label='Delete Book'/>
        </Tabs>
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header