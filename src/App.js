import logo from './logo.svg';
import './App.css';
import Gallery from './pages/gallery/gallery';
import Header from './component/header';
import ShowEarth from './pages/home/showEarth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
        <Route path="/gallery">
            <Gallery/> 
          </Route>
          <Route path="/">
            <ShowEarth/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
