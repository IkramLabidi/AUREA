import {Routes,Route} from "react-router";
import { Container } from "./layout/Container";
import { HomePage } from "./pages/homepage";
import { Collections } from "./pages/Collections";
import { NewArrivals } from "./pages/NewArrivals";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { BuySection } from "./components/buysection";
import { ProfilePage } from "./components/profilepage/profilepage";
import { SummerCollection } from "./components/newarrivals/seasonalcollections/summer/summercollection";
import { AutumnCollection } from "./components/newarrivals/seasonalcollections/autumn/autumncolection";
import { WinterCollection } from "./components/newarrivals/seasonalcollections/winter/wintercollection";
import './App.css'

export function App() {

  return (
      <Routes>
        <Route element={<Container/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/collections/:sectionId" element={<Collections/>}/> 
          <Route path="/buysection" element={<BuySection/>}/>
          <Route path="/profilepage" element={<ProfilePage/>}/>
          <Route path="/newarrivals" element={<NewArrivals/>}/> 
          <Route path="/newarrivals/summer/summercollection" element={<SummerCollection/>}/>
          <Route path="/newarrivals/autumn/autumncollection" element={<AutumnCollection/>}/>
          <Route path="/newarrivals/winter/wintercollection" element={<WinterCollection/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/contact" element={<Contact/>}/>  
        </Route>
      </Routes>
  )
}