import {Routes,Route} from "react-router";
import { Container } from "./layout/Container";
import { HomePage } from "./pages/homepage";
import { Collections } from "./pages/Collections";
import { NewArrivals } from "./pages/NewArrivals";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { BuySection } from "./components/buysection";
import { ProfilePage } from "./components/profilepage/profilepage";
import './App.css'

function App() {

  return (
      <Routes>
        <Route element={<Container/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/collections/:sectionId" element={<Collections/>}/> 
          <Route path="/buysection" element={<BuySection/>}/>
          <Route path="/profilepage" element={<ProfilePage/>}/>
          <Route path="/newarrivals" element={<NewArrivals/>}/> 
          <Route path="/about" element={<About/>}/> 
          <Route path="/contact" element={<Contact/>}/>  
        </Route>
      </Routes>
  )
}

export default App;
