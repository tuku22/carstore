import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Editcar from './Editcar';
import Addcar from './Addcar';


export default function Carlist () {
    const [cars, setCars] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
    }

    const saveCar = (car) => {
        fetch('https://carstockrest.herokuapp.com/cars', {
        method: 'POST', 
        headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify.apply(car)
    })
    .then(res => fetchData())
    .catch (err => console.error(err))
}

    const updateCar = (updateCar, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(updateCar)
        })
        .then(response => {
            if(response.ok) {
                console.log("Worked");
                fetchData();
            }
            else{
                alert('Something went wrong.');
            }
        })
        .catch(err => console.error(err))
    }

    const deleteCar = (link) => {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))

    }

    const addCar = (car) => {
        console.log("carlistin addcar functio");
        fetch('https://carstockrest.herokuapp.com/cars', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(car)
        })
        .then(response => {
            if(response.ok){
                fetchData();
            }
            else{
                alert('Something went wrong');
            }
            })
            .catch(err => console.error(err))
      }

      const columns = [
        { field: 'brand', sortable: true, filter: true },
        { field: 'model', sortable: true, filter: true },
        { field: 'color', sortable: true, filter: true },
        { field: 'fuel', sortable: true, filter: true },
        { field: 'year', sortable: true, filter: true },
        { field: 'price', sortable: true, filter: true },
        { headerName: '', width: 100, field: '_links.self.href', 
        cellRenderer: params =>
            <Editcar updateCar={updateCar} params={params}/>
        },
        { headerName: '', width: 100, field: '_links.self.href', 
        cellRenderer: params =>
            <IconButton onClick={() => deleteCar(params.value)}>
                <DeleteIcon color="error"/>
            </IconButton>
        }
    ]

    return(
        
        <div className="ag-theme-material" style={{height: 600, width: '90'}}>
            <Addcar saveCar={saveCar} />
 <AgGridReact

            rowData={cars}
            paginationPageSize={10}
            pagination={true}
            columnDefs={columns}
            >
            </AgGridReact>

        </div>
    )
}