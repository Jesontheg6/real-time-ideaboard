<<<<<<< HEAD
import React, { Component } from 'react'
import axios from 'axios' 
import Idea from './Idea'
import update from 'immutability-helper'
import Notification from './Notification'
import $ from 'jquery';
import Color from './Color'
import BoardTitle from './BoardTitle'

import ActionCable from 'actioncable'
import IdeaForm from './IdeaForm'

=======
import React, { Component } from 'react';
import axios from 'axios' 
>>>>>>> e4c4851... added connector

class IdeasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
      ideas: [] ,
      editingIdeaID: null,
      editingTitleID: null,
      notification: '', 
      transisitonIn: false,
      selected: null
    
    }
    this.references = new Map();
    this.selected = this.selected.bind(this);

  }

  componentDidMount() {
    if(sessionStorage.getItem('user')) {
    $.ajax({
      type: "GET",
      url: 'http://localhost:3001/api/v1/ideas',
      dataType: "JSON",
      headers: JSON.parse(sessionStorage.getItem('user')),
    }).done((data) => {
      this.setState({ideas: data})    
   }).catch(error => console.log(error))
  }

      window.fetch('http://localhost:3001').then(data => {
      data.json().then(res => {
      // this.setState({ ideas: res.idea })
      
      // ideas.title
      // ideas.body

      window.alert(JSON.stringify(res))
    })
  })
  
    const cable = ActionCable.createConsumer('ws://localhost:3001/cable')
    this.sub = cable.subscriptions.create('NotesChannel', {
    received: this.handleReceiveNewIdea
    })
  }

  addNewIdea = () => {
    axios.post('http://localhost:3001/api/v1/ideas', {idea: {title: '', body: ''}}, {headers: JSON.parse(sessionStorage.getItem('user'))})
    .then(response => {
      const ideas = update(this.state.ideas, {$splice: [[0,0, response.data]]})
      // window.alert(JSON.stringify(response.data))
      this.setState({ideas: ideas, editingIdeaID: response.data.id})
      // window.alert(response.data.id)
=======
      ideas: []
    } 
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/ideas.json')
    .then(response => {
      console.log(response)
      this.setState({ideas: response.data})
>>>>>>> e4c4851... added connector
    })
    .catch(error => console.log(error))
  }

<<<<<<< HEAD
    handleReceiveNewIdea = ({ idea }) => {
      if (idea !== this.state.ideas) {
        this.setState({ idea })
  }
}

  updateIdea = (idea) => {
    const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
    const ideas = update(this.state.ideas, {[ideaIndex]: {$set:idea}})
    this.setState({ideas: ideas, notification: 'All changes saved', transitionIn: true})
    this.sub.send({ ideas: idea.target.value, id: idea.id})
  }

  deleteIdea = (id) => {
    axios.delete(`http://localhost:3001/api/v1/ideas/${id}` , {headers: JSON.parse(sessionStorage.getItem('user'))})
    .then(response => {
      const ideaIndex = this.state.ideas.findIndex(x => x.id === id)
      const ideas = update(this.state.ideas, { $splice: [[ideaIndex, 1]]})
      this.setState({ideas: ideas})
    })
    .catch(error => console.log(error))
  }

  resetNotification = () => {this.setState({notification: '', transitionIn: false})}

  enableEditing = (id) => {
    this.setState({editingIdeaID: id}, () => {this.title.focus() })
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  selected(e) {
    let selectedRef = this.references.get(e);
    console.log("SELECTED: ", selectedRef)
    this.setState({selected: selectedRef}, () => console.log('this.state = ', this.state));
  }

  handleEditing = (id) => {
    this.setState({editingTitleID: id})
  }

  handleUnselect = () => {
    this.setState({
      selected: null
    })
    // this.updateIdea(idea);
  }

  render() {
    return (
      <div>
        <div className="main-div">
        <div className="board-title" onClick={this.handleEditing}>

        <BoardTitle/>
         </div>
          <div className="newideabtn-div">
            <button className= "newIdeaButton" onClick={this.addNewIdea}>
              New Idea
            </button>
          </div>
          <div>
          <Notification className="notification" in={this.state.transitionIn} notification={this.state.notification} />
          </div>
          <div className="color-div">
            <Color className="color-div" selected={this.state.selected} handleUnselect={this.handleUnselect}/>
          </div>
        </div>
        {this.state.ideas.map((idea) => {
            return( <Idea 
              className="tile"
              idea={idea} 
              key={idea.id} 
              updateIdea={this.updateIdea}
              titleRef = {input => this.title = input}
              resetNotification={this.resetNotification}
              onClick={this.enableEditing}
              onDelete={this.deleteIdea} 
              onChangeComplete={ this.handleChangeComplete }
              ref = {c => this.references.set(idea.id, c)}
              color=""
              onClick={() => {this.selected(idea.id)}} />)   
              }
             )}
          </div>
      );
   }
=======
  render() {
    return (
      <div>
        {this.state.ideas.map((idea) => {
          return (
            <div className="tile" key={idea.id}>
            <h4> {idea.title}</h4>
            <p>{idea.body}</p>
            </div>
            )
        })}
      </div>
    );
  }
>>>>>>> e4c4851... added connector
}

export default IdeasContainer
