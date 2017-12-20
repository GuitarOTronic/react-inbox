import React from 'react';
import Toolbar from './Toolbar'
import MessageList from './MessageList'

const Inbox = (props) => (

  <div>

    <Toolbar
      enableBtns={props.enableBtns}
      disableBtns={props.disableBtns}
      removeLabel = {props.removeLabel}
      applyLabel = {props.applyLabel}
      markAsRead={props.markAsRead}
      markAsUnread={props.markAsUnread}
      state={props.state}
      toggleSelected={props.toggleSelected}
      isToolBarChecked={props.isToolBarChecked}
      isChecked={props.state.isChecked}
      deleteMessage ={ props.deleteMessage}
    />
    <MessageList
      state={props.state}
      isChecked={props.state.isChecked}
      toggleSelected={props.toggleSelected}
      isStarred={props.isStarred}
      setMinusCheckbox = {props.setMinusCheckbox}

    />
  </div>
);

export default Inbox;
