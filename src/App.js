import React, {Component} from 'react';
import Section from './components/Section';
import './App.css';
import Audiofiles from './components/Audiofiles';

class App extends Component {
    constructor(props) {
        super(props);
        let ArrestedDevelopment = [{
            path: 'HeyWhatchaTryingToSayToMe',
            name: 'Whatcha Trying to Say to Me?',
            pic: 'whatcha.png'
        }, {path: 'mrf', name: 'Mr. F', pic: 'mrf.jpg'}, {path: 'Annyong', name: 'Annyong', pic: 'annyong.jpg'},
            {path: 'BleepMountain', name: 'Bleep Mountain', pic: 'GOB.jpg'}, {
                path: 'BusterBusiness',
                name: 'Buster Business',
                pic: 'buster.jpg'
            }, {path: 'BusterConstruction', name: 'Buster Construction', pic: 'buster.jpg'}, {
                path: 'ChickensDontClap',
                name: 'Checkens Don\'t Clap',
                pic: 'GOB.jpg'
            }, {path: 'FireSale', name: 'Fire Sale', pic: 'tobias.jpg'}, {
                path: 'GrilledCheese',
                name: 'Grilled Cheese',
                pic: 'buster.jpg'
            }, {path: 'HeyHermano', name: 'Hey Hermano', pic: 'buster.jpg'}, {
                path: 'HideMyThunder',
                name: 'Hide My Thunder',
                pic: 'tobias.jpg'
            }, {path: 'OriginalTeamocil', name: 'Original Teamocil', pic: 'teamocil.jpg'}, {path: 'SelfishCountry', name: 'Selfish Country', pic: 'lindsay.jpg'}, {path: 'SomewhereOverTheRainbow', name: 'Somewhere Over The Rainbow', pic: 'tobias.jpg'}, {
                path: 'ThereAreDozens',
                name: 'There Are Dozens',
                pic: 'tobias.jpg'
            }];
        let TheOffice = [{path: 'No', name: 'NO! PLEASE NO!', pic: 'michaelScott.png'}];
        this.state = {
            files: [],
            ArrestedDevelopment,
            TheOffice,
        }
    }

    play = (index) => {
        document.querySelector("#" + index).play();
    };

    show = (title) => {
        document.querySelector('.App').style.display = 'none';
        document.querySelector('#section').style.display = 'block';
        console.log(title.replace(' ', ''));
        this.setState({
            files: this.state[title.replace(' ', '')],
        })
    };

    back = () => {
        document.querySelector('.App').style.display = 'block';
        document.querySelector('#section').style.display = 'none';
    };

    render() {
        return (
            <div id='page'>
                <div className="App">
                    <Section title={'Arrested Development'} image={'whatcha.png'} show={this.show}
                             play={this.play}/>
                    <Section title={'The Office'} image={'michaelScott.png'} show={this.show} play={this.play}/>
                    <Section title={'The Office'} image={'michaelScott.png'} show={this.show} play={this.play}/>
                    <Section title={'The Office'} image={'michaelScott.png'} show={this.show} play={this.play}/>
                    <Section title={'The Office'} image={'michaelScott.png'} show={this.show} play={this.play}/>
                    <Section title={'The Office'} image={'michaelScott.png'} show={this.show} play={this.play}/>
                </div>
                <div id='section' style={{display: 'none'}}>
                    <button onClick={this.back}>Back</button>
                    <Audiofiles files={this.state.files} play={this.play}/>
                </div>
            </div>
        );
    }
}

export default App;
