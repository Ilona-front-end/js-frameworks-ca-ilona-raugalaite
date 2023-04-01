import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../components/pages/Homepage';
import ContactUsPage from '../components/pages/ContactUsPage';
import PageDoesNotExist from '../components/pages/PageDoesNotExist';
import ItemPage from '../components/pages/ItemPage';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/item" element={<Homepage />} /> */}
        <Route path="/item/:id" element={< ItemPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="*" element={<PageDoesNotExist />} />
      </Routes>
    </>
  );
}
export default Router;
