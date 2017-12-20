import React from 'react'

class Toolbar extends React.Component{
  constructor(props){
    super(props)
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

  fireIsToolBarChecked = () => {
    this.props.isToolBarChecked()
  }

  fireMarkAsRead = () => {
    this.props.markAsRead()
  }

  fireMarkAsUnread = () => {
    this.props.markAsUnread()
  }

  fireDeleteMessage =() => {
    this.messageArr.map(message => {
      if(this.isSelected(message)){
        this.props.deleteMessage(message)
      }
      return message
    })
  }

  render(){
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{this.props.state.unread}</span>
            unread messages
          </p>

          <button className="btn btn-default">
            <i disabled={`${this.disabled}`} className={`${this.props.isChecked}`} onClick={this.fireIsToolBarChecked}></i>
          </button>

          <button disabled={this.props.state.disabled} className="btn btn-default" onClick={this.fireMarkAsRead}>
            Mark As Read
          </button>

          <button disabled={this.props.state.disabled} className="btn btn-default" onClick={this.fireMarkAsUnread}>
            Mark As Unread
          </button>

          <select placeholder='Apply Label' disabled={this.props.state.disabled} className="form-control label-select" onChange={this.fireApplyLabel}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select placeholder='Remove Label' disabled={this.props.state.disabled} className="form-control label-select" onChange={this.fireRemoveLabel}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button disabled={this.props.state.disabled} onClick ={ this.fireDeleteMessage } className="btn btn-default">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Toolbar
