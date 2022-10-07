console.log("bloco é definido a partir de um par de chaves { ... }");

{
    console.log("Passo #01");
    console.log("Passo #02");
    console.log("Passo #03");
}
{
    console.log("Passo #04");
    console.log("Passo #05");
}                               //dois blocos ^^
{
    {
        {console.log("Fim!!");}
    }
}