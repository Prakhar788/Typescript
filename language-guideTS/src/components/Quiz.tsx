import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Quiz = () => {
  const [result, setResult] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [ans, setAns] = useState<string>("");


  const nextHandler = (): void => {
    setResult((prev) => [...prev, ans]);
    setCount((prev) => prev + 1);
    setAns("");
  };
  return (

    <Container
      maxWidth="sm"
      sx={{
        padding: "1rem",
      }}
    >
      <Typography m={"2rem 0"}>Quiz</Typography>

      <Typography variant={"h3"}>
        {count + 1} - {"words[count]?.word"}
      </Typography>

      <FormControl>
        <FormLabel
          sx={{
            mt: "2rem",
            mb: "1rem",
          }}
        >
          Meaning
        </FormLabel>
        <RadioGroup value={ans} onChange={(e) => setAns(e.target.value)}>
         <FormControlLabel value={"lol"} control={<Radio/>} label={"Option 1"}/>
        </RadioGroup>
      </FormControl>

      <Button
        sx={{
          margin: "3rem 0",
        }}
        variant="contained"
        fullWidth
        onClick={nextHandler}
        disabled={ans === ""}
      >
        {"count === words.length - 1" ? "Submit" : "Next"}
      </Button>
    </Container>
  )
}

export default Quiz