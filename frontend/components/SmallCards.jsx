import React from "react";
import Cards from "./Cards";

function SmallCards() {
  return (
    <div className="flex items-center justify-between mt-4 ">
      <Cards image={"/images/jumia_images/TCHSAL_QCK.png"} name={"LIVE NOW"} />
      <Cards
        image={"/images/jumia_images/Official-Store.png"}
        name={"Official Stores"}
      />
      <Cards
        image={"/images/jumia_images/FreeDelivery.png"}
        name={"Free Delivery"}
      />
      <Cards
        image={"/images/jumia_images/JumiaFood.png"}
        name={"Semuna Food"}
      />
    </div>
  );
}

export default SmallCards;
