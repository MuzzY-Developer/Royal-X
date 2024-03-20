import React, {Component} from 'react';

class Main3 extends Component {
    state={
        cardShow:false,
        cardShow2:true,
    };
    render() {
        const showCard= ()=>{
            this.setState({
                cardShow:!this.state.cardShow,
            });
        };
        const showCard2 =()=>{
            this.setState({
                cardShow:!this.state.cardShow,

            })
        }

        return (
            <>
                <div className="symbol2">
                    <img className="minch1" onClick={showCard}  src="/imgs/minichap.svg" alt=""/>
                    <img className="minch2" onClick={showCard2} src="/imgs/miniong.svg" alt=""/>
                </div>
                {this.state.cardShow2 ?(
                <div className="MainContainer3">
                    <div class="main__con">
                   <h3>Biz haqimizda o‘quvchilar fikri qanday</h3>
                    <h4>Royal X xozirga qadar 1000 dan ortiq oquvchilarni muomolariga yechim berib kelmoqda, Kursni muafaqiyatli tugatgan o’quvchilarimiz esa xalqaro unversitetlar, chet el unversitetlarida ta’lim olishmoqda agar siz ham shunday natijalarga erishmoqchi bo’lsangiz xozirqor Royal X ga  tashrif buyuring va o’zingiz bunga guvoh bo’lasiz</h4>
                    <div className="MinCon3">
                        <img className="imgQoshtirnoq2"  src="/imgs/qoshtirnoq2.svg" alt=""/>
                        <img className="dumaloqicon"  src="/imgs/tegi3icon_cr.png" alt=""/>
                        <h5>Ismoiljon Erkinov</h5>
                        <h6>INHA talabasi</h6>
                        <p>Men 1 yil oldin ingliz tilini umuman tushunmas edim va bundan siqilardim shunda ingliz tilini o’rganishga qaror qildim va  juda ham ko’p o’quv markazlarga bordimdeyarli foydasi bo’lmadi. Royal X da o’qiydigan bir do’stimning taklifi bilan Royal X ga bordim. 1-oyning o’zidanoq men o’zimda o’zgarishalar sezishni boshladim oradan 6 oy o’tmasdan IELTS imtohonidan 6 ball olib INHA unversitetiga o’qishga kirdim. Agar siz ham 1 yilda ingliz tilini tez va oson o’rganmoqchi bo’lsangiz Royal X o’quv markaziga boring.</p>
                    </div>
                    </div>
                </div>
                ):""}
                    {this.state.cardShow ?(
                <div className="MainContainer31C">
                    <div class="main__con">
                    <h3>Biz haqimizda o‘quvchilar fikri qanday</h3>
                    <h4>Royal X xozirga qadar 1000 dan ortiq oquvchilarni muomolariga yechim berib kelmoqda, Kursni muafaqiyatli tugatgan o’quvchilarimiz esa xalqaro unversitetlar, chet el unversitetlarida ta’lim olishmoqda agar siz ham shunday natijalarga erishmoqchi bo’lsangiz xozirqor Royal X ga  tashrif buyuring va o’zingiz bunga guvoh bo’lasiz</h4>
                    <div className="MinCon3">
                        <img className="imgQoshtirnoq2"  src="/imgs/qoshtirnoq2.svg" alt=""/>
                        <img className="dumaloqicon"  src="/imgs/tegi2icon_cr.png" alt=""/>
                        <h5>Nigina Qumarova</h5>
                        <h6>INHA talabasi</h6>
                        <p>Men 3 yil oldin computerni umuman tushunmas edim va bundan siqilardim shunda cumputerni o’rganishga qaror qildim va  juda ham ko’p o’quv markazlarga bordimdeyarli foydasi bo’lmadi. Royal X da o’qiydigan bir do’stimning taklifi bilan Royal X ga bordim. 1-oyning o’zidanoq men o’zimda o’zgarishalar sezishni boshladim oradan 6 oy o’tmasdan IELTS imtohonidan 24 ball olib INHA unversitetiga o’qishga kirdim. Agar siz ham 3 yilda computerni tez va oson o’rganmoqchi bo’lsangiz Royal X o’quv markaziga boring.</p>
                    </div>
                    </div>
                </div>
                    ):""}

            </>
        );
    }
}

export default Main3;