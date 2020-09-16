import React from "react";
// import axios from 'axios';
// import { Link } from 'react-router-dom'
// import Piano from "./piano.component"
import socketio from 'socket.io-client';

const socket = socketio('http://localhost:5000')

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            room: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRoom = this.handleRoom.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // const user = {
        //     username: this.state.username,
        //     room: this.state.room
        // }
        
        // socket.emit('joinRoom', user);

        window.location = "/piano";
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    handleRoom(e) {
        this.setState({
            room: e.target.value,
        });
    }


    // componentDidMount() {
    //     axios.get('/memes/')
    //         .then(response => {
    //             for (let i = 0; i < response.data.length; i++) {
    //                 let sumOfRatings = 0;
    //                 for (let j = 0; j < response.data[i].ratings.length; j++) {
    //                     sumOfRatings += parseInt(response.data[i].ratings[j]);
    //                 }
                    
    //                 let avgRating = sumOfRatings / response.data[i].ratings.length || 0;
                    
    //                 this.setState({
    //                     images: this.state.images.concat(response.data[i].image),
    //                     ratings: this.state.ratings.concat(avgRating),
    //                     ids: this.state.ids.concat(response.data[i]._id)
    //                 });
    //             }
    //             console.log(response.data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
            
    // }

    render() {

        return (
            <div className="container" onSubmit={this.handleSubmit}>
                <form className="text-center border border-light p-5">

                    <p className="h4 mb-4">Join a Room</p>

                    <input type="text" id="username" className="form-control mb-4" placeholder="username" onChange={this.handleUsername} required />

                    <input type="text" id="room" className="form-control mb-4" placeholder="room" onChange={this.handleRoom} required />

                    <button className="form-control tn btn-primary" type="submit" >Join</button>
                </form>
            </div>
        );
    }
}