import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
    <div>
       <h1>Hello there Napstar</h1>
       <div class="header">
              <video id='napster-streaming-player' class='video-js'></video>
              <div class="header-text">Napster App<span class="user"></span></div>
            </div>
            <button id="next">Next</button>
            <button id="previous">Previous</button>
            <button id="clear">Clear</button>
            <button id="repeat">Repeat</button>
            <button id="shuffle">Shuffle</button>
            <button id="pause">Pause</button>
            <button id="resume">Resume</button>
            <div id="tracks"></div>
     </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
