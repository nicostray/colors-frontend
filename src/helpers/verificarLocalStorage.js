function verificarLocalStorage () {
    if(window.localStorage.getItem('favoritos') === null){
      window.localStorage.setItem('favoritos','')
    }
    return window.localStorage.getItem('favoritos')
}

export default verificarLocalStorage