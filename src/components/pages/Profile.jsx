import Header from "../templates/Header/Header"
import { ProfileTitle, ProfileBody, Mainimg } from "./ProfileStyle"
import poto from "../../components/pages/img/main.jpg"
import Footer from "../templates/Footer/Footer"

const Profile = () => {
        return (
                <>
                                <Header />
                        <ProfileBody>
                                <div> <ProfileTitle>Profile</ProfileTitle>
                               
                                <h2>tinako <br />ちなこ</h2>
                                <p>1998年生まれ。　大阪府在住。<br />
        〇2019年飲食店のフライヤーのイラストを担当し、<br />
          これを機に2020年から本格的にイラストレーターとして活動をスタートしました。<br />
                〇主にペンや水彩またはPCなどで、食べ物や似顔絵を描いています。<br />
                （特にケーキやツヤのある食べ物、茶色い食べ物など描くのが得意です）<br />
                 美味しいが伝わるイラストまたは心が温まる、癒されるイラストになるよう心掛けて制作しております。</p></div>
                                < Mainimg><img src={poto} alt={"main"}></img></Mainimg>
                       
                        </ProfileBody>
                       < Footer />
                </>

        )
}

export default Profile;