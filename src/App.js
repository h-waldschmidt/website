import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import TED from './pages/TED';

function App() {
    const [isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (


        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/ted' element={<TED />} />
            </Routes>
        </Router>


    );
}

export default App;
