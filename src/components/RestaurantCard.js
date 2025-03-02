import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cuisine, star, time, imageId } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={CDN_URL + imageId}></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{star}" star"</h4>
      <h4>{time}</h4>
    </div>
  );
};

export default RestaurantCard;
