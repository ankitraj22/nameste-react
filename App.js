import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {resData} = props;
  const { resName, cuisine, star, time, imageId } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3LmBxzKHgVaO1dkxz1LKVG49z8kIHGz0BA&s" +
          { imageId }
        }
      ></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{star}</h4>
      <h4>{time}</h4>
    </div>
  );
};

const resList = [
  {
    restaurant: {
      id: "1",
      resName: "Pista House",
      cuisine: "Biryani, Irani chai",
      star: "4.5 star",
      time: "30 minutes",
      imageId: "",
    }
  },
  {
    restaurant: {
      id: "2",
      resName: "KFC",
      cuisine: "Burger",
      star: "3.8 star",
      time: "28 minutes",
      imageId: "",
    }
  }
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((data) => (
          <RestaurantCard key={data.restaurant.id} resData={data.restaurant} />
        ))}
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
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
