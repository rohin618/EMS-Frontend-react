import React, { useState } from 'react';
import apiClient from '../../components/api/apiClient';
import { apiRoutes } from '../../components/api/apiRoutes';
import { toast } from 'react-toastify';

const CreateEmployee = () => {
    const [employeeData, setEmployeeData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const postEmployee = async (e) => {
        e.preventDefault(); 
        console.log(employeeData); 
        const formData = new FormData();
        formData.append('firstName',employeeData.firstName);
        formData.append('lastName',employeeData.lastName);
        formData.append('email',employeeData.email);

        try {
            const response = await apiClient.post(apiRoutes.createEmp, employeeData); 
            if(response){
                toast.success("Employee Added Successfully");
            }
        } catch (e) {
            console.error('Error posting employee data:', e); 
            toast.error("Error to add Employee")
        }
    };

   
    const onChangeEmp = (e) => {
        const { name, value } = e.target;
        setEmployeeData({
            ...employeeData,
            [name]: value,
        });
    };

    return (
        <div className="create-em-outer">
            <h2 className="text-center">Create Employee</h2>
            <form onSubmit={postEmployee}> 
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
            
        </div>
    );
};

export default CreateEmployee;
