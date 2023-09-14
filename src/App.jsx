import './App.css';
import Carts from './Component/Carts';
import Courses from './Component/Courses';

function App() {
  const handleSelect = course => {
    console.log('handle select comming soon');
  };
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Course Registration</h1>
      <div className="flex w-11/12 mx-auto">
        <Courses handleSelect={handleSelect}></Courses>
        <Carts></Carts>
      </div>
    </>
  );
}

export default App;
