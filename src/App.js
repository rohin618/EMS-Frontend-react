import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateEmployee from './pages/createEmployee';
import ListEmployee from './pages/viewEmployee';
import Header from './components/header';
import CreateListEmp from './pages/createListEmployee';
import { Routers } from './Routers';
import EditEmployee from './pages/viewEmployee/EditEmployee';

function App() {
  return (
    <div className="App container">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path={Routers.createEmp} element={<CreateEmployee />} />
          <Route path={Routers.listEmp} element={<ListEmployee />} />
          <Route path={Routers.createListEmp} element={<CreateListEmp />} />
          <Route path={Routers.editEmp} element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
