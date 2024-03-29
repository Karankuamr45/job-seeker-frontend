import React, { useContext, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';
import Jobs from './components/Job/Jobs';
import JobDetails from './components/Job/JobDetails';
import Application from './components/Application/Application';
import MyApplications from './components/Application/MyApplications';
import PostJobs from './components/Job/PostJob';
import MyJobs from './components/Job/MyJobs';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import { Toaster } from 'react-hot-toast';
import {Context} from './main'
import axios from 'axios';


const App = () => {

  const {isAuthorized,setIsAuthorized,setUser} = useContext(Context);

  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        const response=await axios.get("https://job-seeker-l2sv.onrender.com/api/user/getUser",{withCredentials:true});
        setUser(response.data.user);
        setIsAuthorized(true)
      } catch (error) {
        setIsAuthorized(false);
      }
    }
    fetchUser()

  },[isAuthorized]);




  return <>
  <Router>
    <NavBar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/job/getall' element={<Jobs/>}/>
      <Route path='/job/:id' element={<JobDetails/>}/>
      <Route path='/job/post' element={<PostJobs/>}/>
      <Route path='/job/me' element={<MyJobs/>}/>
      <Route path='/application/:id' element={<Application/>}/>
      <Route path='/application/me' element={<MyApplications/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <Toaster/>
  </Router>
  </>
}

export default App
