
import './App.css';
import { Navbar } from './component/Pages/Navbar';
import { AllRoutes } from './component/Routes/AllRoutes';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Box mb={"30px"}>
        <Navbar />
     
      </Box>
      <Box>
        <AllRoutes />
      </Box>

    </div>
  );
}

export default App;
