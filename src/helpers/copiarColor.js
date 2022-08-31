import toastNotify from "./toastNotify"

const copiarColor = (color) => {
    navigator.clipboard.writeText(color)
    toastNotify(`Copiado al portapapeles 📋`, "copiado")
}

export default copiarColor