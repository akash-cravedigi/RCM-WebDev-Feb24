import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import States from './components/States';
import Navigation from './components/Navigation';
import Styling from './components/Styling';
import Events from './components/Events';

function Greeting() {
  return <h1>Hello World</h1>
}

function Application() {
  var x = <h1>This is a JSX component</h1>;
  let canGreet;
  
  if(canGreet) {
    var greeting = <span>Hello World</span>
  }else {
    greeting = <span></span>
  }

  return (
    <div>
      <Events />
      <Navigation />
      <Styling />
      <States />

      {x}
      {Greeting()}
      {greeting}
      <h1>React Tutorial</h1>
      <ClassComponent />
      <FuncComponent />
    </div>
  );
}

export default Application;
