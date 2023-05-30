import "./about.css";
import Award from "../../img/award.png";
import DigitalImg from '../../img/Digital.jpg'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={DigitalImg}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         
        </p>
        <p className="a-desc">
        Hi, I am Emam Hossain a professional Digital Marketer from Bangladesh. I have been working as a Digital Marketer for the last few years. Completed successfully many projects on Marketplace. My services are Social Media Marketing, Facebook & Instagram Ads, and Content Writing. If you are looking for an expert person then you are in the right place.
        </p>
      {
      //   <div className="a-award">
      //   <img src={Award} alt="" className="a-award-img" />
      //   <div className="a-award-texts">
      //     <h4 className="a-award-title">International Design Awards 2021</h4>
      //     <p className="a-award-desc">
      //       Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
      //       and fugit.
      //     </p>
      //   </div>
      // </div>
    }
      </div>
    </div>
  );
};

export default About;
