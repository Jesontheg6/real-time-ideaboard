import React, { Component } from 'react'
import ActionCable from 'actioncable'
import axios from 'axios' 
import Idea from './Idea'
import IdeaForm from './IdeaForm'
import update from 'immutability-helper'
import Notification from './Notification'
import $ from 'jquery';


class IdeasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: [] ,
      editingIdeaID: null,
      notification: '', 
      transisitonIn: false
    } 
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
    })
    .catch(error => console.log(error))
  }

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


  render() {
    return (
      <div>
        <div>
          <button className= "newIdeaButton" onClick={this.addNewIdea}>
            New Idea
          </button>
          <Notification in={this.state.transitionIn} notification={this.state.notification} />
        </div>
        {this.state.ideas.map((idea) => {
          // console.log(`${this.state.editingIdeaID}, ${idea.id}`)
          // console.log(this.state.editingIdeaID === idea.id)
          if(this.state.editingIdeaID === idea.id) {
            return( <IdeaForm idea={idea} key={idea.id} updateIdea={this.updateIdea}
                      titleRef = {input => this.title = input}
                      resetNotification={this.resetNotification} /> )
          } else {
          return (<Idea idea={idea} key={idea.id} onClick={this.enableEditing}
                  onDelete={this.deleteIdea} />)
          }
        })}
      </div>
    );
  }
}

export default IdeasContainer
