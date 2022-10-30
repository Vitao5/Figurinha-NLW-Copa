let isIgnite = true
function changeCard(event){
    const card = event.currentTarget
    
    const backgroundImage = isIgnite
    ? 'url(./assets/explorer.svg)' 
    : 'url(./assets/ignite.svg)'
    isIgnite = !isIgnite
    card.style.backgroundImage = backgroundImage
}