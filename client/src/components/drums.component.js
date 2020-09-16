import React from "react";
// import axios from "axios";

export default class Drums extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     image: undefined
        // }
        // this.fileInput = React.createRef();
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(e) {
    //     this.setState({
    //         image: this.fileInput.current.files[0]
    //     });
    //     console.log(this.fileInput.current.files[0].name);
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const bodyFormData = new FormData();
    //     bodyFormData.append('image', this.state.image);
    //     // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //     axios({
    //         method: 'post',
    //         url: '/memes/new',
    //         data: bodyFormData,
    //         headers: {'Content-Type': 'multipart/form-data' }
    //         })
    //         .then((response) => {
    //             //handle success
    //             console.log(response);
    //         })
    //         .catch((err) => {
    //             //handle error
    //             console.log(err);
    //         });
        
    //         window.location = '/view-memes'
    // }

    render() {
        return (
            <div className="container">
                drums
            </div>
        );
    }
}