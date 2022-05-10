import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Addcar (props) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: '', price: ''
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        setCar({...car, [event.target.name] : event.target.value})
    } 

    const addCar = () => {
        props.saveCar(car);
        handleClickClose(); 
    }

    const inputChanged = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
        console.log("syotetta muutettu" + car.brand);
    
    }
    return(
        <div>
        <Button style={{margin : 10}} variant ="outlined" color="primary" onClick={handleClickOpen}>
            Add car

        </Button>
        <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Car</DialogTitle>
                <DialogContent>
                    <TextField
                    autoFocus
                    margin="dense"
                    name="brand"
                    value={car.brand}
                    onChange={inputChanged}
                    label="brand"
                    fullWidth
                    />
                    <TextField
                    margin="dense"
                    name="model"
                    value={car.model}
                    onChange={inputChanged}
                    label="model"
                    fullWidth
                    />
                      <TextField
                    margin="dense"
                    name="color"
                    value={car.color}
                    onChange={inputChanged}
                    label="color"
                    fullWidth
                    />
                      <TextField
                    margin="dense"
                    name="fuel"
                    value={car.fuel}
                    onChange={inputChanged}
                    label="fuel"
                    fullWidth
                    />
                      <TextField
                    margin="dense"
                    name="year"
                    value={car.year}
                    onChange={inputChanged}
                    label="year"
                    fullWidth
                    />
                      <TextField
                    margin="dense"
                    name="price"
                    value={car.price}
                    onChange={inputChanged}
                    label="price"
                    fullWidth
                    />
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="primary">Cancel</Button>
                    <Button onClick={addCar} color="primary">Save</Button>
                </DialogActions>
        </Dialog>
        </div>
    );
}