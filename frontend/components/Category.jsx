import React from "react";
import { data } from "../Library/data";

function Category() {
  return (
    <div>
      {data.map((category) => (
        <>
          <div className="shadow-md  mt-5 bg-[#FF9900]">
            <h2 className="text-lg p-2">{category.category}</h2>
          </div>
          <div className="flex space-x-8 flex-wrap">
            {category.description.map((products) => (
              <div className=" flex p-6 rounded-md shadow-md h-[300px] pb-2 w-[200px] flex-col mt-5 bg-white ">
                <img src={products.image} height={120} width={120} alt="" />
                <span className="text-xl">{products.product}</span>
                <span className="text-sm">UGX {products.price}</span>
                <span>🌟 🌟 🌟 🌟 </span>
                <button className="bg-[#FF9900] p-1 mb-4 rounded-xl mt-2  hover:bg-[#E4811C]">
                  Add to Chart
                </button>
              </div>
            ))}
          </div>
        </>
      ))}

      {/* {category.description.map((products) =>( */}
    </div>
  );
}

export default Category;
