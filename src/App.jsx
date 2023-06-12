import './App.css'

//router imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import hooks
import { useAuthContext } from './hooks/useAuthContext'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import HomePage from './components/protectedComponents/homePage';
import SignLogin from './components/nonProtectedComponents/signorlog';
import Signup from './components/signup';
import Signin from './components/signin';
import NavBar from './components/protectedComponents/navbar.jsx/navbar';
import GetAllCourses from './components/protectedComponents/courses/getAllCourses';
import AddCourse from './components/protectedComponents/courses/addCourse';
import GetMyCourses from './components/protectedComponents/courses/getMyCourses';
import EditCourse from './components/protectedComponents/courses/editMyCourse';
import AdminSignin from './components/adminSignIn';
import AdminAllCourses from './components/protectedComponents/admin/adminAllCourses';
import AdminAllStudents from './components/protectedComponents/admin/adminAllStudents';
import AdminAllStudentTakers from './components/protectedComponents/admin/adminAllStudentTakers';
function App() {
  const { student } = useAuthContext();
  const { admin } = useAuthContext();
  if(admin){
    return(
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/allCourses' element={<AdminAllCourses/>} />
          <Route path='/allStudents' element={<AdminAllStudents />} />
          <Route path='/listTakers/:courseCode' element={<AdminAllStudentTakers />} />
        </Routes>
      </BrowserRouter>
    )
  }

  if(student){
    return(
      <BrowserRouter>
      <NavBar/>
      <div className='elements'>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/allCourses' element={<GetAllCourses/>} />
        <Route path='/addCourse' element={<AddCourse/>} />
        <Route path='/mycourses' element={<GetMyCourses/>} />
        <Route path='/editCourse/:courseCode' element={<EditCourse/>} />
      </Routes>
      </div>
    </BrowserRouter>
    )
  }

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignLogin/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/signin' element={<Signin/>} />
            <Route path='/adminsignin' element={<AdminSignin/>} />
          </Routes>
        </BrowserRouter>
    </div>

  )
}

export default App
