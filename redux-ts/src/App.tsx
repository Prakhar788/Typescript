
import {useState} from "react"
import { useDispatch } from "react-redux";
import { StateType, dec, inc, incByValue } from "./redux";
import {useSelector} from "react-redux";



const App = () => {
  const [val,setVal]=useState<number>(0);
  const dispatch=useDispatch();
  const c=useSelector((state:StateType)=>state.count) ;

  const incbyValue=()=>{
    dispatch(incByValue(val))
  }

  return (
    <div>
      <h1>Redux-Toolkit</h1>
      <h2>{c}</h2>
      <button onClick={()=>dispatch(inc())}>+</button>
      <button onClick={()=>dispatch(dec())}>-</button>
      <input type="number" value={val} onChange={(e)=>{setVal(Number(e.target.value)) }}/>
      <button onClick={incbyValue}>add</button>
    </div>
  )
}

export default App