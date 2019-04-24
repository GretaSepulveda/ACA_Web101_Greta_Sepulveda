    // choose player: X & O
    // select location on board
    // append x or o to location
    // change player 

    console.log('hello')
    
    var player
    var prevPlayer

    function selectX () {
    player = 'X'
    console.log('player:', player)
    }
    function selectO () {
        player = "O"
    }
    function setValue(el) {
    //console.log('player', player)
    if (!player) {
        alert('select a player') 
    } else if (prevPlayer === player) {

    } else {
        el.innerText = player
        prevPlayer = player
    }
}


     

  