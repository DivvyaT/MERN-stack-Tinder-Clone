import TinderCard from 'react-tinder-card';
import './App.css';
import TinderCards from './TinderCards';
import Header from './Header';
import SwipeButtons from './SwipeButtons.js'

function App() {
  return (
    <div className="app">
      
      <Header/>
      <TinderCards/>
      <SwipeButtons />
      
    </div>
  );
}

export default App;
