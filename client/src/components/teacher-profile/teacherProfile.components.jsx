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
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={togglePopup}>x</span>
            <h1>Confirm your Booking</h1>
            <h3>Book Session with {Name}</h3>
            <input type="text" 
              className="popup-input" 
              placeholder="Enter Meet Link"/>
            <h3>Enter your Email Address</h3>
            <input type="email" 
              className="popup-input" 
              placeholder="✉️ Get Invite link in your Email"/>
            <h3>Add Comments</h3>

            <textarea className="popup-input"  
            placeholder=" - Share your Session Agenda 
            - Share Tips
            - Share your Roll Number
            - Any Topice like to Discuss" cols="30" rows="10"></textarea>
            <div className="meet-btn">
              <button className="popup-call">Schedule Call</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default TeacherProfile;
