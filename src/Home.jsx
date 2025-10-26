import Login from "./Login"
import { createContext } from "react"

export const dataContext = createContext();

const Home = () => {
    const data = "Data from Home";
  return (
    <>
    <div>
        <h1>{"Home --> Login --> Counter"}</h1>
    </div>
    <dataContext.Provider value={data}>
        <Login/>
    </dataContext.Provider>
    </>
  );
}

export default Home;