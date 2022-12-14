import React from 'react'
import messagesStyle from './Messages.module.css'
import Message from "./Message/Message";
import MessageItem from "./MessageItem/MessageItem";
import {MessagesPageType} from '../../redux/state'

type MessagesType = {
    messagesPageState: MessagesPageType
}

const Messages = (props: MessagesType) => {

    let messagesItemDataElements = props.messagesPageState.companionsData.map(companion => <MessageItem id={companion.id} name={companion.name}/>);
    let messageDataElements = props.messagesPageState.messageData.map(messageContent => <Message message={messageContent.message}/>)

    return (
        <div className={messagesStyle.messages}>
            <div className={messagesStyle.messagesItems}>
                {messagesItemDataElements}
            </div>
            <div className={messagesStyle.messagesContent}>
                {messageDataElements}
            </div>
        </div>
    )
}

export default Messages
