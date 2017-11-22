import React, { Component } from 'react';
import Particles from 'react-particles-js';
import GetInTouch from './GetInTouch';
import {Helmet} from 'react-helmet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta name="description" content="MyndJournal is an app that lets counsellors track mental health in their 
          patients to allow them to be treated better and heal quicker. We also make sure that all of the patient's 
          information is completely secure and confidential." />
          <link rel="canonical" href="http://myndjournal.io" />
          <link rel="canonical" href="http://remedium-info.firebaseapp.com" />
        </Helmet>
        <div className=""> 
          <Particles params={{
                                particles: {
                                    number: {
                                        value: 80
                                    },
                                    line_linked: {
                                        shadow: {
                                            enable: false,
                                            color: "#3CA9D1",
                                            blur: 20
                                        }
                                    }
                                }
                            }}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }} 
          />
          <div className="text">
            <span className="BannerText">MyndJournal</span>
            <span className="subtitle">Begin your journey towards better mental health.</span>
          </div>
          <GetInTouch />
        </div>
      </div>
    );
  }
}

export default App;
