import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin' ;
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Makepayments from './components/Makepayments';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <header className="App-header">
      <h1 className='lobster-two-regular'>Welcome to sokogarden</h1>
      </header>

      <nav>
        <Link to ="/" className='btn btn-info'>getproducts</Link>
        <Link to ="/signup" className='btn btn-info'>signup</Link>
        <Link to ="/signin" className='btn btn-info'>signin</Link>
        <Link to ="/addproduct" className='btn btn-info'>addproduct</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Getproducts/>}/>
        <Route path='/signup' element={<Signup />} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/addproduct" element={<Addproduct/>}/>
        <Route path="/makepayment" element={<Makepayments/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
