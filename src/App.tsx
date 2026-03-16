import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";

import Home from "./pages/EmployeeApp/Home/Home";
import About from "./pages/EmployeeApp/About/About";
import LogIn from "./pages/EmployeeApp/LogIn/LogIn";
import ContactUs from "./pages/EmployeeApp/ContactUs/ContactUs";
import Aple from "./pages/Clients/Aple/Aple";
import  Microsoft from "./pages/Clients/Microsoft/Microsoft";
import Nekki from "./pages/Clients/Nekki/Nekki";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aple" element={<Aple />} />
          <Route path="/microsoft" element={<Microsoft />} />
          <Route path="/nekki" element={<Nekki />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
 
    </BrowserRouter>
  );
}

export default App;
