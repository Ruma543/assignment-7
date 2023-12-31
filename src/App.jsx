import { useState } from 'react';
import './App.css';
import Carts from './Component/Carts';
import Courses from './Component/Courses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectCarts, setSelectCarts] = useState([]);
  const [remainingHour, setRemainingHour] = useState(20);
  const [hour, setHour] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelect = course => {
    let newRemainingHour = remainingHour;
    let newHour = hour;
    let newPrice = price;

    const isExist = selectCarts.find(item => item.id === course.id);

    if (isExist) {
      toast.error('This course is already Exist', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      newHour += parseInt(course.course_credit);
      newPrice += course.course_price;
      newRemainingHour -= course.course_credit;
      if (newRemainingHour <= 0 && newHour > 20) {
        toast.error('This course is out of your hour limit', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        setHour(newHour);
        setPrice(newPrice);
        setRemainingHour(newRemainingHour);

        const newSelectCarts = [...selectCarts, course];
        setSelectCarts(newSelectCarts);
      }
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-6">
        Course Registration
      </h1>
      <div className="flex w-full mx-auto">
        <Courses handleSelect={handleSelect}></Courses>
        <Carts
          selectCarts={selectCarts}
          remainingHour={remainingHour}
          hour={hour}
          price={price}
        ></Carts>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
