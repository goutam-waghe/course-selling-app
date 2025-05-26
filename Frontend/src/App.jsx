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
import DashBoard from './pages/Admin/DashBoard.jsx'
import AdminCourses from './pages/Admin/AdminCourses.jsx'
import CreateCourses from './pages/Admin/CreateCourses.jsx'
import Users from './pages/Admin/Users.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {toast , Toaster} from "react-hot-toast"
import { useEffect } from 'react'
import { LoadUser } from './redux/actions/userActions.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

import Loader from './components/Loader.jsx'

const App = () => {
  const {isAuthenticated , user , error  , message  , loading} = useSelector(state => state.user)
 const dispatch = useDispatch()
  useEffect(()=> {
    if(error){
      toast.error(error);
      dispatch({type:"clearError"})
    }
    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"})
    }
  } ,[dispatch , error , message])

  useEffect(() => {
    dispatch(LoadUser())
  }   ,[dispatch])
  return (
    <BrowserRouter>
    {
      loading ? <Loader/> :
      (<><Header isAuthenticated={isAuthenticated} user={user}/>
    <Routes >
      
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={ <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><Login/></ProtectedRoute> }/>
      <Route path='/Signup' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><Signup/></ProtectedRoute>}/>
      <Route path='/forgetpassword' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><ForgetPassword/></ProtectedRoute>}/>
      <Route path='/resetpassword/:token' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><ResetPassword/></ProtectedRoute>}/>
      <Route path='/profile' element={
        <ProtectedRoute isAuthenticated={isAuthenticated}><Profile user={user}/></ProtectedRoute>
      }/>
      <Route path='/updateprofile' element={<UpdateProfile user={user}/>}/>
      <Route path='/changepassword' element={ <ProtectedRoute isAuthenticated={isAuthenticated}><ChangePassword/></ProtectedRoute>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/course/:id' element={<CourseDetails/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/requestcourse' element={<RequestCourse/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
      <Route path='/paymentSuccess' element={<PaymentSuccess/>}/>
      <Route path='/PaymentFail' element={<PaymentFailed/>}/>
      <Route path='*' element={<PageNotFound/>}/>


      {/* addmin routes  */}
      <Route path='/admin/dashboard' element={<ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={user && user.role === 'admin'} adminRoute={true}><DashBoard/></ProtectedRoute> } />
      <Route path='/admin/courses' element={<AdminCourses/>} />
      <Route path='/admin/createcourse' element={<CreateCourses/>} />
      <Route path='/admin/users' element={<Users/>} />
    </Routes>
    <Footer/>
    <Toaster/></>)
    }
    </BrowserRouter>
  )
}

export default App
