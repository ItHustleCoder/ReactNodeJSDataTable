import React from 'react';

export default function NavTable() {
    return(
        <React.Fragment>
            <li>
            <a href="#"><i className="fa fa-table"></i> <span className="nav-label">Tables</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="table_basic.html">Static Tables</a></li>
                        <li><a href="table_data_tables.html">Data Tables</a></li>
                        <li><a href="table_foo_table.html">Foo Tables</a></li>

                    </ul>
            </li>   
        </React.Fragment>
    )
}


















