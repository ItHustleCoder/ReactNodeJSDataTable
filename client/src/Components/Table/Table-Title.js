import React from 'react';

export default function TableTitle() {
    return(
        <React.Fragment>
            <div className="ibox-title">
                <h5>Puntivendita</h5>
                    <div className="ibox-tools">
                        <a className="collapse-link">
                            <i className="fa fa-chevron-up"></i>
                        </a>
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-wrench"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="#" className="dropdown-item">Config option 1</a>
                            </li>
                            <li><a href="#" className="dropdown-item">Config option 2</a>
                            </li>
                        </ul>
                        <a className="close-link">
                            <i className="fa fa-times"></i>
                        </a>
                    </div>
            </div>
        </React.Fragment>
    )
} 