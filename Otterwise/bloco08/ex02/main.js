window.onload = () => {
    // console.log(document.querySelectorAll("p"))
    const paragrafos = document.querySelectorAll("p")
    const paragrafo1 = paragrafos[0]
    paragrafo1.remove()
    const paragrafo2 = paragrafos[1]
    paragrafo2.innerText = "Mudado!"
    
}