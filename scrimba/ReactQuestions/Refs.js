/*

    Qual a diferença entre refs e state variables?

        são objetos que podem conter valores
        state variables são algo que podem engatilhar uma re-rendering
        refs tem valor que permanece atraves de renders, hold on to something


    When are the best times to use refs?

        not many. when library author
            managing focus or media
            triggering animations
            integrating with dom libraries


    Qual é o jeito proprio de atualizar uma ref em um function component?

        quse sempre usa useEffect

*/