import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from '../../components/navbar/Navbar';

export default function Default() {
  return (
    <>
      <Navbar />
      <div className='mx-auto my-0'>
      <Outlet />
      </div>
    </>
  );
}
