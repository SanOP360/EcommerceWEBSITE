import React from "react";
import './Home.css';
import PlayIcon from '../assets/PlayIcon.png';
const Home = () => {
  const ToursList = [
    {
      id: 1,
      Date: "Jan 16",
      City: "Delhi",
      location: "Indira Gandhi Stadium",
      StageName: "Concert 1",
    },
    {
      id: 2,
      Date: "Feb 22",
      City: "Mumbai",
      location: "Mumbai Arena",
      StageName: "Concert 2",
    },
    {
      id: 3,
      Date: "Mar 10",
      City: "Bangalore",
      location: "Bangalore Convention Center",
      StageName: "Concert 3",
    },
    {
      id: 4,
      Date: "Apr 5",
      City: "Chennai",
      location: "Chennai Stadium",
      StageName: "Concert 4",
    },
  ];

  return (
    <>
      <div className="header">
        <h1 className="Brandheading">The Generics</h1>
        <button className="ctaButton">Get our Latest Albums</button>
        <button className="ctaButton1"><img className="playBtn" src={PlayIcon} alt="Play Button" /></button>
      </div>

      <div className="tours">
      <h1>Tours</h1>
        <ul className="tourList">
          {ToursList.map((item) => (
            <li key={item.id} className="tourItem">
              <span className="tourDate">{item.Date}</span>
              <span className="tourLocation">{item.location}</span>
              <span className="tourStageName">{item.StageName}</span>
              <span className="tourButton">
                <button className="buyTicketsButton">Buy Tickets</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
