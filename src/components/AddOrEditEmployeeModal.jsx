import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddOrEditEmployeeModal(props) {
    const [show, setShow] = useState(false);
    const [employeeId, setEmployeeId] = useState(null);
    const [employeeFirstName, setEmployeeFirstName] = useState('');
    const [employeeLastName, setEmployeeLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

    useEffect(() => {
        if (props.employeeData) {

            setEmployeeId(props.employeeData.employeeId);
            setEmployeeFirstName(props.employeeData.employeeFirstName);
            setEmployeeLastName(props.employeeData.employeeLastName);
            setEmailAddress(props.employeeData.emailAddress);
        }
        // else {
        //     setEmployeeId(null);
        //     setEmployeeFirstName('props.employeeData.employeeFirstName');
        //     setEmployeeLastName(props.employeeData.employeeLastName);
        //     setEmailAddress(props.employeeData.emailAddress);
        // }

    }, [props.employeeData]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function updateEmployeeData() {

        let jsonObject = {};
        jsonObject.employeeId = employeeId;
        jsonObject.employeeFirstName = employeeFirstName;
        jsonObject.employeeLastName = employeeLastName;
        jsonObject.emailAddress = emailAddress;

        fetch('http://localhost:8082/addEmployee', {
            method: "POST",
            body: JSON.stringify(jsonObject),
            headers: {
                "content-type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                window.location.reload();
            }

            console.log(" ^^^ ", response);
        })

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {props.employeeData ? 'Edit' : 'Add Employee'}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title> Add Or Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <br />
                        <div className='row'>
                            <div className='col'>
                                <div className='form-floating mb-3'>
                                    <input type='text' className='form-control' value={employeeFirstName} id='firstNameTxt' onChange={(e) => setEmployeeFirstName(e.target.value)} placeholder='Enter Employee First Name'></input>
                                    <label htmlFor='firstNameTxt'>First Name</label>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='form-floating mb-3'>
                                    <input type='text' className='form-control' id='lasttNameTxt' value={employeeLastName} onChange={(e) => setEmployeeLastName(e.target.value)} placeholder='Enter Employee Last Name' ></input>
                                    <label htmlFor='lasttNameTxt'>Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type='email' className='form-control' id='emailTxt' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder='Enter Employee Email Address'></input>
                            <label htmlFor='lasttNameTxt'>Email Address</label>
                        </div>
                    </div >
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateEmployeeData}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddOrEditEmployeeModal;