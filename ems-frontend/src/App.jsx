import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import View from './Components/View';
import Add from './Components/Add';
import Edit from './Components/Edit';
import PageNotFound from './Components/PageNotFound';
import Admin from './Components/Admin';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
        <Header />
        <ToastContainer/>
          <Routes>
            {/* localhost :3000 -Admin Page */}
              <Route path='/' element={<Admin/>} ></Route>
            {/* localhost :3000/add -Admin Page */}
              <Route path='/add' element={<Add/>} ></Route>
            {/* localhost :3000/view/1 -View Page */}
              <Route path='/view/:id' element={<View/>} ></Route>
            {/* localhost :3000/edit/1 -Edit Page */}
              <Route path='/edit/:id' element={<Edit/>} ></Route>
            {/* localhost :3000 ** -PageNotFound*/}
              <Route path='*' element={<PageNotFound/>} ></Route>
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
