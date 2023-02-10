import Navbardemo from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import CreateItem from "./Components/CreateItem";
import Privaterouter from "./Components/Privaterouter";
import Error from "./Components/Error";
import { useState } from "react";
function App() {
  const [user, setuser] = useState(null);
  return (
    <div>
      <Navbardemo />
      <main>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/createitem" element={<CreateItem/>}/>
          {/* <Route
            path="/createItem"
            element={
              <Privaterouter user={user}>
                <CreateItem user={user} />
              </Privaterouter>
            }
          /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
