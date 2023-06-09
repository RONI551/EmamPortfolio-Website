import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Social from "./components/social/Social";
import DocViewer,{DocViewerRenderers} from 'react-doc-viewer'

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

 
const docs =[
  {
    uri:require('./img/Emam1.pdf'),
    fileType:'pdf',
    fileName:"Emam1.pdf"

  }
]
  return (
     <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
    
   <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Social/> 
    </div>
  );
};

export default App;
