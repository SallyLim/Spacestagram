import logo from './logo.svg';
import './App.css';
import Gallery from './component/gallery';
import Header from './component/header';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <Gallery/>
    </div>
  );
}

export default App;
