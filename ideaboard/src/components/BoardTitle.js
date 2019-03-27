import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class BoardTitle extends Component {
  state = {
    title: "DEFAULT TITLE",
    editMode: false
  }

  changeTitle = (e) => {
      this.setState({[e.target.name]: e.target.value})
   }

   editTitle = () => {
    this.setState({
      editMode: !this.state.editMode
    })
   }

   unFocus = (e) => {
    console.log(e.target.value);
    this.setState({
      title: e.target.value,
      editMode: false
    })
   }


  render(){
    return(
      <div>
        {
          this.state.editMode ? 
          <input defaultValue={this.state.title} onBlur={this.unFocus} style={{width:"100%", height:"30px", fontSize:"30px"}}  onClick={this.changeTitle} /> 
          :
          <h1 onClick={this.editTitle}>{this.state.title}</h1>
        }

      
      </div>
      
    );
  }
}

export default BoardTitle