import React from 'react'
import { createBrowserHistory } from 'history'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { Home } from './pages/HomePage/Home';
import { Detail } from './pages/Detail/Detail';
import { CheckoutTemplate } from './templates/CheckoutTemplate/CheckoutTemplate';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import TabCheckOut from './pages/Checkout/Checkout';
import ProfileTab from './pages/Profile/Profile';

export const history = createBrowserHistory();
const App = () => {
  return (
    <BrowserRouter history={history}>

      <Routes>
        <Route path="/" element={<HomeTemplate><Home /></HomeTemplate>} />
        <Route path="/phim/:id" element={<HomeTemplate><Detail /></HomeTemplate>} />
        <Route path="/checkout/:id" element={<CheckoutTemplate><TabCheckOut /></CheckoutTemplate>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfileTab />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
    // <VirtualizedExample />
  )
}

export default App


