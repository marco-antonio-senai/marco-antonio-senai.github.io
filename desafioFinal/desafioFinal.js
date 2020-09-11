

       
function retornaMes (numero) {

       const meses = {
        1:"janeiro", 
        2:"fevereiro", 
        3:"março", 
        4:"abril",
         5:"maio", 
         6:"junho", 
         7:"julho", 
         8:"agosto", 
         9:"setembro", 
         10:"outubro", 
         11:"novembro",  
         12:"dezembro"
    }; 
    return meses [numero];
}
    function retornarEstacao (numero) {
        let estacao = "";
    switch(numero) {
        case 12:
        case 1:
        case 2:
            estacao ="verao";
            break;
        case 3:
        case 4:
        case 5:
            estacao = "outono";
            break;
        case 6:
        case 7:
        case 8:
            estacao = "inverno";
            break;
        case 9:
        case 10:
        case 11:
            estacao ="primavera";
            break;
     }
     return estacao ;

    }

    function mudarImagemEFundo(estacao) {
        const imagem = document.querySelector ("img");
        const corpo = document.querySelector("body");
        switch(estacao) {
            case "verao" :
                imagem.src = "./images/verao.jpg";
                corpo.style.backgroundcolor = 'yelow';
                break;
        
                case "outono" :
                    imagem.src = "./images/outono.jpg";
                    corpo.style.backgroundcolor = 'brown';
                    break;
        
                    case "inverno" :
                        imagem.src = "./images/inverno.png";
                        corpo.style.backgroundcolor = 'gray';
                        break;
        
        
                        case "primavera" :
                            imagem.src = "./images/primavera.jpg";
                            corpo.style.backgroundcolor = 'blue';
                            break;
        
        
            }

    }

    function escrevaNaTela(mes,estacao) {
        const visor = document.querySelector('#visor');
        visor.innerText = `O mês do ano é ${mes} e a estação é ${estacao}.`;
    }

    document.querySelector('.container').addEventListener('click',
    function (evento) {
        const numero = parseInt (evento.target.innerText);
        const mes = retornaMes(numero);
        const estacao = retornarEstacao (numero);
        mudarImagemEFundo (estacao);
        escrevaNaTela (mes,estacao);
    });