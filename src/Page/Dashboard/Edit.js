import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [name, setName] = useState(selectedEmployee.name);
    const [phonenumber, setPhonenumber] = useState(selectedEmployee.phonenumber);
    const [adress, setAdress] = useState(selectedEmployee.adress);
    const [amount, setAmount] = useState(selectedEmployee.amount);
    const [date, setDate] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!name || !phonenumber || !adress || !amount || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            name,
            phonenumber,
            adress,
            amount,
            date
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.name}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>EDIT CUSTOMER</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="phonenumber">Phonenumber</label>
                <input
                    id="phonenumber"
                    type="number"
                    name="phonenumber"
                    value={phonenumber}
                    onChange={e => setPhonenumber(e.target.value)}
                />
                <label htmlFor="adress">Adress</label>
                <input
                    id="adress"
                    type="text"
                    name="adress"
                    value={adress}
                    onChange={e => setAdress(e.target.value)}
                />
                <label htmlFor="amount">Amount ($)</label>
                <input
                    id="amount"
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit