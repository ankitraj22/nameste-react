import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const resList2 = restaurantList.filter((data) => data.restaurant.star > 4);
            setRestaurantList(resList2);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((data) => (
          <RestaurantCard key={data.restaurant.id} resData={data.restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
