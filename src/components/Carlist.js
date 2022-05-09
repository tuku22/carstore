import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-6';
import 'react-table/react-table.css';
import { AgGridReact } from 'ag-grid-react';
 import 'ag-grid-community/dist/styles/ag-grid.css';
 import 'ag-grid-community/dist/styles/ag-theme-balham.css';

 function Carlist() {
    const [cars, setCars] = useState([]);
  

    const fetchCars = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars));
    }

  /*   const updateCar = (updateCar, link) => {
        console.log("edit nappia painettu");
        console.log("link: " + link);
        fetch(link, {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(updateCar)
        })
        .then(response => {
            if(response.ok) {
                console.log("toimii");
                fetchCars();
            }
            else{
                alert('Jokin ei toimi');
            }
        })
        .catch(err => console.error(err))
    }
    const deleteCar = (link) => {
        console.log('delete painettu');
        console.log(link);

        fetch(link, {method: 'DELETE'})
            .then(response => {
                if(response.ok){
                    fetchCars();
                }
                     
            })
    }

    const addCar = (car) => {
        console.log("carlistin addcar functio");
        fetch('https://carrestapi.herokuapp.com/cars', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(car)
        })
        .then(response => {
            if(response.ok){
                fetchCars();
            }
            else{
                alert('Something went wrong when adding car');
            }
            })
            .catch(err => console.error(err))
      } */

      React.useEffect( () => {
      fetchCars();
    }, [])

    const columns = [
    {
        Header: 'Brand',
        accessor: 'brand'
    }, {
        Header: 'Model',
        accessor: 'model'
    }, {
        Header: 'Color',
        accessor: 'color'
    }, {
        Header: 'Fuel',
        accessor: 'fuel'
    }, {
        Header: 'Year',
        accessor: 'year'
    }, {
        Header: 'Price',
        accessor: 'price'
    }
    ]
    return(
        <div className="ag-theme-material" style={{height: 600, width: '90'}}>
           <Addcar addCar={addCar} />
            <AgGridReact
            rowData={cars}
            paginationPageSize={10}
            pagination={true}
            columnDefs={columns}
            >
            </AgGridReact>
        </div>
    );
}
export default Carlist;