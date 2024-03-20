import React, {Component} from 'react';
import{Link} from "react-router-dom";

class Tegi extends Component {
    render() {
        return (
            <div className="Tegi">
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <img className="imgBurgerLogo"   src="/imgs/Logo%206.svg" alt=""/>
                            <select className="select">
                                <option value="0">UZB</option>
                                <option value="Programmer">RUS</option>
                            </select>
                            <span className="liniya"></span>
                            <Link to="/"><li className="li11" >Bosh sahifa</li></Link>
                            <Link to="/Header1C" href="#"><li className="li22">Sabablar</li></Link>
                            <Link to="/Header2C" href="#"><li className="li22">O'quvchilarimiz</li></Link>
                            <Link to="/Header3C" href="#"><li className="li22">Biz haqimizda</li></Link>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Tegi;