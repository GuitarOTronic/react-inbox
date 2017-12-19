import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inbox from './components/inbox'
import seeds from './seeds.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {messages: seeds, isChecked:'fa fa-square-o'}
  }

  markAsRead = () => {
    let toggled = this.state.messages.map(message => {
      if(message.selected){
        message.read = true
      }
      message.selected=false
      return message
    })
    console.log(toggled);
    this.setState({messages:toggled})
  }

  markAsUnread = () => {
    let toggled = this.state.messages.map(message => {
      if(message.selected){
          message.read = false
        }
      message.selected=false
      return message
    })
    this.setState({messages:toggled})
  }

  isStarred = (messageId) => {
    let toggled = this.state.messages.map( message => {
      if(messageId === message.id){
        message.starred ? message.starred = false : message.starred=true
      }
      return message
    })
    this.setState({messages:toggled})
  }

  toggleSelected = (messageId) => {

    let toggled = this.state.messages.map( message => {
      if(messageId === message.id){
        message.selected ? message.selected=false : message.selected=true
      }
      return message
    })
    this.setState({messages:toggled})
  }

  applyLabel = (label) => {
    let toggled = this.state.messages.map(message => {
      if(message.selected){
        if (!message.labels.includes(label)){
          message.labels.push(label)
        }
      }
      message.selected=false
      return message
    })

    this.setState({messages:toggled})

  }
  removeLabel = (label) => {

    let toggled = this.state.messages.map(message => {

      if(message.selected){
        let index = message.labels.indexOf(label)
        if (index >= 0){
          message.labels.splice(index, 1)
        }
      }
      message.selected=false
      return message
    })
    this.setState({messages:toggled})

  }

  render() {
    return (
      <div className='container-fluid'>
        <Inbox removeLabel = {this.removeLabel} applyLabel = {this.applyLabel} markAsRead={this.markAsRead} markAsUnread={this.markAsUnread} state={this.state} isChecked = {this.state.isChecked} toggleSelected={this.toggleSelected} isStarred={this.isStarred}/>
    </div>
    );
  }
}

export default App
