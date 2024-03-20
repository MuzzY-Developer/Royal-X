import React, {Component} from 'react';

class Main extends Component {
    render() {
        return (
            <>

                <div className="MainContainer1">
                    <div className="MainCon1">
                        <h2>Royal X sizga qanday yordam beradi ?</h2>
                        <h3>IELTS imtihonidan 8 balldan yuqori olmoqchi bo’lsangiz unda siz IELTS ko’rsatkcchi 8 dan yuqori bo’lgan tajribali o’qituvchilardan ta’lim oling biz sizga shunday imkoniyatni beramiz.</h3>
                    </div>
                    <div className="MainCon2">
                        <a href=""><button  className="btn2">
                            <img src="/imgs/11.svg" alt=""/>
                            <span>Chet eldagi unversitetlarga kirmoqchi bo’lsangiz</span>
                        </button><a/>
                            <a href=""><button  className="btn3">
                                <img src="/imgs/22.svg" alt=""/>
                                <span>IELTS imtihonidan 6.5 yuqori ball olmoqchi bo’lsangiz</span>
                            </button></a>
                            <a href=""><button  className="btn4">
                                <img src="/imgs/33.svg" alt=""/>
                                <span>IELTS ballingizni 8 - 8.5 gacha ko’tarib olmoqchi bo’lsangiz</span>
                            </button></a>
                            <a href=""><button  className="btn5">
                                <img src="/imgs/44.svg" alt=""/>
                                <span>Westminster, MDIST, INHA 1-yildan kirmoqchi bo’lsangiz</span>
                            </button></a>
                        </a>


                    </div>
                    <a  className="aimgsms" href=""><img className="imgsms" src="/imgs/sms.svg" alt=""/></a>
                </div>
            </>
        );
    }
}

export default Main;