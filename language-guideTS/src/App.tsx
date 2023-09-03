import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import {lazy,Suspense} from "react";
import Loader from './components/Loader';






const Home=lazy(()=>import("./components/Home"));
const Learning=lazy(()=>import("./components/Learning"));
const Quiz=lazy(()=>import("./components/Quiz"));
const Result=lazy(()=>import("./components/Result"));
const Login=lazy(()=>import('./components/Login'));

const App = () => {
  return (
    
   <BrowserRouter>
   <Header/>
   <Suspense fallback={<Loader/>}>
   <Routes >
    <Route path='/' element={<Home/>}/>
    <Route path='/Learning' element={<Learning/>}/>
    <Route path='/Quiz' element={<Quiz/>}/>
    <Route path='/Result' element={<Result/>}/>
    <Route path='/Login' element={<Login/>}/>
   </Routes>
   
   </Suspense>
   </BrowserRouter>
  )
}

export default App