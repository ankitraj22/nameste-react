import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [displayRestaurantList, setDisplayRestaurantList] = useState([]);
  const [image, setImage] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
    );
    console.log(data);
    console.log(data?.url);
    setRestaurantList(resList);
    setDisplayRestaurantList(resList);
  };

  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const resList3 = restaurantList.filter((res) =>
                res.restaurant.resName
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setDisplayRestaurantList(resList3);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const resList2 = displayRestaurantList.filter(
              (data) => data.restaurant.star > 4
            );
            setDisplayRestaurantList(resList2);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {displayRestaurantList.map((data) => (
          <RestaurantCard key={data.restaurant.id} resData={data.restaurant} />
        ))}
      </div>
      <div>
        <img className="imageDiv" src={image}></img>
      </div>
    </div>
  );
};

export default Body;
