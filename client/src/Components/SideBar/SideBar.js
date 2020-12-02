
import React  from 'react';
import NavSideTitle from './Nav-Side-Title';
import Dashboards from './Dashboards';
import SecondNav from './Nav-SecondLvl';
import OtherPage from './OtherPage';
import NavTable from './Nav-Tables';

function SideBar() {    
    return (        
                <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                <ul className="nav metismenu" id="side-menu">
                    <NavSideTitle />
                    <NavTable />
                    {/* <Dashboards /> */}
                    {/* <SecondNav /> */}
                    {/* <OtherPage /> */}
                   
                    

                </ul>
                </div>
            </nav>
    )
    
}

export default SideBar;