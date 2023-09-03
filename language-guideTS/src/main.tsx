import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "@emotion/react"
import { CssBaseline, createTheme } from '@mui/material'



const theme=createTheme({
  palette:{
    primary:{
      main:"rgb(255,0,0)",
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
  <App />
  </ThemeProvider>
  </React.StrictMode>,
)
