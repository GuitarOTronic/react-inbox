import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Inbox from './components/inbox'
import seeds from './seeds.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = { unread: 0, messages: seeds, isChecked:'fa fa-square-o', disabled:true}
  }

  componentDidMount(){
    this.calculateUnread()
  }

  deleteMessage = (messageId) => {
    let index = this.state.messages.indexOf( messageId )
    let newMessages = this.state.messages
    newMessages.splice(index, 1)

    this.setState({messages: newMessages})
    this.calculateUnread()
  }

  isSelected = (message) =>{
    return message.selected ? true : false
  }

  setMinusCheckbox = (selectedCount) => {

    if(selectedCount === 0 ){
      this.setState({isChecked:'fa fa-square-o'})
    }
    else if ( selectedCount === this.state.messages.length ){
      this.setState({isChecked: 'fa fa-check-square-o'})
    }
    else{
    this.setState({isChecked:'fa fa-minus-square-o'})
    this.enableBtns()
  }
  }

  isToolBarChecked = () => {
    let messages = this.state.messages
    // let numberSelected = 0
    //
    // for(let i = 0; i<messages.length; i++){
    //   if(messages[i].selected === true){
    //       numberSelected++
    //   }
    //
    // }

    if(messages.every(this.isSelected)){
      let selectedMessages = messages.map((message, i) => {
        if(message.selected){
          // unselect all
        this.toggleSelected(message.id)
        }
        return message
      })

      this.setState({isChecked:'fa fa-square-o'})
      this.disableBtns()
    }
    else if(!messages.every(this.isSelected)){
      let selectedMessages = messages.map((message, i) => {
        if(!message.selected){
          this.toggleSelected(message.id)
        }

        return message
      })

      this.setState({isChecked:'fa fa-check-square-o'})
      this.enableBtns()
    }

  }

  calculateUnread = () => {
    let unread = 0
    this.state.messages.map(message => {
      if( !message.read ) unread ++
      return message
    })
    this.setState({unread: unread})
  }
  markAsRead = () => {
    let toggled = this.state.messages.map(message => {
      if(message.selected){
        message.read = true
      }
      message.selected=false
      return message
    })

    this.setState({messages:toggled, isChecked:'fa fa-square-o'})
    this.calculateUnread()
  }

  markAsUnread = () => {
    let toggled = this.state.messages.map(message => {
      if(message.selected){
          message.read = false
        }
      message.selected=false
      return message
    })
    this.setState({messages:toggled, isChecked:'fa fa-square-o'})
    this.calculateUnread()
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

  disableBtns = () => {
    // this.state.disabled=true
    this.setState({disabled:true})
  }
  enableBtns = () => {
    // this.state.disabled=false
    this.setState({disabled:false})
  }

  render() {
    return (
      <div className='container-fluid'>
        <Inbox
          disableBtns={this.disableBtns}
          enableBtns={this.enableBtns}
          removeLabel = {this.removeLabel}
          applyLabel = {this.applyLabel}
          markAsRead={this.markAsRead}
          markAsUnread={this.markAsUnread}
          state={this.state}
          isChecked = {this.isChecked}
          toggleSelected={this.toggleSelected}
          isStarred={this.isStarred}
          isToolBarChecked = {this.isToolBarChecked}
          setMinusCheckbox = {this.setMinusCheckbox}
          deleteMessage = {this.deleteMessage}


        />
    </div>
    );
  }
}

export default App
