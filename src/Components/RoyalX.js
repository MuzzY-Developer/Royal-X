import React, {Component} from 'react';
import Navbar from "./Navbar";
import Header1 from "./Header1";
import Main1 from "./Main1";
import Main2 from "./Main2"
import {Route, Routes} from "react-router-dom";
import Header1C from "./Header1C";
import Header2C from "./Header2C";
import Header3C from "./Header3C";
import Header4C from "./Header4C";
import Main3 from "./Main3";
import Footer from "./Footer";
import Tegi from "./Tegi";

class RoyalX extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Tegi/>
                <Routes>
                    <Route  path="/" element={<Header1/>}/>
                    <Route  path="/Header1C" element={<Header1C/>}/>
                    <Route  path="/Header2C" element={<Header2C/>}/>
                    <Route  path="/Header3C" element={<Header3C/>}/>
                    <Route  path="/Header4C" element={<Header4C/>}/>
                    <Route  path="/" element={<Main2/>}/>
                </Routes>
                <Main1/>
                <Main2/>
                <Main3/>
                <Footer/>

            </div>
        );
    }
}

export default RoyalX;