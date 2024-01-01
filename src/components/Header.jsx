
import React from 'react'
import AddOrEditEmployeeModal from './AddOrEditEmployeeModal';

function Header() {
    return <>
        <nav className='navbar navbar-dark bg-dark justify-content-between'>
            <samp style={{ color: 'white', padding: "20px", fontWeight: "bold" }}>Employee Crud Project</samp>
            <div className="d-flex mr-3"> {/* Add some right margin (mr-3) */}
                {/* Use Bootstrap utility classes to position EditEmployeeModal */}
                <div className="ms-auto" style={{ padding: "20px" }}>
                    <AddOrEditEmployeeModal />
                </div>
            </div>
        </nav>
    </>
}

export default Header;