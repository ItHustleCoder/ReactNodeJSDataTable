
import React  from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Table from '../Table/Table';


function Content() {    
    return (
        <div id="wrapper">
            <SideBar/>
        <div id="page-wrapper" className="gray-bg dashbard-1">
            <React.Fragment>
                <Header />
                <Table />
            </React.Fragment>
        </div>
           
        </div>
    )
    
}

export default Content;