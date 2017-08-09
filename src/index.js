import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ExampleApplication from './triangleDemo'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/*var start = new Date().getTime();
function update() {
  ReactDOM.render(
    <ExampleApplication elapsed={new Date().getTime() - start} />,
    document.getElementById('root')
  );
  requestAnimationFrame(update);
}
requestAnimationFrame(update);*/
