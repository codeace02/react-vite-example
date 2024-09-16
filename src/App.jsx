import BgChanger from "./components/BgChanger"
import Card from "./components/Card"
import Login from "./components/context-example/user-example/Login";
import Profile from "./components/context-example/user-example/Profile";
import CurrencyConvertor from "./components/currency-app/CurrencyConvertor"
import PasswordGenerator from "./components/PasswordGenerator";
import UserContextProvider from "./context/UserContextProvider";

function App() {

  return (
    <>
      {/* <Card /> */}
      {/* <BgChanger /> */}
      {/* <PasswordGenerator /> */}
      {/* <CurrencyConvertor /> */}

      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
