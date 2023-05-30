import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useEffect, useRef, useState } from "react";

import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // window.onload= function (){
  //   const ClientName = document.getElementById("name")
  //   const ClientSubject = document.getElementById("Subject")
  //   const ClientEmail = document.getElementById("email")
  //   const CMessage = document.getElementById("message")
  //   let ebody = {
  //     name:ClientName.value,
  //     subject:ClientSubject.value,
  //     email:ClientEmail.value,
  //     message:CMessage.value
  //   }
  //   return ebody;
  // }

  

  
  const handleSubmit = (e) => {

    e.preventDefault();
    let ebody =
    ` 
    <h1>User Name: </h1> ${formRef.current.user_name.value}
    <br/>
    <h1>Subject: </h1> ${formRef.current.user_subject.value}
    <br/>
    <h1>Email: </h1>${formRef.current.user_email.value}
    <br/>
    <h1>Message: </h1> ${formRef.current.message.value}

    `
  console.log(ebody)
    window.Email.send({
      Host : "smtp.elasticemail.com",
      Username : "royroni780@gmail.com",
      Password : "E071E5A79ED2ABE416C0D552BE086AD46EB4",
      To : 'emam30546@gmail.com',
      From : 'emam30546@gmail.com',
      Subject : "This email from Emam Portfolio website",
      Body : ebody
  }).then(
    message => alert(message)
  );
  };

  return (
   
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Us</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +880 168 491 8928
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              emam30546@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Lakshmipur, Chittagong, Bangladesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"  />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
 
  );
};

export default Contact;
