import { Container } from './layout/Container'
import {Routes,Route} from "react-router";
import './App.css'
import { HomePage } from './pages/homepage';
import { Collections } from './pages/Collections';
import { NewArrivals } from './pages/NewArrivals';
import { SummerCollection } from './components/newarrivals/seasons/summer/collection';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { ProfilePage } from './pages/profilepage';
import { BuySection } from './pages/buysection';
import { AutumnCollection } from './components/newarrivals/seasons/autumn/collection';
import { WinterCollection } from './components/newarrivals/seasons/winter/collection';

export default function App() {

  return (
     <Routes>
        <Route element={<Container/>} >
          <Route path='/' element={<HomePage/>} />
          <Route path='/collections/:sectionId?' element={<Collections/>} />
          <Route path='/newarrivals' element={<NewArrivals/>} />
          <Route path='/newarrivals/summercollection' element={<SummerCollection/>}/>
          <Route path='/newarrivals/autumn/autumncollection' element={<AutumnCollection/>}/>
          <Route path='/newarrivals/winter/wintercollection' element={<WinterCollection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/profilepage' element={<ProfilePage/>}/>
          <Route path='/buysection' element={<BuySection/>}/>
        </Route>
     </Routes>
  )
}