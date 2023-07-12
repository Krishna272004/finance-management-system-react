import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [adress, setAdress] = useState('');
    const [amount , setAmount] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!name || !phonenumber || !adress || !amount || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            name,
            phonenumber,
            adress,
            amount,
            date
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    } 

    /*const PostData = async (e)=> {
      e.preventDefault();

      const {id,name,phonenumber,adress,amount,date}= newEmployee;
      const res = await fetch("/ADD CUSTOMER",{
        method: "POST",
        headers: {
            "content-Type":"application/json"
        },
        body:JSON.stringigy({ 
            id,name,phonenumber,adress,amount,date

        })
      });
      const res = await res.json();
      history.push("")*/
    

    


    return (
        <div className="small-container">
            <form method='POST' onSubmit={handleAdd}>
                <h1>ADD CUSTOMER</h1>
                <label htmlFor="name"> Name </label>
                <input
                    id="name"
                    type="text"
                    ref={textInput}
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
                <label htmlFor="amount">Amount($)</label>
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add