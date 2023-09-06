import axios from "axios";
import { generate } from "random-words";


export const translateWords=async(params:LangType)=>{
    try{
        const words=generate(8).map((i)=>({
            Text:i
        }));

        const {data}=await axios.post("https://microsoft-translator-text.p.rapidapi.com/translate",words,{params: {
            'to[0]': params,
            'api-version': '3.0',
            profanityAction: 'NoAction',
            textType: 'plain'
          },headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '9f4c471052mshaafe3f8175a655ep14ddb3jsn4480947f5df9',
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
          },})
        console.log(data);
    }
    catch(error){
    console.log(error);
    throw new Error("Some Error");
    }
};