
import './index.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  // setting DarkMode
  const [mode,setMode] = useState("light");
  const [modeText,setModeText] = useState("Enable Dark Mode");
  const toggleMode = ()=>{
    if(mode === "dark"){
      
      setModeText("Enable Dark mode");
      showAlert("Enabled light Mode","success");
      setMode("light");
      // document.title = "LexiMorph -LightMode";

      // not a good practice
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // },2000);

      // setInterval(() => {
      //   document.title = "install textUtils";
      // },1500);
    }
    else if(mode === "light"){ 
      setModeText("Enable light mode");
      showAlert("Enabled Dark Mode","success");
      //  document.title = "LexiMorph -DarkMode";
      setMode("dark");
      
    }
  }

  // setting alert
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })

    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  // setting colorPallete
  // const [Color,setColor] = useState({
  //   textColor:"#FFFFFF"
  // });

  // const [backColor,setBackColor] = useState({
  //   back1:"#D1D5DB"
  // })

  
  // const handleColor = (event)=>{
  //   const val = event.target.value;
  //   setColor({
  //     textColor:val
  //   });
  // };

  // const handleBackColor1 = (event)=>{
  //   const val = event.target.value;
  //   setBackColor({
  //     back1:val
  //   });
  // };


    // pink mode
  const [pinkMode,setpinkMode] = useState({
    background2:'bg-white',
    textColor2:'text-black',
  });
  const [pinkModeText,setpinkModeText] = useState("Enable Pink Mode");
  
  let remove = ()=>{
    document.body.classList.remove("bg-[#750044]");
    document.body.classList.remove("bg-gray-300");
  }
  const handlePinkMode = ()=>{
    //const div1 = document.querySelector(".box");// if you place this outside this function, it shows error first time because you are trying to access the classlist before it is rendered in DOM which will be null
    remove();
    if(pinkMode.background2 === "bg-white"){
      setpinkMode({
        background2:'bg-[#AE044E]',
        textColor2:'text-white',
      })
      setpinkModeText("Enable Light Mode");
      showAlert("Pink Mode Enabled","Success");
      document.body.classList.add("bg-[#750044]");
    }
    else if(pinkMode.background2 === "bg-[#AE044E]"){
      setpinkMode({
        background2:'bg-white',
        textColor2:'text-black',
      })
      setpinkModeText("Enable Pink Mode");
      showAlert("Light Mode Enabled","Success");
      document.body.classList.add("bg-gray-300");
    }
    
  }
  // document.body.style.backgroundColor = backColor.back1;
  
  return (
    // <></> - is a jsx fragment ,jsx is a combination of html and js 
    // you can jump into js by using {} and you can return only one tag 
    // jsx is stricter so the html tag has to be closed
    // react is a single page application where without reloaded the components will be updated

    <>
      <Router>
        <div className="con max-h-full">
          
          {/* nav bar */}
          <Navbar title = "LexiMorph" aboutText = "about" mode = {mode} toggleMode = {toggleMode} modeText = {modeText}  pinkText = {pinkModeText} handlePinkMode = {handlePinkMode}/>

          {/* main */}
          <Alert alert = {alert}/>

          
          
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL.
            react does a partial matching of 
            the path so you need to use exact path */}
          <Routes>
            <Route
              exact path='/'
              element = 
              {<Textform heading = "Try LexiMorph - word counter, character, counter, capitalize and download " mode = {mode} showAlert = {showAlert} pinkMode = {pinkMode} />}
            />
            <Route 
              exact path='/about'
              element = {<About mode = {mode} pinkMode = {pinkMode}/>}
            />
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
