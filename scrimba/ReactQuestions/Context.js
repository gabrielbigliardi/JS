/*

    Qual a diferença entre Context API e prop drilling?

        prop drilling é para explicitamente passar props q um component child pode receber
            no prop drilling é passado de component em component

        Context API implicitamente state o valores que child component pode receber
            com context API vc define algo no top level colocando valores no top level, e qualquer coisa dentro da arvore do elemento tem acesso a esses valores



    Quando não usar Context API?\

        não sobreusar, pode gerar mts re-renders
        usar quando muito necessario no top level da aplicação, se nao props
*/