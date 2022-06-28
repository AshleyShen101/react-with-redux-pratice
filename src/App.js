import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index"

function App() {
  // state here is the state inside the store
  // we can use this line wherever we want to get the data
  const account = useSelector((state) => state.account);
  // console.log's output is an object with key, value pair
  console.log(account);

  const dispatch = useDispatch();

  // Action creators contains depositMoney and withdrawMoney
  // const AC = bindActionCreators(actionCreators, dispatch);
  // console.log(AC);

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
