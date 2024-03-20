import React, {Component} from 'react';

class Header1 extends Component {
    render() {
        return (
            <>
                <div className="HeaderContainer1">
                    <div className="HeaderCon1">
                        <h2>Royal X - Nima Qiladi</h2>
                        <h3>IELTS imtihonidan 8 balldan yuqori olmoqchi bo’lsangiz unda siz ko’rsatkchi 8 dan yuqori bo’lgan tajribali o’qituvchilardan ta’lim oling biz sizga shunday imkoniyatni beramiz. Qolgan malumotlarni video orqali koringiz mumkin.</h3>
                        <button className="btn1"><span>Xoziroq bog'lanish</span></button>
                    </div>
                    <video className="movie1"  src="/Movie/Презентация%20дома.mp4" controls></video>
                </div>
            </>
        );
    }
}

export default Header1;