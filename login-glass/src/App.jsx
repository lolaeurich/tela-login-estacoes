import Fall from "./pages/fall";
import Summer from "./pages/summer";
import Winter from "./pages/winter";
import Spring from "./pages/spring";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
     <Route path="/winter" element={<Winter />} />
     <Route path="/spring" element={ <Spring />} />
     {/*} <Fall />*/}
     <Route path="/" element={<Summer />}/>
    </Routes>
  );
}

export default App 