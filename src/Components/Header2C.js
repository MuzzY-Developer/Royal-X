import React, {Component} from 'react';

class Header2C extends Component {
    render() {
        return (
            <div>
                <div className="HeaderContainer2C">
                    <div className="HeaderCon2">
                        <h2>Bizning O'quvchilarimiz haqida...</h2>
                        <h3>&#9989; Bizning o'quvchilarimiz dasrda juda Faoldirlar!<br/>
                            &#9989; O'quvchilarning ballari juda yuqori!<br/>
                            &#9989; Juda bilimlari kuchli va samaralidirlar!</h3>
                        <button className="btn1"><span>Guruhlar bilan tanishish!</span></button>
                    </div>
                    <img className="Img2StudentHeader"   src="/imgs/2TeamStudentHeader2.png" alt=""/>

                </div>
            </div>
        );
    }
}

export default Header2C;