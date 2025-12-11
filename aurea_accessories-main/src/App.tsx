import { Container } from './layout/Container'
import {Routes,Route} from "react-router";
import './App.css'
import { HomePage } from './pages/homepage';
import { Collections } from './pages/Collections';
import { NewArrivals } from './pages/NewArrivals';

export default function App() {

  return (
     <Routes>
        <Route element={<Container/>} >
          <Route path='/' element={<HomePage/>} />
          <Route path='/collections/:sectionId?' element={<Collections/>} />
          <Route path='/newarrivals' element={<NewArrivals/>} />
        </Route>
     </Routes>
  )
}