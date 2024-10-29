import { useDispatch, useSelector } from "react-redux";
import { buyPizza } from "../redux";

function PizzaContainer() {
  const numOfPizzas = useSelector(state => state.pizza.numOfPizzas);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of pizzas - {numOfPizzas} (hook)</h2>
      <button onClick={() => dispatch(buyPizza())}>Buy pizza</button>
    </div>
  );
}

export default PizzaContainer;