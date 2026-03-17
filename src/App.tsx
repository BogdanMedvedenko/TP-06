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
// lessons
// import Lesson_14 from "./lessons/Lesson_14/Lesson_14";

// homeworks
import Homework_13 from "./homeworks/Homework_13/Homework_13";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Layout>
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
      </Layout> */}
            {/* <Lesson_14 /> */}
            <Homework_13/>
    </BrowserRouter>

  );
}

export default App;
