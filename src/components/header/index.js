import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
                <a class="navbar-brand" href="#">EMS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to={"/"}>CreateEmployee</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/list"}>ViewAll Employee</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/createListEmp"}>Create List of Employees</Link>
                        </li>
                   
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
