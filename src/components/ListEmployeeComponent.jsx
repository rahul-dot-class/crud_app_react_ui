import React, { useEffect, useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddOrEditEmployeeModal from "./AddOrEditEmployeeModal";
import DeteteEmployee from "./DeleteEmployee";

//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


function ListEmployeeComponent() {
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        async function getList() {
            const response = await fetch("http://localhost:8082/getEmployeeList");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json()
            setEmployeeList(data);
        }
        getList();
    }, []);

    return <div>
        <br />
        <h3 style={{ display: 'flex', justifyContent: "center" }}>List Of Employees </h3>
        <br />
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <table className="table table-striped table-bordered" style={{ width: "95%" }}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeList.map(employee => {
                            return (<tr key={employee.employeeId}>
                                <td>{employee.employeeId}</td>
                                <td>{employee.employeeFirstName}</td>
                                <td>{employee.employeeLastName}</td>
                                <td>{employee.emailAddress}</td>
                                <td><AddOrEditEmployeeModal employeeData={employee} />  <DeteteEmployee employeeId={employee.employeeId} /> </td>
                            </tr>)
                        }
                        )

                    }
                </tbody>

            </table>
        </div>
    </div>
}

export default ListEmployeeComponent;