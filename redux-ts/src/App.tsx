
import {useState} from "react"
import { useDispatch } from "react-redux";
import { StateType, incByValue } from "./redux";
import {useSelector} from "react-redux";



const App = () => {
  const dispatch=useDispatch();
  const count=useSelector((state:StateType)=>{state.count});
  const [val,setVal]=useState<number>(0);
  const incbyValue=()=>{
    dispatch(incByValue(val))
  }
  return (
    <div>
      <h1>Redux-Toolkit</h1>
      <h2>{count}</h2>
      <button>+</button>
      <button>-</button>
      <input type="number" value={val} onChange={(e)=>{setVal(Number(e.target.value)) }}/>
      <button onClick={incbyValue}>add</button>
    </div>
  )
}

export default App