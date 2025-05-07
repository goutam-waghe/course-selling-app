import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Courses from './pages/Courses.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Footer from './components/Footer.jsx'
import RequestCourse from './pages/RequestCourse.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Subscribe from './pages/Subscribe.jsx'
import PaymentSuccess from './pages/PaymentSuccess.jsx'
import PaymentFailed from './pages/PaymentFailed.jsx'
import CourseDetails from './pages/CourseDetails.jsx'
import Profile from './pages/UserProfile.jsx'
import UpdateProfile from './pages/UpdateProfile.jsx'
import ChangePassword from './pages/ChangePassword.jsx'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes >
      
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/updateprofile' element={<UpdateProfile/>}/>
      <Route path='/changepassword' element={<ChangePassword/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/course/:id' element={<CourseDetails/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/requestcourse' element={<RequestCourse/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
      <Route path='/paymentSuccess' element={<PaymentSuccess/>}/>
      <Route path='/PaymentFail' element={<PaymentFailed/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
