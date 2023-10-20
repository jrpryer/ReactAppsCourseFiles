import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TransactionsList from './components/TransactionsList';
import HeaderComponent from './components/common/HeaderComponent';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <HeaderComponent></HeaderComponent>
        <Routes>
            <Route path="/transactions" element={
                <TransactionsList></TransactionsList>
            }>
            </Route>
            <Route path="/add" element={
                <AddTransaction></AddTransaction>
            }>
            </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
