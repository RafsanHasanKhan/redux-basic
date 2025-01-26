import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/features/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByFive = (number) => {
    dispatch(incrementByAmount(number))
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Redux counter app
      </h1>
      <div className="flex items-center gap-4">
        <button
          onClick={handleIncrement}
          className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold px-6 py-2"
        >
          +
        </button>
        <span>{count}</span>
        <button
          onClick={handleDecrement}
          className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold px-6 py-2"
        >
          -
        </button>

        <button onClick={()=>handleIncrementByFive(5)} className="bg-yellow-500 hover:bg-green-700 text-white text-xl font-bold px-6 py-2">
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
