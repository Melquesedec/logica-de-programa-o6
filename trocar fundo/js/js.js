function enviar(){
    let caixa2 = parseInt(document.getElementById('caixa2').value);
    let caixa1 = document.getElementById('caixa1');
    console.log(caixa2)
        if(caixa2 === 0){
        caixa1.style.background = 'blue'
        caixa1.style.color = 'white'
        }
        else if(caixa2 === 1){       
        caixa1.style.background = 'pink'
        caixa1.style.color = 'white'
        }
    }