import React from 'react'
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import flower from '../images/flower.png'
import { Link } from 'react-router-dom';



function Header() {


    return (
        <div className='header'>
            <div className='dropdown'>
                
            </div>
            
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className='middle'>
                    Sweta sagar
                    <img src={flower} alt=""></img>
                </div>
            </Link>
            <div className='right'>
                <Link to="login">
                    <IconButton><PersonIcon /></IconButton>
                </Link>
            </div>
        </div>
    )
}

export default Header