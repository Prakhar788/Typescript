


// const Box = ({heading}:{heading:string}) => {
//   return (
//     <div>Box{heading}</div>
//   )
// }

import { ReactNode } from "react";

type PropsType={
heading:string,
child:ReactNode
};
const Box = (props:PropsType,) => {
    return (
      <div>Box{props.heading}{props.child}</div>
    )
  }
  

export default Box