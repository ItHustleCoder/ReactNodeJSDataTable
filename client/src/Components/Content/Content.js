
import React  from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Table from '../Table/Table';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function Content() {    
    return (
        <Router>
        <div id="wrapper">
            <SideBar/>
        <div id="page-wrapper" className="gray-bg dashbard-1">
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path={"/"} exact component={Table} />
        
                </Switch>
            </React.Fragment>
        </div>
           
        </div>
        </Router>
    )
    
}

export default Content;