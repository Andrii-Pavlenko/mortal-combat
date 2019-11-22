import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import './styles.css';
import images from './images';
import Table from './components/table';
import Vs from './components/vs'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      activeId: "1",
      newPath: false, 
      randomId: "1",
    }  
  }

  componentDidMount() {
    this.getImages(images)
  }

  getImages = (images) => {
    this.setState({
      images: images,
    })
  }

  findItem = (images, activeId) => {
    let item = images.filter(item => item.id === activeId)
    return item.map(item => item.show)
  }

  findName = (images, activeId) => {
    let item = images.filter(item => item.id === activeId)
    return item.map(item => item.name);
  }

  findFighter = (images, activeId) => {
    let item = images.filter(item => item.id === activeId)  
    return item.map(item => item.vs)
  }

  keyDownUp = (activeId) => {
    if (activeId === 8) {
      return 1;
    } else if (activeId >= 20) {
      return activeId - 5;
    } else if (activeId >= 15) {
      return activeId - 6 === 11 ? 4 : activeId - 6;
    } else if (activeId - 7 <= 1) {
      return activeId;
    } else {
      return activeId - 7;
    }
  }

  keyDownDown = (activeId) => {
    if (activeId === 14) {
      return 19;
    } else if (activeId === 8) {
      return 15;
    } else if (activeId === 4) {
      return 17;
    } else if (activeId > 0 && activeId < 8) {
      return activeId + 7 > 24 ? 24 : activeId + 7;
    } else if (activeId > 8 && activeId < 15) {
      return activeId + 6;
    } else if (activeId > 14 && activeId < 20) {
      return activeId + 5;
    } else if (activeId <= 19) {
      return activeId + 5;
    } else if (activeId + 5 > 24) {
      return activeId;
    }
  }

  right = (activeId) => {
    if (activeId === 24) {
      return activeId;
    } else if (activeId === 10) {
      return 12;
    } else {
      return activeId + 1;
    }
  }

  left = (activeId) => {
    if (activeId === 1) {
      return activeId;
    } else if (activeId === 12) {
      return 10;
    } else {
      return activeId - 1;
    }
  }

  randomId = (images) => {
    let random = (Math.floor(Math.random() * 24) + 1) + ''; 
    let item = images.filter(item => item.id === random)  
    return item.map(item => item.vs)
  } 

  keyDown = (e, images) => {
    e.preventDefault()
    const { activeId } = this.state;
    if (e.keyCode === 39 && +activeId <= 24) {
      this.setState(prevState => ({
        ...prevState,
        activeId: `${this.right(+prevState.activeId)}`,
      }))
    } else if (e.keyCode === 37 && +activeId >= 1) {
      this.setState(prevState => ({
        ...prevState,
        activeId: `${this.left(+prevState.activeId)}`,
      }))
    } else if (e.keyCode === 40 && +activeId <= 24 && +activeId >= 1) {
      this.setState(prevState => ({
        ...prevState,
        activeId: `${this.keyDownDown(+prevState.activeId)}`,
      }))
    } else if (e.keyCode === 38 && +activeId <= 24 && +activeId >= 1) {
      this.setState(prevState => ({
        ...prevState,
        activeId: `${this.keyDownUp(+prevState.activeId)}`,
      }))
    } else if (activeId === 11) {
      return this.setState(prevState => ({
        ...prevState,
        newPath: true,
        activeId: (Math.floor(Math.random() * 24) + 1) + '',
      }))
    } else if (e.keyCode === 13) {
      let random = (Math.floor(Math.random() * 24) + 1) + ''; 
      let item = images.filter(item => item.id === random).map(item => item.vs)       
      return this.setState(prevState => ({
        ...prevState,
        newPath: true,
        randomId: item,
      }))
    } 
  }

  render() {  
    const { images, activeId, newPath, randomId } = this.state;
    
    if (newPath) {
      this.setState(prevState => ({
        ...prevState,
        newPath: false,
      }))
      return (
        <Redirect from="/mc_choose_hero" to="/mc_vs_screen" exact component={Vs}/>        
      )      
    }

    return (      
      <div className="App">
        <Switch>
          <Route path="/mc_choose_hero">
            <Table 
              images={images} 
              activeId={activeId} 
              findItem={this.findItem} 
              findName={this.findName} 
              keyDown={this.keyDown}
            />
          </Route>
          <Route exact path="/mc_vs_screen">
            <Vs 
              images={images} 
              activeId={activeId} 
              findFighter={this.findFighter}
              findName={this.findName} 
              randomId={randomId}
            />
          </Route>
        </Switch>
      </div>      
    );
  }
}


export default App;
