import React , { useState , useEffect} from 'react';
import {BootstrapTable, 
    TableHeaderColumn, SearchField, ClearSearchButton, ShowSelectedOnlyButton} from 'react-bootstrap-table';
import {Button } from 'react-bootstrap';
import Axios from 'axios';


/* RenderSize */

/* Custom Pagination */
function renderShowsTotal(start, to, total) {
    return (
      <p style={ { color: 'blue' , fontSize: '16px'} }>
        Da { start } a { to }, totale  { total };
      </p>
    );
  }

function onAfterInsertRow(row) {
    let newRowStr = '';
  
    for (const prop in row) {
      newRowStr += prop + ': ' + row[prop] + ' \n';
    }
    alert('The new row is:\n ' + newRowStr);
  }


function afterSearch(searchText, result) {
    for( let i = 0; i < result.length; i++) {
        // console.log('Fruit: ' + result[i].idPuntovendita + ', ' + result[i].location + ', ' + result[i].Indirizzo); 
    }
}

  function handleClearButtonClick(onClick) {
      onClick();
  }


  function createCustomClearButton (onClick) {
    return (
      <ClearSearchButton 
        btnText = 'Clear'
        btnContextual='btn-primary'
        className= 'btn btn-secondary mt-1 mr-1'
        onClick={e =>handleClearButtonClick(onClick)}
      />
    )
  }

  /* Button Show Checked items */

  function handleShowSelectButtonClick (onClick) {
    onClick();
  }

  function createCustomShowSelectButton (onClick, showSelected) {
    return (
        <ShowSelectedOnlyButton
            showAllText='All'
            showOnlySelectText='Selezionati'
            btnContextual='btn-info'
            className='btn mt-2'
            onClick={ e => handleShowSelectButtonClick(onClick) }
        />
        );
    }
    
  function searchCustomField(props) {
      return (
        <SearchField 
            className="input-control mr-2 mt-1  "
            placeholder='Cerca...'
        />
      )
  }
  

const options = {
    afterSearch: afterSearch,
    clearSearch: true,
    searchField: searchCustomField,
    clearSearchBtn: createCustomClearButton,
    afterInsertRow: onAfterInsertRow,
    showSelectedOnlyBtn: createCustomShowSelectButton,
    /* Pagination */
    page:1,
    sizePerPage: [ {
        text: '5', value: 5
    },{
        text: '10', value: 10
    }

    ],
    sizePerPage: 10,
    pageStartIndex: 0,
    paginationSize: 3,
    perPage: 'Prev',
    firstPage: 'First',
    lastPage: 'Last',
    paginationShowsTotal: renderShowsTotal,
    paginationPosition: 'top'
    
}





export default function TableContent(props) {

  /* Axios call */

  const [box, setBox] = useState({});
  const [update, setUpdate] = useState('');
 

/* Two mode for axios */
  const { idPuntovendita, location, regione, indirizzo} = box;

    const axiosQuery= async() => {
      await Axios.post('http://localhost:7070/about', {
        header: {
          'Content-type': 'application/json'
        },

        idPuntovendita,
        location,
        indirizzo,
        regione
       

      }).then((res) => {
        console.log(`Everthing is good ${res}`);
      }).catch((err) => {
        console.log(`Opps..Happend some error, ${err}`);
      })
    }
    
  // async function axiosQuery() {
  //   try {
  //     const response = await Axios.post('http://localhost:7070/about', {post_data: box});
  //     console.log('Data returned is :', response);

  //   } catch(e) {
  //     console.log('Axios request is failed');
  //   }
  // }
 
   useEffect(() => {
      axiosQuery();
   },[update]);




    function onRowSelect(row, isSelected, e) {
      let rowStr = '';
      for (const prop in row) {
        rowStr += prop + ': "' + row[prop] + '"';
      }
      console.log(e);
      setUpdate(e);
      
      
      setBox(row);
      alert(`is selected: ${isSelected}, ${rowStr}`);
    }



   function onSelectAll(isSelected, rows) {
     alert(`is selected all: ${isSelected}`);
     if(isSelected) {
       alert('Current display and selcted data');
     }else {
       alert('unselecte rows ');
     }
     for(let i = 0; i < rows.length; i++) {
      //  alert(rows[i].id);
     }
   }

    const selectRowProp = {
        mode: 'checkbox',
        clickToSelect:  true,
        onSelect: onRowSelect,
        bgColor: 'gold',
        showOnlySelected: true,
        onSelectAll: onSelectAll
        
    };
    function buttonFormatter(cell, row){
        return (
            <Button className='btn btn-form  ml-2'>
                Save
            </Button>
        )
      }
 
      /* FIXME: changing width became not responsive */

    return(
        <div>
         
        <BootstrapTable data={props.data} selectRow={selectRowProp} search={ true } options={ options }  pagination={ true } >
          <TableHeaderColumn isKey width='50' hidden  dataField='idPuntovendita'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='location' width='600' >
            Città
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Indirizzo'>
            Indirizzo
          </TableHeaderColumn>
          <TableHeaderColumn dataField='regione'>
              Regione
          </TableHeaderColumn>
          <TableHeaderColumn dataField='button' width='90' dataFormat={buttonFormatter}>
              Apply
          </TableHeaderColumn>
        </BootstrapTable>

        {/* <Button  className="btn btn-outline mt-1 w-100">Click</Button> */}
      </div>
    )




/* Previos version */

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     queryData();
    // }, [])
    
    // const queryData = () => {
    //     Axios.post('http://localhost:7070/puntivendita', {
    //         headers: {
    //             'Content-type' : 'applicaion/json'
    //         }
    //     }).then((response) => {  
    //         console.log(response);
    //         setData(response.data);
    //     })
        
    // }
    // /* TestTODO: */


    




    // return (
    //     <div className="ibox-content">
    //         <div className="table-responsive">
    //                 <table className="table table-striped table-bordered table-hover dataTables-example" >
    //                 <thead>
    //                 <tr role="row">
    //                     <th className="sorting_asc" tabIndex="0">Locazione</th>
    //                     <th>Indirizzo</th>
    //                     <th>Regione</th>
    //                     <th>Abbina</th>
    //                     <th>Salva</th>
    //                 </tr>
    //                 </thead>
    //                 <tbody>
    //                 {data.map((items, key) => {
    //                         return(
    //                             <React.Fragment>
    //                                 <tr className="gradeC">
    //                                 <td >{items.location}</td>
    //                                 <td >{items.Indirizzo}</td>
    //                                 <td>{items.regione}</td>
    //                                 <td>
    //                                     <input type="checkbox"/>
    //                                 </td>
    //                                 <td>
    //                                     <button>Salva</button>
    //                                 </td>
    //                                 </tr>
    //                             </React.Fragment>                            )
                    
    //                     })}
                   
                    
    //                 </tbody>
    //                 <tfoot>
    //                 <tr>
    //                     <th>Rendering engine</th>
    //                     <th>Browser</th>
    //                     <th>Platform(s)</th>
    //                     <th>Engine version</th>
    //                     <th>CSS grade</th>
    //                 </tr>
    //                 </tfoot>
    //                 </table>
    //             </div>
    //     </div>

    // )
}