import { Outlet } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
         

        </nav>
      </header>
      <main>
<Navbar/>

        <Outlet />
      </main>
    </div>
  )
}