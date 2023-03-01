// Arquivo SASS
import './scss/index.scss'

//Dependencias
import 'jquery'
import 'bootstrap'

//Meus arquivos JS
import './js/core/includes'


console.log('hello from webpack dev server')

const hi = name => {
    console.log(`Hi, ${name}`)
}

hi('Jumba')