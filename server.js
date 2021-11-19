onNet('disky:clearchat', () => {
    if(IsPlayerAceAllowed(source, 'disky.clearchat')){ // if the person has permission
        emitNet('chat:clear', -1); // clear serverside chat
        emitNet('chat:addMessage', -1, { // add a server chat msg
            args: ['Server', 'Chat has been cleared by staff!'],
            color: [255, 0, 0]
        })
    }else{
        emitNet('chat:addMessage', source, { // add message to client's chat if they do not have permission
            args: ['Server', 'You do not have permission to clear the chat!'],
            color: [255, 0, 0]
        })
    }
})