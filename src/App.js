import {Layout, theme } from 'antd';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import PrivateRoutes from "./utils/PrivateRoutes";
import AppHeader from './components/AppHeader';

// auth pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import CreateItemForm from './pages/CreateItemForm';
import SearchResultPage from './pages/SearchResultPage';
import CheckoutPage from './pages/CheckoutPage';
import ItemDetailsPage from './pages/ItemDetailsPage';


// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51HCRZWCZxfqnCmeQvmixs1sxnkijpiYPKGd4eNcHnXlip1CTE9jSD5gH9TDnLLrGEzCkwLkaUY5iLt5RwhdHiyqe00W6CgB9kM');
const {  Content, Footer } = Layout;
// profile page

// items pages

// request pages

function App() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
    
    <Layout>
    <AppHeader username="yourUsername" notifications={3} />
      <Content style={{  padding: 24,
              margin: 0,
              minHeight: 280, }}>
        <div style={{ padding: 24, minHeight: 560, background: colorBgContainer }}>

        
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/items/:id" element={<ItemDetailsPage />} />
          <Route path="/items/create" element={<CreateItemForm />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
      </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
      </Layout>
      </>
  );
}

export default App;
