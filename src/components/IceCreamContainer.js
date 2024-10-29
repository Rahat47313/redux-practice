import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer() {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of ice creams - {numOfIceCreams} (hook)</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy ice cream</button>
    </div>
  );
}

export default IceCreamContainer;