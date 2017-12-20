import React from 'react';
import Labels from './Labels'

const Message = (props) => {
  let selected = ''




  function fireToggleSelected(){
    let allMessages = props.allMessages
    let selectedCount = 0
    props.toggleSelected(props.subject.id)

    allMessages.map(message => {
      if(message.selected === true){
        selectedCount++
      }
    })

    if(selectedCount > 0 && selectedCount < allMessages.length){
      props.setMinusCheckbox()
    }
    else {
      props.setMinusCheckbox(selectedCount)
    }
  }

  function fireIsStarred(){
    props.isStarred(props.subject.id)
  }

  if(props.subject.selected){
    selected = 'selected'
  }

     return (

    <div>
      <div className={props.subject.read ? `row message read ${selected}`  : `row message unread ${selected}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                type="checkbox"
                checked = {props.subject.selected ? 'checked' : false}
                onClick={fireToggleSelected}
              />
            </div>
            <div className="col-xs-2">
              <i className={props.subject.starred ? "star fa fa-star" : "star fa fa-star-o"} onClick={fireIsStarred}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {/* adds labels to messages */}
          {props.subject.labels.map((label, i) => < Labels key={i} label={label} /> )}
          <a href="#">
            {props.subject.subject}
          </a>
        </div>
      </div>
    </div>
  )
}



export default Message;
