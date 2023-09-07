import { useState,useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Typography,Stack, Button } from "@mui/material"
import { ArrowBack,VolumeUp } from "@mui/icons-material";
import { translateWords } from "../utils/features";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getWordsFail, getWordsRequest, getWordsSuccess } from "../redux/slices";
import Loader from "./Loader";


const Learning = () => {
  const[count,setCount]=useState<number>(0);
  const params=useSearchParams()[0].get("language") as LangType;
  const navigate=useNavigate();
  const dispatch=useDispatch();


  const {loading,error,words}=useSelector((state:{root:StateType})=>state.root);

  const nextHandler=():void=>{
    setCount((prev)=>prev+1);
  }

  useEffect(() => {
    dispatch(getWordsRequest());
    translateWords(params || "hi").then((arr:WordType[])=>{
      //console.log(arr);
      dispatch(getWordsSuccess(arr));
    }).catch((err)=>{
      //console.log(err);
      dispatch(getWordsFail(err));
    });

    if(error){
      alert(error);
      dispatch(clearState());
    }
  
    
  }, []);
  if(loading) return <Loader/>
  return (
    <Container maxWidth="sm" sx={{padding:"1rem",}}>
      <Button onClick={count===0?()=> navigate("/"):()=>setCount((prev)=>prev-1)}>
      <ArrowBack/>
      </Button>
      <Typography m={"2rem 0"}>Learning Made Easy</Typography>

<Stack direction={"row"} spacing={"1rem"}>
  <Typography variant={"h4"}>
    {count + 1} - {words[count]?.word}
  </Typography>
  <Typography color={"blue"} variant="h4">
    : {words[count]?.meaning}
  </Typography>
  <Button
    sx={{
      borderRadius: "50%",
    }}
    
  >
    <VolumeUp />
  </Button>
</Stack>
<Button
        sx={{
          margin: "3rem 0",
        }}
        variant="contained"
        fullWidth
        onClick={
          count === 7 ? () => navigate("/quiz") : nextHandler
        }
      >
        {count ===7  ? "Test" : "Next"}
      </Button>
    </Container>
  )
}

export default Learning