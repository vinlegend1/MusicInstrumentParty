import React, { createRef } from "react";
import socketIOClient from 'socket.io-client';
// import ReactHtmlParse, { htmlparser2 } from 'react-html-parser';
// import axios from 'axios';

const socket = socketIOClient('http://localhost:5000');


function Keys(props) {

    const handleClick = (e) => {

        e.preventDefault();
        // console.log('he');
        // const audio = props.blockRef.current.children[1];
        // console.log(audio)
        socket.emit("audio", props.source);
        // audio.play();
        // audio.currentTime = 0;
        
        // console.log(props.blockRef.current)
    }

    return (
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 border border-dark" onClick={handleClick} ref={props.blockRef}>
          <p>{props.some}</p>
          <audio src={props.source} className="clip"></audio>
        </div>
    );
}


export default class Piano extends React.Component {

    constructor(props) {
        super(props);
        
        this.sounds = {
            Q: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            W: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
            E: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
            R: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
            T: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
            Y: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
            U: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
            I: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
            O: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
        }

        this.state = {
            qRef: createRef(),
            wRef: createRef(),
            eRef: createRef(),
            rRef: createRef(),
            tRef: createRef(),
            yRef: createRef(),
            uRef: createRef(),
            iRef: createRef(),
            oRef: createRef()
        }
        // this.handleClick = this.handleClick.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.onKeyPressed = this.onKeyPressed.bind(this);
    }

    componentDidMount() {
        socket.on("message", msg => {
            console.log(msg);
        });
        socket.on("audioFromServer", (audio) => {
            const qSrc = this.state.qRef.current.children[1].src;
            const wSrc = this.state.wRef.current.children[1].src;
            const eSrc = this.state.eRef.current.children[1].src;
            const rSrc = this.state.rRef.current.children[1].src;
            const tSrc = this.state.tRef.current.children[1].src;
            const ySrc = this.state.yRef.current.children[1].src;
            const uSrc = this.state.uRef.current.children[1].src;
            const iSrc = this.state.iRef.current.children[1].src;
            const oSrc = this.state.oRef.current.children[1].src;

            // console.log(audio);
            if (audio === qSrc) {
                // console.log('yes')
                const audioElement = this.state.qRef.current.children[1];
                audioElement.play();
                audioElement.currentTime = 0;
            }
            if (audio === wSrc) {
                const audioElement = this.state.wRef.current.children[1];
                audioElement.play();
                audioElement.currentTime = 0;
            }
            if (audio === eSrc) {
                const audioElement = this.state.eRef.current.children[1];
                audioElement.play();
                audioElement.currentTime = 0;
            }
            if (audio === rSrc) {
                const audioElement = this.state.rRef.current.children[1];
                audioElement.play();
                audioElement.currentTime = 0;
            }
            if (audio === tSrc) {
                const audioElement = this.state.tRef.current.children[1];
                audioElement.play();
                audioElement.currentTime = 0;
            }
            if (audio === ySrc) {
                const audioElement = this.state.yRef.current.children[1];
                audioElement.play();
                audioElement.currentTime = 0;
            }
            if (audio === uSrc) {
                const audioElement = this.state.uRef.current.children[1];
                audioElement.play();
                audioElement.currentTime = 0;
            }
            if (audio === iSrc) {
                const audioElement = this.state.iRef.current.children[1];
                audioElement.play();
                audioElement.currentTime = 0;
            }
            if (audio === oSrc) {
                const audioElement = this.state.oRef.current.children[1];
                audioElement.play();
                audioElement.currentTime = 0;
            }
        });
        
        document.addEventListener("keydown", (e) => {
            if (e.key === 'q') {
                // console.log('yes')
                // const audio = this.state.qRef.current.children[1];
                // audio.play();
                // audio.currentTime = 0;
                socket.emit("audio", this.sounds.Q);
            }
            if (e.key === 'w') {
                // const audio = this.state.wRef.current.children[1];
                // audio.play();
                // audio.currentTime = 0;
                socket.emit("audio", this.sounds.W);
            }
            if (e.key === 'e') {
                // const audio = this.state.eRef.current.children[1];
                // audio.play();
                // audio.currentTime = 0;
                socket.emit("audio", this.sounds.E);
            }
            if (e.key === 'r') {
                // const audio = this.state.rRef.current.children[1];
                // audio.play();
                // audio.currentTime = 0;
                socket.emit("audio", this.sounds.R);
            }
            if (e.key === 't') {
                // const audio = this.state.tRef.current.children[1];
                // audio.play();
                // audio.currentTime = 0;
                socket.emit("audio", this.sounds.T);
            }
            if (e.key === 'y') {
                // const audio = this.state.yRef.current.children[1];
                // audio.play();
                // audio.currentTime = 0;
                socket.emit("audio", this.sounds.Y);
            }
            if (e.key === 'u') {
                // const audio = this.state.uRef.current.children[1];
                // audio.play();
                // audio.currentTime = 0;
                socket.emit("audio", this.sounds.U);
            }
            if (e.key === 'i') {
                // const audio = this.state.iRef.current.children[1];
                // audio.play();
                // audio.currentTime = 0;
                socket.emit("audio", this.sounds.I);
            }
            if (e.key === 'o') {
                // const audio = this.state.oRef.current.children[1];
                // audio.play();
                // audio.currentTime = 0;
                socket.emit("audio", this.sounds.O);
            }
        });
    }

    // componentWillMount() {
    //     console.log('component will mount')
    // }

    // onKeyPressed(e) {
        
    // }
  

    render() {
        // const formStyle = {
        //     margin: "1rem",
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center",
        //     justifyContent: "center"
        // };


        return (
            <div className="row d-flex justify-content-center mt-3 mb-3">
               <Keys some="Q" source={this.sounds.Q} blockRef={this.state.qRef}></Keys>
               <Keys some="W" source={this.sounds.W} blockRef={this.state.wRef}></Keys>
               <Keys some="E" source={this.sounds.E} blockRef={this.state.eRef}></Keys>
               <Keys some="R" source={this.sounds.R} blockRef={this.state.rRef}></Keys>
               <Keys some="T" source={this.sounds.T} blockRef={this.state.tRef}></Keys>
               <Keys some="Y" source={this.sounds.Y} blockRef={this.state.yRef}></Keys>
               <Keys some="U" source={this.sounds.U} blockRef={this.state.uRef}></Keys>
               <Keys some="I" source={this.sounds.I} blockRef={this.state.iRef}></Keys>
               <Keys some="O" source={this.sounds.O} blockRef={this.state.oRef}></Keys>
            </div>
        );
    }
}
