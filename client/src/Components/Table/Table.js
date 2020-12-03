import React , { Component, useState , useEffect} from 'react';
import TableTitle from './Table-Title';
import TableContent from './Table-Content';
import Footer from '../Footer/Footer';
import Axios from 'axios';

export default function Table() {
   
    const [data, setData] = useState([]);

    useEffect(() => {
        queryData();
    }, [])
    
    const queryData = async() => {
       await Axios.post('http://localhost:7070/puntivendita', {
            headers: {
                'Content-type' : 'application/json'
            }
        }).then((response) => {  
            console.log(response);
            setData(response.data);
        })
        
    }   


    return (
        <div className="wrapper wrapper-content animated fadeInRight" >
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox ">
                        <React.Fragment>
                            <TableTitle />
                            <TableContent data={data} />
                          
                        </React.Fragment>
                    </div>
                </div>

            </div>
                <React.Fragment>
                    <Footer />
                </React.Fragment>
        </div>
    )
}