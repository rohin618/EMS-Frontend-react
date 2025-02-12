import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiClient from '../../components/api/apiClient';
import { apiRoutes } from '../../components/api/apiRoutes';
import { toast } from 'react-toastify';

const EditEmployee = () => {
    const [employeeData, setEmployeeData] = useState({});
    useEffect(() => {
        fetchEmployee();
    },[])
    const navigate = useNavigate();
    const { empId } = useParams();
    const fetchEmployee = async () => {
        try {
            const response = await apiClient.get(apiRoutes.getSingleEmp(empId));
            console.log(response.data)
            if (response) {
                setEmployeeData(response.data);
            }

        } catch (e) {
            console.log(e);

        }
    }

    const onChangeEmp = (e) => {
        const { name, value } = e.target;
        setEmployeeData({
            ...employeeData,
            [name]: value,
        });
    };



    const updateEmployee = async (e) => {
        e.preventDefault();


        try {
            const response = await apiClient.put(apiRoutes.updateEmp(empId), employeeData);
            if (response) {
                toast.success("Employee Edited Successfully");
            }
        } catch (e) {
            console.error('Error posting employee data:', e);
            toast.error("Error to Edit Employee")
        }
    };

    return (
        <div className="create-em-outer">
           
            <h2 className="text-center">Edit Employee</h2>
            <form onSubmit={updateEmployee}>
                <div className="form-group my-4">
                    <label className="mb-3" htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter first name"
                        value={employeeData.firstName}
                        onChange={onChangeEmp}
                    />
                </div>
                <div className="form-group my-4">
                    <label className="mb-3" htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter last name"
                        value={employeeData.lastName}
                        onChange={onChangeEmp}
                    />
                </div>
                <div className="form-group my-4">
                    <label className="mb-3" htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={employeeData.email}
                        onChange={onChangeEmp}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
                
            </form>
            <button className='btn btn-primary float-end' onClick={()=>{navigate(-1)}}>Back</button>

        </div>
    )
}

export default EditEmployee
