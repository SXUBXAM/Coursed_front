import React from 'react';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Courses from './components/Courses/Courses';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import ForgetPassword from './components/Auth/ForgetPassword';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgetpassword" element={<ForgetPassword />}/>
        <Route path="/resetpassword/:token" element={<ResetPassword />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
