import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer() {
  const [number, setNumber] = useState(1)
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of cakes - {numOfCakes} (hook + payload)</h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>Buy {number} cake</button>
    </div>
  );
}

export default CakeContainer;