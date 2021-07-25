import React from 'react';

function Header(props) {
    return (
        <nav className="nav-bar">
            <div className="h1 text-center text-dark" id="pageHeaderTitle">{props.title}</div>
            <a href="/">
                <img className="back" src="./images/icons/back.png" alt="back button icon"></img>
            </a>
        </nav>);

}

export default Header;