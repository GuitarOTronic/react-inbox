import React from 'react'

class Toolbar extends React.Component{
  constructor(props){
    super(props)
    this.checkboxCl = 'fa fa-square-o'
    this.messageArr = props.state.messages
  }

  fireApplyLabel = (event) => {
    this.props.applyLabel(event.target.value)
    event.target.value = ''
  }
  fireRemoveLabel = (event) => {
    this.props.removeLabel(event.target.value)
  }

  
  isSelected=(message) =>{
    return message.selected ? true : false
  }

  isToolBarChecked= () => {
    let messages = this.props.state.messages
    let numberSelected = 0
    for(let i = 0; i<messages.length; i++){
      if(messages[i] === true){
          numberSelected++
      }
    }


    if(messages.every(this.isSelected)){
      console.log('none selected');

      let selectedMessages = messages.map((message, i) => {
        if(message.selected){
          // unselect all
        this.props.toggleSelected(message.id)
        this.checkboxCl='fa fa-square-o'

        }
        return message
      })
    }
    else if(!messages.every(this.isSelected)){
      console.log('all selected');
      let selectedMessages = messages.map((message, i) => {
        if(!message.selected){
          this.props.toggleSelected(message.id)
        }
        this.checkboxCl='fa fa-check-square-o'
        return message
      })
    }
  }

  fireMarkAsRead = () => {
    this.props.markAsRead()
  }
  fireMarkAsUnread = () => {
    this.props.markAsUnread()
  }

  render(){
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>

          <button className="btn btn-default">
            <i className={`${this.checkboxCl}`} onClick={this.isToolBarChecked}></i>
          </button>

          <button className="btn btn-default" onClick={this.fireMarkAsRead}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={this.fireMarkAsUnread}>
            Mark As Unread
          </button>

          <select placeholder='Apply Label' className="form-control label-select" onChange={this.fireApplyLabel}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select placeholder='Remove Label' className="form-control label-select" onChange={this.fireRemoveLabel}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Toolbar
