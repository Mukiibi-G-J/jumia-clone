import React, { useContext } from 'react';
import { Store } from '../context/store';

function Category({ products }) {
  const { state, dispatch } = useContext(Store);
  const addProductHandler = (product) => {
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product } });
  };
  console.log(products);
  return (
    <div>
      {products.map((category) => (
        <>
          <div className="shadow-md  mt-5 bg-[#FF9900]">
            <h2 className="text-lg p-2">{category.category}</h2>
          </div>
          <div className="flex space-x-8 flex-wrap">
            {category.description.map((product) => (
              <div className=" flex p-6 rounded-md shadow-md h-[300px] pb-2 w-[200px] flex-col mt-5 bg-white ">
                <img src={product.image} height={120} width={120} alt="" />
                <span className="text-xl">{product.product}</span>
                <span className="text-sm">UGX {product.price}</span>
                <span>🌟 🌟 🌟 🌟 </span>
                <button
                  onClick={() => addProductHandler(product)}
                  className="bg-[#FF9900] p-1 mb-4 rounded-xl mt-2  hover:bg-[#E4811C]"
                >
                  Add to Chart
                </button>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default Category;
