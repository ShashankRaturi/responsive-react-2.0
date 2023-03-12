import './App.css'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Components/Pages/homePage/Home';
import Footer from './Components/Pages/Footer/Footer';
import Services from './Components/Pages/Services/Services';
import Products from './Components/Pages/Products/Products';
import SignUp from './Components/Pages/SignUp/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path ='/' exact element ={<Home/>}/>
          <Route path ='/services' exact element ={<Services/>}/>
          <Route path ='/products' exact element ={<Products/>}/>
          <Route path ='/sign-up' exact element ={<SignUp/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
