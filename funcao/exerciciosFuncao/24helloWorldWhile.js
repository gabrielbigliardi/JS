function helloWorld(vezes) {
    let cont = 0
    while(cont < vezes){
        console.log(`${cont+1}: Hello World!`);
        cont++
    }
}

helloWorld(11)