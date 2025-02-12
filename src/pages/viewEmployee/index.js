import React, { useEffect, useState } from 'react'
import apiClient from '../../components/api/apiClient'
import { apiRoutes } from '../../components/api/apiRoutes'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ListEmployee = () => {
    const [empData, setEmpData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getEmployee();
    }, []);
    const getEmployee = async () => {
        try {
            const response = await apiClient.get(apiRoutes.getEmp);

            setEmpData(response.data);
            console.log(response.data)

        } catch (e) {
            console.log(e);
        }
    }

    const deleteEmployee = async (id) => {
        console.log(id)
        try {
            const response = await apiClient.delete(apiRoutes.deleteEmp(id));
            if (response) {
                toast.success("Delete Employee Successfully");
                getEmployee();
            }
        } catch (e) {
            console.log(e);
            toast.error("Error to Delete Employee");
        }
    }
    const editEmployee = (id)=>{
        navigate(`editEmp/${id}`);
    }
    return (
        <div>
            <h2 className='my-4'>List of Employees

            </h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sl NO</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {empData.map((data, index) => <tr>
                        <th scope="row">{index+1}</th>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>
                            <div className='d-flex gap-3'>
                                <button class="btn btn-info" onClick={() => {editEmployee(data.id)}}>
                                    Edit
                                </button>
                                <button className='btn btn-danger' onClick={() => { deleteEmployee(data.id) }}>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default ListEmployee
