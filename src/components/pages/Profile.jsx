import Header from "../templates/Header/Header"
import {  ProfileBody, Mainimg } from "./ProfileStyle"
import poto from "../../components/pages/img/main.jpg"
import Footer from "../templates/Footer/Footer"

const Profile = () => {
        const Pinner = {
                margin: "0",
                fontFamily: 'Courier New'
        }
        const Pinner2 = {
                fontFamily: 'Courier New'
        }
        const bodyInner = {
                background: "#fff8dc"
        }
        return (


                < div style={bodyInner}>
                        <Header />
                        <ProfileBody>
                                <div >
                                        <h1 style={Pinner}>Profile</h1>

                                        <h2 style={Pinner2}>tinako <br />ちなこ</h2>
                                        <p>1998年生まれ。　大阪府在住。<br />
        2019年飲食店のフライヤーのイラストを担当し、<br />
          これを機に2020年から本格的にイラストレーターとして<br />活動をスタートしました。<br />
                主にペンや水彩またはPCなどで、食べ物や似顔絵を描いています。<br />
                （特にケーキやツヤのある食べ物、茶色い食べ物など描くのが得意です）<br />
                 美味しいが伝わるイラストまたは心が温まる、<br />癒されるイラストになるよう心掛けて制作しております。</p></div>
                                < Mainimg><img src={poto} alt={"main"}></img></Mainimg>

                        </ProfileBody>
                        < Footer />
                </ div>

        )
}

export default Profile;