import React from 'react';

const Cart = ({ cart, index }) => {
  // console.log(cart);

  const { course_name } = cart;
  return (
    <div className="px-3">
      <ol>
        <li className="text-left">{`${index + 1}. ${course_name}`}</li>
      </ol>
    </div>
  );
};

export default Cart;
