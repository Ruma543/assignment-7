import { useState } from 'react';
import './App.css';
import Carts from './Component/Carts';
import Courses from './Component/Courses';

function App() {
  const [selectCarts, setSelectCarts] = useState([]);
  const [remainingHour, setRemainingHour] = useState(0);
  const [hour, setHour] = useState(0);
  const [price, setPrice] = useState(0);
  const limit = 20;
  const handleSelect = course => {
    let price = course.course_price;
    let hour = course.course_credit;

    const isExist = selectCarts.find(item => item.id == course.id);
    if (isExist) {
      return alert('this course is already exist');
    } else {
      selectCarts.forEach(item => {
        hour = hour + item.hour;
      });
      const remainingHour = limit - hour;
      selectCarts.forEach(item => {
        price = price + item.price;
      });
      if (hour > limit) {
        return alert('out of your hour limit');
      } else {
        setRemainingHour(remainingHour);
        setHour(hour);
        const newSelectCarts = [...selectCarts, course];
        setSelectCarts(newSelectCarts);
        setPrice(price);
      }
    }

    // console.log('handle select comming soon');
  };
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Course Registration</h1>
      <div className="flex w-11/12 mx-auto">
        <Courses handleSelect={handleSelect}></Courses>
        <Carts
          selectCarts={selectCarts}
          remainingHour={remainingHour}
          hour={hour}
          price={price}
        ></Carts>
      </div>
    </>
  );
}

export default App;
