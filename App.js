import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/474x/05/64/db/0564db618b8e778534e882cfda48dd2f.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = ({ resName, speciality, rating, duration }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={"https://meghanafoods.co.in/assets/img/banner/banner-5.jpg"}
      />
      <h3>{resName}</h3>
      <div>{speciality}</div>
      <div>{rating}</div>
      <div>{duration}</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        <RestaurentCard
          resName="Meghna's Food"
          speciality="Mughlai"
          rating="2.9"
          duration="20 mins"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root.render(<AppLayout />);
