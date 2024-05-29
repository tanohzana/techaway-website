import './App.scss';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import nodejsSrc from './images/nodejs.png';
import angularSrc from './images/angular.png';
import reactSrc from './images/react.png';
import androidSrc from './images/android.png';
import vueSrc from './images/vue.png';
import managementSrc from './images/management.png';
import codingSrc from './images/coding.png';
import contractSrc from './images/contract.png';
const techs = ['Javascript', 'React', 'NodeJS', 'Java', 'Angular', 'Vue', 'Svelte', 'Ember', 'Backbone'];

const sliderSettings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  vertical: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 4000,
};

function App() {
  const [tech, setTech] = useState('React');
  const [techCounter, setTechCounter] = useState(0);

  const changeTech = () => {
    setTechCounter((prevCounter) => {
      const newCounter = (prevCounter + 1) % techs.length;
      setTech(techs[newCounter]);
      return newCounter;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => changeTech(), 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className='top-section'>
        <h1>Tech Away</h1>

        <div className='content'>
          <div className='tech-text-container'>
            <h2 className='tech-text'>We have the talents you need in <span className='tech'>{tech}</span></h2>
            <p className='description'>Let Tech Away provide you with talented developers for your projects, ensuring a job well done at an affordable cost.</p>
            <a href='https://calendly.com/florian-se6m/30min' target="_blank" className='meeting-btn'>SCHEDULE A CALL</a>
          </div>
          <div className='slider-container'>
            <Slider {...sliderSettings}>

              <div>
                <div className='dev-container'>
                  <div className='img-logo-container'>
                    <img className='img-logo' src={nodejsSrc} />
                  </div>
                  <div className='dev-info'>
                    <p className='info'>Vanessa P</p>
                  </div>
                  <div className='availability'>
                    <span className='green-dot'></span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className='dev-container'>
                  <div className='img-logo-container'>
                    <img className='img-logo' src={angularSrc} />
                  </div>
                  <div className='dev-info'>
                    <p className='info'>James N</p>
                  </div>
                  <div className='availability'>
                    <span className='green-dot'></span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className='dev-container'>
                  <div className='img-logo-container'>
                    <img className='img-logo' src={reactSrc} />
                  </div>
                  <div className='dev-info'>
                    <p className='info'>Allan D</p>
                  </div>
                  <div className='availability'>
                    <span className='orange-dot'></span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className='dev-container'>
                  <div className='img-logo-container'>
                    <img className='img-logo' src={nodejsSrc} />
                  </div>
                  <div className='dev-info'>
                    <p className='info'>Vincent R</p>
                  </div>
                  <div className='availability'>
                    <span className='green-dot'></span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className='dev-container'>
                  <div className='img-logo-container'>
                    <img className='img-logo' src={androidSrc} />
                  </div>
                  <div className='dev-info'>
                    <p className='info'>Alice A</p>
                  </div>
                  <div className='availability'>
                    <span className='red-dot'></span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className='dev-container'>
                <div className='img-logo-container'>
                    <img className='img-logo' src={vueSrc} />
                  </div>
                  <div className='dev-info'>
                    <p className='info'>Thomas I</p>
                  </div>
                  <div className='availability'>
                    <span className='orange-dot'></span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className='second-section'>
        <h2>How it works</h2>

        <div className='steps'>
          <div className='step'>
            <div className='step-img-container'>
              <img src={managementSrc} />
            </div>
            <div className='step-text'>Call with the management</div>
          </div>
          <div className='step'>
            <div className='step-img-container'>
              <img src={codingSrc} />
            </div>
            <div className='step-text'>Meet the talent</div>
          </div>
          <div className='step'>
            <div className='step-img-container'>
              <img src={contractSrc} />
            </div>
            <div className='step-text'>Sign a contract</div>
          </div>
        </div>
      </div>

      <div className='footer'>
        <p>Tech Away KE 2024 © All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
