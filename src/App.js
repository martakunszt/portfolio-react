import React from 'react';
import './App.css';
import logo from'./assets/logo.png';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <Breadcrumb></Breadcrumb>
        <Hr></Hr>
      </header>
      <AboutMe></AboutMe>
      <Slider></Slider>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

function Logo(){
  return(
    <div className = "logo">
      <img src={logo} alt="logo with initials" />
    </div>
  )
}

function Breadcrumb() {
  return (
    <div className="Nav">
      <ul className="Breadcrumb">
        <li><a href="#work">My Work </a></li>
        <li><a href="#aboutme">About me </a></li>
        <li><a href="#contact">Contact</a> </li>
      </ul>
    </div>
  );
}

function Hr() {
  return (
    <hr className="new1"></hr>
  );
}

function AboutMe() {
  return (
    <div className="aboutme">
      <a name = "aboutme"></a>
     <h1>Looking for a web developer?</h1>
     <p className="one">I'm a junior front-end developer living in Cambridge, United Kingdom.<br></br>
     I won <a href="https://www.cambridgenetwork.co.uk/news/students-look-forward-bright-future-coding-thanks-winning-scholarships" rel="noopener noreferrer" target="_blank">Digital's Academy Tech Scholarship</a> in October 2019.<br></br>
     Currently looking for a job.</p>
    </div>
  );
}

/* IMAGES */

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "https://i.imgur.com/HyKbNnI.png",
        "https://i.imgur.com/WscO9sp.png",
        "https://i.imgur.com/AMHbgM6.png",
        "https://i.imgur.com/vWMEY63.png",
        "https://i.imgur.com/akmChCT.png"
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.

    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">
        <a name= "work"></a>
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>

        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}


const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize:'60%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  }
  return <div className="slide" style={styles}></div>
}


const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fas fa-arrow-left"></i>
    </div>
  );
}


const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fas fa-arrow-right"></i>
    </div>
  );
}

/* CONTACT */
function Contact() {
  return (
    <div className="contact">
      <a name="contact"></a>
      <ul>
        <li>
          <div className = "email">
          <h4>Contact me</h4>
          <p>kunsztowicz.m@gmail.com</p>
          </div>
        </li>
        <li>
          <aside className="social">
          <h4>Social Media</h4>
            <a href="https://github.com/martakunszt" rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/marta-kunsztowicz/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://twitter.com/marplesnobble" rel="noopener noreferrer" target="_blank"><i class="fab fa-twitter"></i></a>
          </aside>
        </li>
      </ul>
    </div>
  );
}


/* FOOTER */

function Footer() {
  return (
    <div className="footer">
      <p>© Marta Kunsztowicz 2020</p>
    </div>
  );
}


export default App;