import React from 'react';

export default function DataTableHeader() {
    
    return (
        <React.Fragment>
            <div className="row wrapper border-bottom white-bg page-heading" style={{ width : '100%', paddingLeft : '30px'}}>
                <div className="col-lg-10">
                        <h2>Data Tables</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a>Tables</a>
                            </li>
                            <li className="breadcrumb-item active">
                                <strong>Data Tables</strong>
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-2">

                    </div>
            </div>
        </React.Fragment>
    )
}

