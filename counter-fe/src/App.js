import { useWeb3, useContract } from "./hooks/web3";
import CounterAbi from "./contracts/Counter.json";

import { useState, useEffect } from "react";

function App() {
  //CONST
  const provider = "ws://127.0.0.1:8545";
  const defaultAccount = "0x7A46ED6f282172Ec447F49B64cFB2AC55Fc20b1d";
  const contractAddress = "0x11EA02147349845433aFc4fFdbdC00e3A32bd15F";

  //HOOKS
  const web3 = useWeb3(provider, defaultAccount);
  const contract = useContract(web3, CounterAbi, contractAddress);
  const [counterValue, setCounterValue] = useState(0);

  useEffect(async () => {
    setCounterValue(await contract.methods.counter().call());
  }, []);

  async function handleIncrement() {
    await contract.methods.increment().send({ from: defaultAccount });
    setCounterValue(await contract.methods.counter().call());
  }

  async function handleDecrement() {
    await contract.methods.decrement().send({ from: defaultAccount });
    setCounterValue(await contract.methods.counter().call());
  }

  return (
    <div className="App">
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <span>Valor actual: {counterValue}</span>
    </div>
  );
}

export default App;
