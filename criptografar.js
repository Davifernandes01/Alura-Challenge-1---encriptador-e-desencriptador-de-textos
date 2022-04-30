
let encriptar = document.querySelector(".inputEntrada"); // textarea para digitar
buttonEncriptar = document.querySelector(".botao01"); // botao criptografar
buttonDesencriptar = document.querySelector(".botao02"); // botao descriptografar
buttonCopiar = document.querySelector(".botao03"); // botao copiar
 resultado = document.querySelector(".inputResultado"); // textarea para receber o texto criptografado


function texto01() // a aperta o botao "criptografar", a funcao ira  receber o valor do input do ".inputEntrada" e substituir as letras " a, e, i, o , u " , por " ai, enter, imes, ober, ufat", respectivamente. a funcao ira buscar letra por letra ate ate chegar na ultima letra da string, quando acontecer irei fazer com que o resultador receba o valor da mensagem, agora com todas as letras selecionadas mudadas, e a mensagem ja "criptografada".
{
    let mensagem = encriptar.value;
    let novaMensagem1 = mensagem.replaceAll("e", "enter");
        novaMensagem2 = novaMensagem1.replaceAll("i", "imes");
        novaMensagem3 = novaMensagem2.replaceAll("a", "ai");
        novaMensagem4 = novaMensagem3.replaceAll("u", "ufat");
        novaMensagem5 = novaMensagem4.replaceAll("ober", "o")

        resultado.value = novaMensagem5;
        // resultado recebendo a string ja modificada.
}

    function desencriptar() //nessa funcao, ao apertar o botao "descriptografar", a variavel " mensagem"  ira receber o valor da string, se ela estivar ja passado pela funcao "texto01", a string estara modificada e a o funcao "desencriptar" ira trocar os o conjuto de letras " enter, imes, ai , ufat, ober", por " e, i,  a, u, o" respectivamente. assim a palavar ira " voltar ao normal". deixando ela legival novamente.
    { 
        let mensagem = encriptar.value;
        let novaMensagem1 = mensagem.replaceAll("enter", "e");
            novaMensagem2 = novaMensagem1.replaceAll("imes", "i");
            novaMensagem3 = novaMensagem2.replaceAll("ai", "a");
            novaMensagem4 = novaMensagem3.replaceAll("ufat", "u");           
            novaMensagem5 = novaMensagem4.replaceAll("ober","o");
    
            resultado.value = novaMensagem5
            //resultado recebendo o valor da string, agora legivael.
    }

    function copiarTexto() //funcao criada para que o botao "copiar" funcione como um "ctrl-c", copiando o resultado recebido da "resultado = document.querySelector(".inputResultado");"
    {
        var resposta = resultado.value;
        navigator.clipboard.writeText(resposta);
     }
        
//eventos criados ao apertar os botoes " criptografar, descritografar e copiar", respectivamente.
buttonEncriptar.addEventListener("click", texto01);
buttonDesencriptar.addEventListener("click", desencriptar);
buttonCopiar.addEventListener("click", copiarTexto) ;


