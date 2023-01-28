import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Homepage/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";

import Singlepage from "./pages/single/Singlepage";
import Write from "./pages/write/Write";
import { BrowserRouter,Routes,Route} from "react-router-dom";



function App() {
  const user = false;
  return (
    
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={user ?<Home/>:<Register />} />
        <Route path="/login" element={user ?<Home/>:<Login />} />
        <Route path="/write" element={user ?<Write />:<Register/>} />
        <Route path="/settings" element={user ?<Settings />:<Register/>} />
        <Route path="/post/:postId" element={<Singlepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
