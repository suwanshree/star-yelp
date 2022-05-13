import stars from "./stars.png";
import grid from "./grid.png";
import bar from "./bar.png";
import food from "./food.png";
import hospital from "./hospital.png";
import store from "./store.png";
import weapons from "./weapons.png";

function SplashPage() {
  return (
    <>
      <div className="background">
        <img src={stars} alt="Stars" className="stars" />
        <img src={grid} alt="Grid" className="grid" />
      </div>
      <div className="info">
        <h1>Welcome to Star Yelp,</h1>
        <h2>your guide to the best businesses</h2>
        <h2>the 'verse has to offer!</h2>
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
        <h2>Login or Sign Up to access Full site.</h2>
      </div>
    </>
  );
}

export default SplashPage;
