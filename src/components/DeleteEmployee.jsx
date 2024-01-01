import React, { useEffect } from "react";
import { useState } from "react";


function DeteteEmployee(props) {


    const [employeeId, setEmployeeId] = useState(0);

    useEffect(() => {
        setEmployeeId(props.employeeId)
    }, [props.employeeId]);

    function showConfirmBox() {
        let confirm = window.confirm("Are You Sure you want to delete this Employee ! ");

        if (confirm) {
            console.log("Deleting the entry here ", employeeId);

            fetch("http://localhost:8082/deleteByEmployeeId?employeeId=" + employeeId).then((response) => {
                if (response.ok) {
                    window.location.reload();
                }
            }).catch((error) => {
                console.error(error);
            })
        } else {
            console.log("Delete Rejected");
        }
    }

    return <>
        <button className="btn btn-primary" style={{ marginRight: "10px" }} onClick={showConfirmBox}> Delete</button>
    </>
}

export default DeteteEmployee;