import stars from "./stars.png";
import grid from "./grid.png";

function SplashPage() {
    return (
        <>
            <img src={stars} alt="Stars" className="stars" />
            <img src={grid} alt="Grid" className="grid" />
        </>
    )
}

export default SplashPage