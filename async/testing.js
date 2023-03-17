const waitTimeMs = 100
const callback = () => {
    console.log(`I print after ${waitTimeMs} milliseconds`);
}

console.log('I print first');
setTimeout(callback, waitTimeMs);
console.log('I print second');

await sleep(waitTimeMs + 5)
function sleep(ms){
    return new Promise (resolve => setTimeout(resolve, ms))
}