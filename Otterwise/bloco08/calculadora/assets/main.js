window.onload = () => {
    const button = document.querySelector('.btn-result')
    button.addEventListener('click', () => {
        const firstNumber = parseInt(document.querySelector('#firstNumber').value)
        const secondNumber = parseInt(document.querySelector('#secondNumber').value)
        const operation = document.querySelector('#operator').value
        let result

        if(operation === 'sum') {
            result = firstNumber + secondNumber
        } else if (operation === 'sub') {
            result = firstNumber - secondNumber
        } else if (operation === 'mul') {
            result = firstNumber * secondNumber
        } else if (operation === 'div') {
            result = firstNumber / secondNumber
        } else {
            result = 'ERROR'
        }

        console.log(result)
        const resultImpression = document.querySelector('#result')
        resultImpression.innerText = result
    })
}