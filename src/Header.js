import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
function Header() {
  return (
    <div class="header">
        <div className="header-person">
            <PersonIcon fontSize="large"/>
        </div>
        <div className="header-tinder-logo">
            <img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon-3.png"></img>
        </div>
        <div className="header-chat-icon">
            <ChatIcon fontSize="large" />
        </div>
    </div>
  )
}

export default Header