
import { Menu } from '@szhsin/react-menu';
import Example from './components/menu.js';
import Testimonials from './components/testimones.js';
import StepsCard from './components/steps.js';
import Hero from './components/hero.js';
import './App.css';
import './components/menu.js' // Import the menu component;
import NavBar from './components/navBar.js';
function App() {
  return (
    <div className="App">
  <NavBar></NavBar>
  <Hero></Hero>
<StepsCard></StepsCard>
<Testimonials></Testimonials>
<Example></Example>
    </div>
  );
}

export default App;
