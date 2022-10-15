import Coins from "../components/Coins/Coins";
import Navigation from "../components/Navigation/Navigation";
import React from 'react';

const Layout = () => {
    return (
        <>
            <Navigation />
            <div className="flex justify-center w-screen h-full">
                <Coins />
            </div>
        </>
    );
}

export default Layout;