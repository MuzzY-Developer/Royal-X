import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <>
                <div className="FooterContainer">
                  
                    <img className="FooterImgTel"  src="/imgs/TelikfotoWeb.svg" alt=""/>
                     <div className="TelKarobka">
                         <a href="tel:+998990000441"><h3>Istalgan vaqtda telefon qiling:</h3>
                         <h4>+998 99 000 04 41</h4></a>
                     </div>
                 
                    <p>RoyalX o’quv markazi bir vaqtda ko‘plab o’quvchialar bilan ishlaydigan tajribali katta jamoadir. O’quvchilarimiz qatorida sizni ham ko’rishdan mamnunmiz.</p>
                    <button className="btn1"><span>Online yozing</span></button>
                </div>
                <div className="FooterContainer2">
                    <div class="footer__con">
                   <div className="MinFooter1">
                       <img src="/imgs/Logo%206.svg" alt=""/>
                       <p>RoyalX o’quv markazi bir vaqtda ko‘plab o’quvchialar bilan ishlaydigan tajribali katta jamoadir. O’quvchilarimiz qatorida sizni ham ko’rishdan mamnunmiz.</p>
                   </div>
                   <div className="MinFooter2">
                       <ul>
                           <li className="li1"><a href="#">Xizmatlar</a></li>
                           <li className="li2"><a href="#">Bosh sahifa</a></li>
                           <li className="li3"><a href="#">Sabablar</a></li>
                           <li className="li3"><a href="#">O'quvchilarimiz</a></li>
                           <li className="li3"><a href="#">Boshqalar</a></li>
                       </ul>
                    </div>
                   <div className="MinFooter3">
                        <ul>
                            <li className="li1"><a href="#">Tarmoqlar</a></li>
                            <li className="li2"><a href="#">Telegram</a></li>
                            <li className="li3"><a href="#">Instagram</a></li>
                            <li className="li3"><a href="#">TikTok</a></li>
                            <li className="li3"><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                   <div className="MinFooter4">
                        <ul>
                            <li className="li1"><a href="#">Kontakt</a></li>
                            <li className="li2"><img src="/imgs/email-icontelegramSMS.svg" alt=""/><a href="#">Khamidulla@mail.ru</a></li>
                            <li className="li3"><img src="/imgs/phone-iconphonefooter.svg" alt=""/><a href="#">+998(99) 000 04 41</a></li>
                            <li className="li4"><img src="/imgs/location-iconKartaIcon.svg" alt=""/><a className="li4a" href="#">Tashkent,Chilonzor
                            <br/><span> metro Integro 8-qavat</span></a></li>
                        </ul>
                    </div>
                   <div className="MinFooter5">
                       <a className="ftImG" href=""><img src="/imgs/TELEG.svg" alt=""/></a>
                       <a className="ftImG" href=""><img src="/imgs/InstaG.svg" alt=""/></a>
                       <a className="ftImG" href=""><img src="/imgs/YouTube.svg" alt=""/></a>
                       <a className="ftImG" href=""><img src="/imgs/TikTok.svg" alt=""/></a>
                       <a className="ftImG" href=""><img src="/imgs/FaceBook.svg" alt=""/></a>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;