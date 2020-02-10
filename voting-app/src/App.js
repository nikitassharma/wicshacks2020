import React from 'react';
import voting from './images/voting.svg'
import classroom from './images/classroom.png';
import office from './images/office.png';
import girl from './images/girl_avatar.svg';
import sanders from './images/sanders.png';
import bloomberg from './images/bloomberg.png';
import warren from './images/warren.png';
import trump from './images/trump.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { findAllByDisplayValue } from '@testing-library/dom';

class App extends React.Component {

   
  
constructor(props){
  super(props);
  this.increment = this.increment.bind(this);
  this.state={
    bernieCount:0,
    warrenCount:0,
    trumpCount:0,
    bloombergCount:0
  };
}

increment(name) {
    this.setState(prevState => ({
        [name]: prevState[name] + 1
    }));
 
 }

  render() {
    var bernie = this.state.bernieCount;
    var warren = this.state.warrenCount;
    var trump = this.state.trumpCount;
    var bloomberg = this.state.bloombergCount;
    var candidate;
    var image;
    var biography;

    if (bernie == 2) {
      candidate = "bernie";
      image = {sanders};
      biography = "";
    }
    else if (warren == 2) {
      candidate = "warren";
      image = {warren};
      biography = "";
    }
    else if (trump == 2) {
      candidate = "trump";
      image = {trump};
      biography = "";
    }
    else {
      candidate = "bloomberg";
      image = {bloomberg};
      biography = "";
    }

    return (
    <Router>
      <div className="App" >
        <header style={{borderBottom: "5px solid #299FA8"}} className="App-header">
          <p style={{fontSize: "2em"}}>
            <Link to="/" style={{color: "white", textDecoration: "none"}}>candi<span>day (in the life)</span></Link>
          </p>
          <Link to="/scene1part1"><button className="start-button">start game</button></Link>
        </header>
        <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/scene1part1">
            <Scene 
              text="You wake up and it’s a beautiful day, the day after WiCS Hacks. But, your cold’s been getting worse recently and you decide to go to the doctor to check it out."
              link="/scene1part2"
              image={office}
            />
          </Route>
          <Route path="/scene1part2">
            <Scene 
              text="The doctors decide to run a couple of tests to determine if you have the flu. After your checkup, they ask for you to pay the fee for your visit. To calculate the fee, the doctor asks you a question."
              link="/scene1part3"
              image={office}
            />
          </Route>
          <Route path="/scene1part3">
            <SceneWithQuestions
              link="/sceneresults1"
              text="Should paying for your healthcare be the government’s responsibility or private health insurance providers’ responsibility?"
              buttontext1="The federal government should cover my healthcare and we can fund this with the money that employers are spending on private healthcare."
              buttontext2="The federal government should cover my healthcare and we can fund this by raising employer taxes."
              buttontext3="The government should make healthcare more affordable but shouldn’t make everything free for everyone."
              buttontext4="Private health care companies should be allowed to exist in the economy and people should have their own choices on healthcare."
              image={office}
            />
          </Route>
          <Route path="/sceneresults1">
            <SceneResults 
              link="/scene2part1"
              text1="Elizabeth Warren supports Medicare for All, which would provide all Americans with a public health care program. She would fund Medicare for All with the money that employers are currently spending on private healthcare."
              text2="Mike Bloomberg does not support Medicare for All but aims to protect Americans with expanded coverage and lower costs. He’ll build on Obamacare to protect coverage for pre-existing conditions and make prescription drugs more affordable."
              text3="Bernie Sanders supports Medicare for All, which would provide all Americans with a public health care program. He would fund Medicare for All by raising employer payroll taxes by 7.5%."
              text4="Donald Trump believes that private health care companies should be allowed to exist in the economy and people should have their own choices on healthcare."
            />
          </Route>
          <Route path="/scene2part1">
            <Scene 
              text="After your doctor’s visit, you make it back just in time for your Gender Studies class. In the middle of class, your phone beeps with an email notification. Of course, UT is emailing you once again about your tuition bill. You open up your phone to find a question."
              link="/scene2part2"
              image={classroom}
            />
          </Route>
          <Route path="/scene2part2">
            <SceneWithQuestions 
              link="/sceneresults2"
              text="How much money should the government be spending on subsidizing student tuition?"
              buttontext1="Tuition should be free for all students AND the government should cancel all existing student debt."
              buttontext2="Tuition should be free for all students from all backgrounds, but should leave existing student debt alone."
              buttontext3="The government should use their money to help make tuition more affordable, but not completely free."
              buttontext4="It’s not the government’s responsibility. The government should funnel their money into different areas such military spending."
              image={classroom}
            />
          </Route>
          <Route path="/sceneresults2">
            <SceneResults 
              link="/finalresults"
              text1="Elizabeth Warren would like to cancel student loan debt for all current students and make higher education affordable for all Americans."
              text2="Mike Bloomberg has not yet stated an opinion on student loan debt but wants to increase student achievement and supports charter schools."
              text3="Bernie Sanders wants to make public education free for all students."
              text4="Donald Trump believes that education should be handled at a local level and should not be subsidized by the government."
            />
            </Route>
            <Route path="/finalresults">
              <FinalResults></FinalResults>
            </Route>
        </Switch>
      </div>
      </div>
      
    </Router>
    );
  }
}

function Home() {
  return (
    <div>
    <img style={{marginTop: "10vh", height: "40vh"}} src={voting} alt="voting image"/>
    <p>candiday is an interactive, educational game that teaches you about the candidates for the upcoming presidential election and their policies.</p>
    <p>click on the "start game" button to play through the scenes and find out who you're most similar to!</p>
  </div>
  )
}

function Scene(props) {
  return (
    <div style={{textAlign: "center"}}>
      <img style={{height: "72vh", float: "left"}} src={props.image} alt="scene"/>
      <br/>
      <div style={{width: "45vw", float: "right", marginRight: "2vw"}}>
        <h3 style={{padding: "0 5%", textAlign: "center"}}>{props.text}</h3>
        <Link to={props.link}><button className="option-button">next</button></Link>
      </div>
    </div>
  );
}

function SceneWithQuestions(props) {
  return (
    <div style={{textAlign: "center"}}>
      <img style={{height: "72vh", float: "left"}} src={office} alt="doctors office"/>
        <br/>
        <div style={{float: "right", height: "50vh", width: "47vw", margin: "0 1%"}}>
          <h3>{props.text}</h3>
          <Link to={props.link}><button style={{minWidth: "100%"}} className="option-button">{props.buttontext1}</button></Link>
          <Link to={props.link}><button style={{minWidth: "100%"}} className="option-button">{props.buttontext2}</button></Link>
          <Link to={props.link}><button style={{minWidth: "100%"}} className="option-button">{props.buttontext3}</button></Link>
          <Link to={props.link}><button style={{minWidth: "100%"}} className="option-button">{props.buttontext4}</button></Link>
        </div>
    </div>
  );
}

function SceneResults(props) {
  return (
    <div>
      <div id="left" style={{float: "left", width: "45vw", padding: "2%"}}>
        <div>
          <img className="results-image" src={warren} alt="elizabeth warren" />
          <div className="results">
            <p style={{margin: "auto"}}>
              {props.text1}
            </p>
          </div>
        </div>
        <div>
          <img className="results-image-bottom" src={bloomberg} alt="mike bloomberg" />
          <div className="results">
            <p style={{margin: "auto"}}>
              {props.text2}
            </p>
          </div>
        </div>
      </div>
      <div id="right" style={{float: "right", width: "45vw", padding: "2%"}}>
        <div>
          <img className="results-image" src={sanders} alt="bernie sanders" />
          <div className="results">
            <p style={{margin: "auto"}}>
              {props.text3}
            </p>
          </div>
        </div>
        <div>
          <img className="results-image-bottom" src={trump} alt="donald trump" />
          <div className="results">
            <p style={{margin: "auto"}}>
              {props.text4}
            </p>
          </div>
        </div>
      </div>
      <div style={{textAlign: "right", marginRight: "2vw"}}>
      <Link to={props.link}><button className="option-button">next</button></Link>
      </div>
    </div>
  );
}

function FinalResults(props){
  return(
    <div>
      <img style={{height: "17vw", marginTop: "3vh"}} src={bloomberg}/>
      <p style ={{ fontSize:"24px", textTransform: "lowercase"}}>congrats! your answer choices most closely matched the ideology of <b>Michael Bloomberg</b>.</p>
      <p style= {{fontSize:"20px", textTransform: "lowercase", margin: " 0vw 22vw", lineHeight: "4vh"}}>In terms of healthcare, Michael Bloomberg doesn’t want medicare to be free for all, but would expand coverage. Similarly, for education, he believes that college should be more affordable but not free. He also supports a ban on assault weapons and is in favor of universal background checks. Finally, Bloomberg wants to create special taxes on the wealthy.</p>
    </div>
  );
}

export default App;