
import React, {useState, useEffect} from 'react'
const ws = new WebSocket(`wss://social-network.samuraijs.com/handlers/ChatHandler.ashx`)
console.log(ws.message)
 const Chat = () => {
    
return <div>
<Messages />
<Addmessage />
</div>
}
export default Chat

const Messages = () => {
   const [messages, setMessages] = useState([]);
    useEffect (() => {ws.addEventListener('message', (e)=>{
        let newMessages = JSON.parse(e.data)
        setMessages((prevMessages) => [...prevMessages, ...newMessages])})},[])
    return <div style={{height: `400px`, overflow: 'auto'}}>
    {messages.map((m) => <Massage message={m}/>)}  
    
    </div>
}
const Massage = ({message}) => {
    return <div>
    <img src = {message.photo}/><br/>
    {message.userName}<br/>
    {message.message}
    <hr/>
    </div>
}

const Addmessage = () => {
    const [message2, setMessages2] = useState('');
    
const sendMessage =() => {
if (!message2) {return;}
ws.send(message2)
setMessages2('')
}
    return <div>
    <textarea onChange={(e) => {setMessages2(e.currentTarget.value)}} value={message2}></textarea>
    <div>
    <button onClick={sendMessage}>Добавить</button>
    </div>
    </div>
}