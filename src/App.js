import logo from './logo.svg';
import './App.css';
import Gallery from './pages/gallery/gallery';
import Header from './component/header';
import ShowEarth from './pages/home/showEarth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
        <Route path="/gallery">
            <Gallery/> 
          </Route>

          <Route exact path="/">
            <Suspense fallback={<div>Loading...</div>}>
            <ShowEarth/>
            </Suspense>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
