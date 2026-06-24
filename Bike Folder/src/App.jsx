import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddBike from "./pages/AddBike";
import BookService from "./pages/BookService";
import ViewBookings from "./pages/ViewBookings";
import AdminDashboard from "./pages/AdminDashboard";
import ViewCustomers from "./pages/ViewCustomers";
import ViewBikes from "./pages/ViewBikes";
import UpdateStatus from "./pages/UpdateStatus";
import CustomerDashboard from "./pages/CustomerDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-bike" element={<AddBike />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/bookings" element={<ViewBookings />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/customers" element={<ViewCustomers />} />
        <Route path="/bikes" element={<ViewBikes />} />
        
        <Route path="/status" element={<UpdateStatus />} />
        <Route path="/customer" element={<CustomerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;