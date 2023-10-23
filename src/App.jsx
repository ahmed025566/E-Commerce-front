import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/Navbar';
import HomeDefault from './components/HomeDefault';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
  return (
    <>
      <NavBar />
      <Routes>
        {/* {To do .. switch stament that based on it the route will be selected to be the home route} */}
        <Route path="/" element={<HomeDefault />} />
      </Routes>
    </>
  );
}

export default App;
