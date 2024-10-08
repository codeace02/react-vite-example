import { useState } from "react";
import BgChanger from "./components/BgChanger"
import Card from "./components/Card"
import Login from "./components/context-example/user-example/Login";
import Profile from "./components/context-example/user-example/Profile";
import CurrencyConvertor from "./components/currency-app/CurrencyConvertor"
import PasswordGenerator from "./components/PasswordGenerator";
import UserContextProvider from "./context/UserContextProvider";
import ThemeChanger from "./components/context-example/theme-example/ThemeChanger";
import TodoApp from "./components/context-example/todo-example";
import Todos from "./components/redux-example/Todos";
import AddTodo from "./components/redux-example/AddTodo";

function App() {

  return (
    <>
      {/* <Card /> */}
      {/* <BgChanger /> */}
      {/* <PasswordGenerator /> */}
      {/* <CurrencyConvertor /> */}


      {/* <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider> */}

      {/* <ThemeChanger /> */}

      {/* <TodoApp /> */}

      <AddTodo />
      <Todos />
    </>
  )
}

export default App
