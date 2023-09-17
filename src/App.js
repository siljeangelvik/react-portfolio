import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
// import logo from './logo.svg';


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
    </Routes>
    </>
  );
}

export default App;
