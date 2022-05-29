import React from 'react'
import "./header.css"
import IconButton from '@mui/material/IconButton';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import flower from '../images/flower.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className='left'>
                <IconButton><LibraryBooksIcon /></IconButton>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className='middle'>
                    Sweta sagar
                    <img src={flower} alt=""></img>
                </div>
            </Link>
            <div className='right'>
                <IconButton><PersonIcon /></IconButton>
            </div>
        </div>
    )
}

export default Header