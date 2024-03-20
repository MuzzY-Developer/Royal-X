import React, {Component} from 'react';

class Main2 extends Component {
    state={
        cardShow:false,
        cardShow2:true
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
                    {this.state.cardShow2 ?(
                    <div className="MainContainer2">
                         <div class="main__con">
                        <img className="imgQoshtirnoq" src="/imgs/qoshtirnoq.svg"/>
                        <img className="imgDurdona" src="/imgs/Durdona.svg" alt=""/>
                        <h4>Miss Durdona rus tili fani boyicha oqtuvchi kop yilik tajribaga ega 10 dan ortiq davlatlarda
                            bolgan, rus tilini mukamal biladi 10 yildan oshiq tajriba va 1000 dan ziyod oquvchilarni
                            oqitgan. Miss Durdona rus tili fani boyicha oqtuvchi kop yilik tajribaga ega 10 dan ortiq
                            davlatlarda bolgan, rus tilini mukamal biladi 10 yildan oshiq tajriba va 1000 dan ziyod
                            oquvchilarni oqitgan. Miss Durdona rus tili fani boyicha oqtuvchi kop yilik tajribaga ega 10
                            dan ortiq davlatlarda bolgan, rus tilini mukamal biladi 10 yildan oshiq tajriba va 1000 dan
                            ziyod oquvchilarni oqitgan. Miss Durdona rus tili fani boyicha oqtuvchi kop yilik tajribaga
                            ega 10 dan ortiq davlatlarda bolgan, rus tilini mukamal biladi.</h4>
                        <p className="p1">Durdona Qurbonova</p>
                        <p className="p2">Rus tili o'qituvchisi</p>
                        </div>
                    </div>
                    
                    
                    ):""}
                    {this.state.cardShow ?(
                    <div className="MainContainer21C">
                         <div class="main__con">
                        <img className="imgQoshtirnoq" src="/imgs/qoshtirnoq.svg"/>
                        <img className="imgNigina"  src="/imgs/Nigina.png" alt=""/>
                        <h4>Miss Nigina computer fani bo'yicha
                            o'qtuvchi kop yilik tajribaga ega 10 dan ortiq davlatlarda bolgan, computerni mukamal biladi 10 yildan oshiq tajriba va 1000 dan ziyod oquvchilarni oqitgan. Miss Nigina computer fani boyicha oqtuvchi kop yilik tajribaga ega 10 dan ortiq davlatlarda bolgan, computer mukamal biladi 10 yildan oshiq tajriba va 1000 dan ziyod oquvchilarni oqitgan. Miss Nigina computer fani boyicha oqtuvchi kop yilik tajribaga ega 10 dan ortiq davlatlarda bolgan, computerni mukamal biladi 10 yildan oshiq tajriba va 1000 dan ziyod oquvchilarni oqitgan. Miss Nigina computer fani boyicha oqtuvchi kop yilik tajribaga ega 10 dan ortiq davlatlarda bolgan, computer mukamal biladi.</h4>
                        <p className="p1">Nigina Qumarova</p>
                        <p className="p2">Computer mutahasisi</p>
                        </div>
                    </div>
                    ):""}


                    <div className="symbolcon">
                        <img className="chap"  onClick={showCard} src="/imgs/chap.svg" alt=""/>
                        <img className="ong"   onClick={showCard2} src="/imgs/ong.svg" alt=""/>
                    </div>
                </>
            );
        }
}

export default Main2;