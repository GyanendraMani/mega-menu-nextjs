import React from 'react';
import NavBar from './Navbar';
import navbar from '../data/nav.json'

const Layout = ({ children }) => (
    <>
        <NavBar navbar={navbar} />
        {children}
    </>
);

export default Layout;