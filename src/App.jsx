import { Routes,Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";

export default function App(){
  return(
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<Dashboard/>}></Route>
      </Route>
     
    </Routes>
  )
}