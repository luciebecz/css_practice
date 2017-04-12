import React, { Component } from 'react'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className='header_image'>
            <img className='css_image' id='first_header_image' src="https://cms-assets.tutsplus.com/uploads/users/71/courses/669/preview_image/CSS-1.png" />
          </div>          
          <div className='header_image'>
            <img className='css_image' src="https://s.tmimgcdn.com/help/wp-content/uploads/2016/06/css-icon1.png" />
          </div>
          <div className='header_image'>
            <img className='css_image' src="https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png" />
          </div>
        <h2>CSS GAMES</h2>          
        </div>
        <div className='divider'>
        </div>
        <div className="App-intro">
          <h2>Things Lucie Didn't Know About CSS</h2><hr />
          <div className='app_intro_col'>
            <div className='col'>
              <h3>Column 1</h3>
            </div>
            <div className='col'>
              <h3>Column 2</h3>
            </div>
            <div className='col'>
              <h3>Column 3</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
