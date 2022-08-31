function procesarFavorito (colores) {
    let coloresFiltrados = []
    colores.forEach(element => {
        coloresFiltrados.push(element.slice(1))
        })
        return coloresFiltrados.join('')

}

export default procesarFavorito;