import React from "react";
import Header from "../templates/Header/Header";
import Footer from "../templates/Footer/Footer";
import TextField from '@material-ui/core/TextField';
import { ContentWarp,TelWarp, MaliWarp, NameWarp, ContactBody} from "./ContactStyle";




const Contact = () => {



  return (
    <>
      <Header />
      <ContactBody>
        <NameWarp><TextField id="outlined-basic" label="name" variant="outlined" /></NameWarp>
        < MaliWarp><TextField id="outlined-basic" label="e-mail" variant="outlined" /></ MaliWarp>
        <TelWarp> <TextField id="outlined-basic" label="tel" variant="outlined" /></TelWarp>
        <ContentWarp><TextField
        id="outlined-multiline-static"
        label="Contents"
        multiline
        rows={4}
        defaultValue="お問い合わせ内容"
        variant="outlined"
      />
        </ContentWarp>
      </ContactBody>


  <Footer />
     
    

    </>
  )
};







export default Contact;