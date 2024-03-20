import React, {Component} from 'react';

class Header1C extends Component {
    render() {
        return (
            <div>
                <div className="HeaderContainer1C">
                    <div className="HeaderCon1">
                        <h2>Sabablari-</h2>
                        <h3>IELTS imtihonidan o'tolmasligingiz sababi bilmohchimisiz?<br/>
                        Yoki ilim olishning pastlik darajasi sababini bilmohchimisiz?<br/>
                        Yoki Reytingda pas pog'onada turishingiz sababini bilmohchimisiz?</h3>
                        <button className="btn1"><span>Xozirda sabablarni bartaraf etish!</span></button>
                    </div>
                    <img className="Img1WomanHeader"   src="/imgs/1WomanHeader.png" alt=""/>
                    <img className="Img1WomanHeader2"   src="/imgs/1WomanHeader200px.png" alt=""/>
                </div>
            </div>
        );
    }
}

export default Header1C;