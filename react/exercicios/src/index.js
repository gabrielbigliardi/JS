import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'

// import BomDia from './componentes/BomDia'

// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome='Paulo' sobrenome='Silva'/>
            {/* Como passo componentes filhos aqui? */}
            <Filho nome='Pedro' />
            <Filho nome='Paula' />
            <Filho nome='Ana' />
        {/* </Pai> */}
    </div>
    , document.getElementById('root'))
