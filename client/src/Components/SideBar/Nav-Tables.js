import React from 'react';
import { Link } from 'react-router-dom';

export default function NavTable() {
    return(
        <React.Fragment>
            <li>
            <a href="#"><i className="fa fa-table"></i> <span className="nav-label">Tables</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="#">Abinamenti</a></li>
                        <Link to={'/'}>
                            <li><a href="#">Data Tables</a></li>
                        </Link>
                        <li><a href="#">Foo Tables</a></li>

                    </ul>
            </li>   
        </React.Fragment>
    )
}


















