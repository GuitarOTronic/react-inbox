import React from 'react';
import Message from './Message'

class MessageList extends React.Component{
  constructor(props){
    super(props)
    this.messages = this.props.state.messages
  }

    render(){
     return (
        <div className='container-fluid'>
          {this.messages.map((message, i) => < Message key={i} allMessages={this.messages} subject={message} toggleSelected={this.props.toggleSelected} isStarred={this.props.isStarred}/>)}
        </div>

      )
    }


}
export default MessageList;
