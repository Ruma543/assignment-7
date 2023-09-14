import React from 'react';

const Cart = ({ cart }) => {
  console.log(cart);
  const { course_name } = cart;
  return (
    <div>
      <ol>
        <li>{course_name}</li>
      </ol>
    </div>
  );
};

export default Cart;
