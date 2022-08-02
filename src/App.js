// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from "react";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {          // Function to update alert with 2 parameters 
    setAlert({                                   //alert updated from null to some string values
      msg: message,
      type: type
    })

    setTimeout(() => {        // vanish alert message logic
      setAlert(null)
    }, 1500);

  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.color = 'white'
      document.body.style.backgroundColor = '#000941'
      showAlert('Dark Mode Enabled', 'success')                       //showAlert invoked 
      document.title = 'Text App - Dark Mode'
    } else {
      setmode('light')
      document.body.style.color = 'black'
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled', 'success')                       // showAlert invoked
      document.title = 'Text App - Light Mode'
    }
  }

  return (
    <>
    <Router>
      <Navbar title='Text Utilities' about="What is Text Utilities ?" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <Routes>
          <Route exact path="/about" element = {<About mode={mode} />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text below ,to Modify it." mode={mode} />}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
