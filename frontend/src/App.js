import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import { Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import HomePage from './components/Home';
function App() {
  return (
    <div className="App">
         <Routes>
            <Route index path='/' element={<LoginForm/>}/>
            <Route path='/signupform' element={<SignupForm/>}/>
            <Route path='/home' element={<HomePage/>}/>
         </Routes>
    </div>
  );
}

export default App;
