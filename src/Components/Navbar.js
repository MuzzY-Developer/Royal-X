import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <>
                <div className="navbarR">
                <Link to="/"><img className="Logo" src="/imgs/Слой%201.svg" alt=""/></Link>
                  
                    <img  className="footerimgApple"    src="/imgs/Default.svg" alt=""/>
                    <ul>
                        <li><Link  to="/Header1C">Sababi</Link></li>
                        <li><Link  to="/Header2C">O'quvchilarimiz</Link></li>
                        <li><Link  to="/Header3C">Biz Haqimizda</Link></li>
                        <select className="select">
                            <option value="0">UZB</option>
                            <option value="Programmer">RUS</option>
                        </select>
                        <li><Link  to="/Header4C">Contact</Link></li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Navbar;