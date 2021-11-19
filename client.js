RegisterCommand('clearchat', () => {
    emitNet('disky:clearchat'); // trigger server clearchat event
})

RegisterCommand('cc', () => {
    emitNet('disky:clearchat'); // trigger server clearchat event
})