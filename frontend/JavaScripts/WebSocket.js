const socket = new WebSocket('ws://localhost:8080/websocket');
socket.addEventListener('open',(e)=> {
    console.log('connected')
    sendMessage("Hello from client");
});
socket.onmessage =(e)=>console.log(e.data);

function sendMessage(message){
    socket.send(message);
}