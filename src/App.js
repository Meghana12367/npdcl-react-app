import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { ScrollToTop } from './components/common/ScrollToTop';

import { BrowserRouter} from 'react-router-dom';
import Header from './components/common/Header';
import { Footer } from './components/common/Footer';
import {AllRoutes} from './routes/AllRoutes';
import NotificationDrawer from './components/common/NotificationDrawer';



const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <AllRoutes />
      <NotificationDrawer />
      <Footer />
    </BrowserRouter>
  );
};

export default App;



