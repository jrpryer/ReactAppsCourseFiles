import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/employee/EmployeeList';
import HeaderComponent from './components/common/HeaderComponent';
import Login from './components/Login';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/common/FooterComponent';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/common/Logout';
export const countContext = createContext();
export const loginContext = createContext();

function App() {
  const [count, setCount] = useState(1);
  const [loginStatus, setLoginStatus] = useState(false);
  function findCount(currentCount) {
    setCount(currentCount);
  }

function notifyUserLoggedIn(status) {
  setLoginStatus(status)
}

  return (
    <div className="App">
      <countContext.Provider value={count}>
      <loginContext.Provider value={loginStatus}>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            <Route path='/login' element={
            <Login notifyUserLoggedIn={notifyUserLoggedIn}/>}>
            </Route>
            <Route path='/logout' element={
              <Logout notifyUserLoggedIn={notifyUserLoggedIn}/>}>
              </Route>
            <Route path='/employees' element={
              <ProtectedRoute>
                <EmployeeList calculateCount={findCount}/>
              </ProtectedRoute>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
          </Routes>
        <FooterComponent/>
        </BrowserRouter>
      </loginContext.Provider>
      </countContext.Provider>
    </div>
  );
}

export default App;
