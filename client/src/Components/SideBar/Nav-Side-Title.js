import React from 'react';

  function NavSideTitle() {
        return (
            <React.Fragment>
                 <li className="nav-header">
                        <div className="dropdown profile-element">
                            <img alt="image" className="rounded-circle" src="img/volantino.ico"/>
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <span className="block m-t-xs font-bold">VolantinoPiu</span>
                                <span className="text-muted text-xs block">Options<b className="caret"></b></span>
                            </a>
                            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                                <li><a className="dropdown-item" href="contacts.html">Contacts</a></li>
                                <li><a className="dropdown-item" href="mailbox.html">Mailbox</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a className="dropdown-item" href="login.html">Logout</a></li>
                            </ul>
                        </div>
                        <div className="logo-element">
                            IN+
                        </div>
                    </li>
            </React.Fragment>
        )
    
}

export default NavSideTitle;