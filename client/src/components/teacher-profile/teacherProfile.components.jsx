import "./teacherProfile.styles.css";
import Rating from "../rating/rating.components";
import { openPopupWidget } from "react-calendly";
// import { Popup } from '../Popup/popup.components';
import { useState } from 'react'
const popupOption = {
  pageSettings: {
    backgroundColor: "ffffff",
    hideEventTypeDetails: false,
    hideGdprBanner: true,
    hideLandingPageDetails: false,
    primaryColor: "00a2ff",
    textColor: "4d5055",
  },
  prefill: {
    customAnswers: {
      a1: "a1",
      a10: "a10",
      a2: "a2",
      a3: "a3",
      a4: "a4",
      a5: "a5",
      a6: "a6",
      a7: "a7",
      a8: "a8",
      a9: "a9",
    },
    date: new Date("2022-03-01T16:57:29.129Z"),
    email: "test@test.com",
    firstName: "Jon",
    guests: ["janedoe@example.com", "johndoe@example.com"],
    lastName: "Snow",
    name: "Jon Snow",
  },
  text: "Schedule Call",
  url: "https://calendly.com/acmesales",
  utm: {
    utmCampaign: "Spring Sale 2019",
    utmContent: "Shoe and Shirts",
    utmMedium: "Ad",
    utmSource: "Facebook",
    utmTerm: "Spring",
  },
};

const TeacherProfile = ({ Name, source }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('')
  const [link, setLink] = useState('')

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="teacher-profile">
      <div className="pro-bg-color"></div>
      <div className="profile-container">
        <div className="teacher-container">
          <img src={source} alt="" />
          <h2>{Name}</h2>
        </div>
        <div className="teacher-desc">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <Rating />
        <div className="input-div">
          <textarea type="text" placeholder="Enter your review" />
          <div className="button">
            <button>POST</button>
          </div>
        </div>
        <div className="meet-btn">
          <button
            className="call"
            onClick={() => openPopupWidget({ ...popupOption })}
          >
            Schedule Call
          </button>
          <button className="session" onClick={togglePopup}>Schedule Session</button>
        </div>
      </div>

      {isOpen &&
      <form action="https://formsubmit.co/siddhantprateek@gmail.com" method="POST" target="_blank" >
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={togglePopup}>x</span>
            <h1 className="cnf-h1">Confirm your Booking</h1>
            <h3>Book Session with <span className="popup-name">{Name}</span></h3>
            <input type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)} 
              className="popup-input form-control" 
              placeholder="Enter Meet Link"
              name="Meet Link"
              required/>
            <h3>Enter your Email Address</h3>
            <input type="email"
              value={email}
              name="Email"
              onChange={(e) => setEmail(e.target.value)} 
              className="popup-input form-control" 
              placeholder="✉️ Get Invite link in your Email"
              required/>
            <h3>Add Comments</h3>
            <textarea className="popup-input form-control"
            name="Agenda"  
            placeholder=" - Share your Session Agenda 
            - Share Tips
            - Share your Roll Number
            - Any Topice like to Discuss" cols="30" rows="10"></textarea>
            <div className="meet-btn">
              <button type="submit" className="popup-call" disabled={!email || !link} onClick={() => {console.log('scheduled')}}>Schedule Call</button>
            </div>
          </div>
        </div>
      </form>
      }
    </div>
  );
};

export default TeacherProfile;
