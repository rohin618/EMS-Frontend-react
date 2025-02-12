import React, { useState } from 'react';
import { toast } from 'react-toastify';
import apiClient from '../../components/api/apiClient';
import { apiRoutes } from '../../components/api/apiRoutes';


const EmpTemplate = ({ index, employeeData, handleChange }) => {
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(index, name, value); 
    };

    return (
        <div className='d-flex gap-5 my-5'>
            <div >
                <label className="mb-3" htmlFor={`firstName-${index}`}>First Name</label>
                <input
                    type="text"
                    className="form-control"
                    id={`firstName-${index}`}
                    name="firstName"
                    placeholder="Enter first name"
                    value={employeeData.firstName || ''}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-3" htmlFor={`lastName-${index}`}>Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    id={`lastName-${index}`}
                    name="lastName"
                    placeholder="Enter last name"
                    value={employeeData.lastName || ''}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-3" htmlFor={`email-${index}`}>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id={`email-${index}`}
                    name="email"
                    placeholder="Enter email"
                    value={employeeData.email || ''}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}; 

const CreateListEmp = () => {
    const [empTemplates, setEmpTemplates] = useState([]);

    const handleAddEmployee = () => {
        setEmpTemplates([
            ...empTemplates,
            { firstName: '', lastName: '', email: '' } 
        ]);
    };

    const handleInputChange = (index, name, value) => {
        const updatedTemplates = empTemplates.map((emp, empIndex) => {
            if (empIndex === index) {
                return { ...emp, [name]: value }; 
            }
            return emp;
        });

        setEmpTemplates(updatedTemplates);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try{
            const response = apiClient.post(apiRoutes.addAllEmp,empTemplates);
            if(response){
                toast.success("Employee List Added ")
            }
        }catch(e){
            console.log(e);
            toast.error("Error to Add Employee List")
        }
    };

    return (
        <div>
            <h2 className='text-center my-4'>Add List Of Employees</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    {empTemplates.map((employee, index) => (
                        <EmpTemplate
                            key={index}
                            index={index}
                            employeeData={employee}
                            handleChange={handleInputChange}
                        />
                    ))}
                </div>

                <div className='my-4'>
                    <button type="button" className='btn btn-secondary me-4' onClick={handleAddEmployee}>
                        Add New One
                    </button>
                    <button type="submit" className='btn btn-primary'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateListEmp;
