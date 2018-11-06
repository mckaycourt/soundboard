import React, {Component} from 'react';
import Section from './components/Section';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        let ArrestedDevelopment = [{path:'HeyWhatchaTryingToSayToMe', name: 'Whatcha Trying to Say to Me?', pic: 'whatcha.png'}, {path: 'mrf', name: 'Mr. F', pic: 'mrf.jpg'}];
        let TheOffice = [{path: 'No', name: 'NO! PLEASE NO!', pic: 'michaelScott.png'}];
        this.state = {
            ArrestedDevelopment,
            TheOffice,
        }
    }
    play = (index) => {
        document.querySelector("#" + index).play();
    };

    render() {
        return (
            <div className="App">
                <Section title={'Arrested Development'} files={this.state.ArrestedDevelopment} play={this.play}/>
                <Section title={'The Office'} files={this.state.TheOffice} play={this.play}/>
            </div>
        );
    }
}

export default App;
