import './App.css';
import{ Route,Routes, BrowserRouter}from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/verification/login/login'
import Register from './components/verification/register/register';
import CustomerProfile from './components/customerProfile/CustomerProfile';
import ForgotPassword from './components/verification/ForgotPassord/ForgotPassword';
import CreateParcel from './components/AddressBook/CreateParcel';
import UpdatedAddress from './components/AddressBook/UpdatedAddress';


function App() {
  return (<BrowserRouter>
    <div className="App">
     
      <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/Register" element={<Register/>}/> 
      <Route path="/customerProfile" element={<CustomerProfile/>}/>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
      <Route path="/createparcel" element={<CreateParcel/>}/>
      <Route path="/UpdatedAddress" element={<UpdatedAddress/>}/>
      </Routes>
     

    </div> 
    </BrowserRouter>
  );
}

export default App;
