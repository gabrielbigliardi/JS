window.onload = () => {

    const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        // console.log(formData)

        const num1 = parseInt(formData.get('numberOne'))
        const num2 = parseInt(formData.get('numberTwo'))
        const operation = document.getElementsByName('operation').values
        // console.log(operation)
        let result

        if (document.getElementById("sum").checked == true) {
            result = num1 + num2;
        } else if (document.getElementById("sub").checked == true) {
            result = num1 - num2;
        } else if (document.getElementById("mul").checked == true) {
            result = num1 * num2;
        } else if (document.getElementById("div").checked == true) {
            result = num1 / num2;
        } else {
            result = "ERROR";
        }

        document.querySelector('.resultado').innerHTML = `Resultado: ${result}`

    })


}