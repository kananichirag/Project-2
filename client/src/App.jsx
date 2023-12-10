import { Outlet } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dasboard from './pages/user/Dasboard'
import PagenotFound from "./pages/PagenotFound";
import PrivateRoute from "./components/privateroutes/PrivateRoute";
import AdminRoute from './components/privateroutes/AdminRoute'
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminNotFound from './pages/AdminNotFound'
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import UserProfile from "./pages/user/UserProfile";
import Orders from "./pages/user/Orders";



function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-not" element={<AdminNotFound />} />
        <Route path="*" element={<PagenotFound />} />
        <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dasboard/>} />
            <Route path="/user-profile" element={<UserProfile/>} />
            <Route path="/user-orders" element={<Orders/>} />
        </Route>
        <Route element={<AdminRoute/>}>
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          <Route path="/admin-createcategory" element={<CreateCategory/>} />
          <Route path="/admin-createproduct" element={<CreateProduct/>} />
          <Route path="/admin-users" element={<Users/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}



export default App;
