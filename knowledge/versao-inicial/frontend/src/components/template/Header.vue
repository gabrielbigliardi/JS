<template>
    <header class="header"></header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    .header {
        grid-area: header;
        /* background-color: linear-gradient(to right, #1e469a, #49a7c1); */
        background-color: #1e469a;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>