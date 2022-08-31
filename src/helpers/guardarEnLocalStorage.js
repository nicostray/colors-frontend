import procesarFavorito from "./procesarFavorito"
import toastNotify from "./toastNotify"

function guardarEnLocalStorage (favorito) {
    const favoritoProcesado = procesarFavorito(favorito)
    const favoritosActuales = window.localStorage.getItem('favoritos') || ''
    favoritosActuales === '' ?
    window.localStorage.setItem('favoritos', favoritoProcesado) :
    window.localStorage.setItem('favoritos', `${favoritosActuales},${favoritoProcesado}`)
    toastNotify('Guardado en favoritos ⭐', "favorito")
}

export default guardarEnLocalStorage