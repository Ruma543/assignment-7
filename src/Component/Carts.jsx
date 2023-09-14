import React from 'react';
import Cart from './Cart';

const Carts = ({ selectCarts, remainingHour, hour, price }) => {
  // console.log(selectCarts);

  return (
    <div className="w-1/4">
      <h3>Credit Hour Remaining {remainingHour} hr</h3>
      <h3 className="text-xl font-semibold">Course Name</h3>
      <div>
        {selectCarts.map((cart, idx) => (
          <Cart key={idx} cart={cart}></Cart>
        ))}
      </div>
      <h3>Total Credit Hour: {hour}</h3>
      <h3>Total price: {price} USD</h3>
    </div>
  );
};

export default Carts;
