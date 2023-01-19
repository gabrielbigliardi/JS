<template>
    <div id="app">
        <h1>Calculator</h1>
        <CalculatorProject />
    </div>
</template>

<script>
import CalculatorProject from './main/CalculatorProject'


export default {
    components: { CalculatorProject }
}
</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
    font-family: "RobotoMono", monospace;
}

body {
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: aliceblue;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}

</style>