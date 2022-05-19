import bar from "../../images/bar.png";
import food from "../../images/food.png";
import hospital from "../../images/hospital.png";
import store from "../../images/store.png";
import weapons from "../../images/weapons.png";


function SplashPage() {
  return (
    <>
      <div className="info">
        <h1>Welcome to Star Yelp</h1>
        <h2>Your guide to the best businesses</h2>
        <h2>the 'verse has to offer</h2>
      </div>
      <div className="businesses">
        <div className="cards">
          <h3>Gear</h3>
          <img src={weapons} alt="Weapons" className="card-image" />
        </div>
        <div className="cards">
          <h3>Restaurants</h3>
          <img src={food} alt="Food" className="card-image" />
        </div>
        <div className="cards">
          <h3>Nightlife</h3>
          <img src={bar} alt="Bar" className="card-image" />
        </div>
        <div className="cards">
          <h3>Clothing</h3>
          <img src={store} alt="Store" className="card-image" />
        </div>
        <div className="cards">
          <h3>Health</h3>
          <img src={hospital} alt="Hospital" className="card-image" />
        </div>
      </div>
      <div className="info2">
        <h2>Login or Sign Up to access the Full site</h2>
      </div>
    </>
  );
}

export default SplashPage;
