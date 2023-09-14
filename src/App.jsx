import { useState } from 'react';
import './App.css';
import Carts from './Component/Carts';
import Courses from './Component/Courses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectCarts, setSelectCarts] = useState([]);
  const [remainingHour, setRemainingHour] = useState(0);
  const [hour, setHour] = useState(0);
  const [price, setPrice] = useState(0);
  const limit = 20;
  const handleSelect = course => {
    // let price = course.course_price;
    let hour = course.course_credit;

    const isExist = selectCarts.find(item => item.id === course.id);
    if (isExist) {
      toast.error('This course is already in your cart', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      selectCarts.forEach(item => {
        hour = hour + item.hour;
      });
      const remainingHour = limit - hour;
      // console.log(hour);
      if (remainingHour < 0 && hour === limit) {
        toast.error('You are out of your hour limit', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        // selectCarts.forEach(item => {
        //   price = price + item.price;
        // });
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
      <h1 className="text-4xl font-bold text-center my-6">
        Course Registration
      </h1>
      <div className="flex w-11/12 mx-auto">
        <Courses handleSelect={handleSelect}></Courses>
        <Carts
          selectCarts={selectCarts}
          remainingHour={remainingHour}
          hour={hour}
          price={price}
        ></Carts>
      </div>
      <ToastContainer />;
    </>
  );
}

export default App;

