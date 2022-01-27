import React from "react";
import Foodbox from "./Foodbox";

const Foodlist = (props) =>{
    const {foods} = props;

    return (
        <>
            {foods.length > 0 ? (
                <div className="food-list">
                {foods.map((meal) => {
        return (
          <Foodbox
            image={meal.image}
            name={meal.name}
            calories={meal.calories}
          />
        );
      })}
                </div>
            ):(
<p> No food</p>
            )}
        </>
    );
};

export default Foodlist;