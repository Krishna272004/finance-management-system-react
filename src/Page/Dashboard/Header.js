import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>FINANCE MANAGEMENT SYSTEM</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>ADD CUSTOMER</button>
            </div>
        </header>
    )
}

export default Header