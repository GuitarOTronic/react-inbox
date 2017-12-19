import React from 'react';
import Toolbar from './Toolbar'
import MessageList from './MessageList'

const Inbox = (props) => (

  <div>

    <Toolbar removeLabel = {props.removeLabel} applyLabel = {props.applyLabel} markAsRead={props.markAsRead} markAsUnread={props.markAsUnread} state={props.state} toggleSelected={props.toggleSelected} />
    <MessageList state={props.state} isChecked={props.isChecked} toggleSelected={props.toggleSelected} isStarred={props.isStarred}/>
  </div>
);

export default Inbox;
