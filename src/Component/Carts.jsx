import React from 'react';
import Cart from './Cart';

const Carts = ({ selectCarts, remainingHour, hour, price }) => {
  return (
    <div className="w-1/4 px-3 mx-auto shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-blue-700 border-b-2 py-3 border-gray-300">
        Credit Hour Remaining {remainingHour} hr
      </h3>
      <h3 className="text-xl font-semibold">Course Name</h3>
      <div className="border-b-2 border-gray-300 py-3 ">
        <ol>
          {selectCarts.map((cart, idx) => (
            <Cart key={idx} cart={cart} index={idx}></Cart>
          ))}
        </ol>
      </div>
      <h3 className="text-xl font-semibold text-gray-600 border-b-2 py-3 border-gray-300">
        Total Credit Hour: {hour}
      </h3>
      <h3 className="text-xl font-semibold text-gray-600  py-3">
        Total price: {price} USD
      </h3>
    </div>
  );
};

export default Carts;
