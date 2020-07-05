import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./themes"
import { GlobalStyles } from "./globalStyles"
import Nav from './nav'

export default function Layout({ children }) {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Nav toggle={ toggleTheme } />
        { children }
      </>
    </ThemeProvider> 
  )
}