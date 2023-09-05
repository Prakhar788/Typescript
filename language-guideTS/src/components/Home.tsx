import { Container, Typography,Stack, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const languages=[{name:"Japanese",
code:"ja",},
{name:"Hindi",
code:"hi",},
{name:"Spanish",
code:"es",},
{name:"French",
code:"fr",},
]
const Home = () => {
   const navigate=useNavigate();
  const langSelect=(language:string):void=>{
  navigate(`/learn?language=${language}`)
  }


  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" p={"2rem"} textAlign={"center"}>
        Welcome,Start your Learning Journey.
      </Typography>
      <Stack direction={"row"} spacing={"2rem"} p={"2rem"} alignContent={"center"} justifyContent={"center"}>
      {languages.map((i)=>(
        <Button onClick={()=>langSelect(i.code)} key={i.code} variant="contained">{i.name}</Button>
      ))}
      {/* {languages.map((i)=>{
  return <Button>{i.name}</Button>
})} */}
      </Stack>
      <Typography>
        Choose Any One Language.
      </Typography>
    </Container>
  )
}

export default Home

