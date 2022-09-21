import './App.css';
import './Components/Style.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import NavigationBar from './Components/NavBar';
import Details from './Components/Details'
import EditStudent from './Components/EditStudent';
import NewStudents from './Components/NewStudent';


function App() {
  return (
    <Details>
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path ='Home' element={<Home/>}/>
        <Route path ='Student' element={<Student/>}/>
        <Route path ='Contact' element={<Contact/>}/>
        <Route path ='/EditStudent/:id' element={<EditStudent/>}/>
        <Route path = "/NewStudents" element={<NewStudents/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    
    </Details>

  );
}

export default App;