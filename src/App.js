import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import './App.css';
import HomePage from './Components/Pages/Home/HomePage';
import BookingPage from './Components/Pages/Booking/BookingPage';

function App() {
  return (
    <>
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        </Router>
    </Layout>

    </>
        );
}

        export default App;
