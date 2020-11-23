import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.jpg';
import profilenone from '../assets/img/profilenone.png';

const Chat = (chatTxt) => {
  const isQuestion = (chatTxt.type === 'question');
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  
  return(
    <ListItem className={classes}>
    <ListItemAvatar>
      {isQuestion ? (
        <Avatar alt="icon" src={NoProfile} />
        ) : (
        <Avatar alt="icon" src={profilenone} /> 
      )}
    </ListItemAvatar>
  <div className="p-chat__bubble">{chatTxt.text}</div>
  </ListItem>
  )

}

export default Chat