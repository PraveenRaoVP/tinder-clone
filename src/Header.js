import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum'
import { IconButton } from '@mui/material';
function Header() {
  return (
    <div class="header">
        <div className="header-person">
            <IconButton>
                <PersonIcon fontSize="large" style={{fontSize: 45}}/>
            </IconButton>
        </div>
        <div className="header-tinder-logo">
            <img src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" width="60" height="60"></img>
        </div>
        <div className="header-chat-icon">
            <IconButton>
                <ForumIcon fontSize="large" style={{fontSize: 45}}/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header