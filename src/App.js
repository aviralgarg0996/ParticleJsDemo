import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Particles from "react-particles-js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "red",
                  blur: 1
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 1,
                  color: "#000000"
                }
              },
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              size: {
                anim: {
                  enable: false,
                  speed: 60,
                  size_min: 0.1,
                  sync: false
                }
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: true,
                    mode: 'grab'
                  },
                  onclick: {
                    enable: true,
                    mode: 'push'
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
            }
          }}
          style={{
            width: "100%"
          }}
        />
      </div>
    );
  }
}

export default App;
