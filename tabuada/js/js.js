function resultado(){
    let aviso = parseInt(prompt (' Qual tabuada você quer? \n \n 1 - 2 \n 2 - 3 \n 3 - 4 \n 4 - 5 \n 5 - 6 '));
    console.log(aviso);

if(aviso == 1 ){
let resultado = document.getElementById('resultado');
for(let numero = 1; numero <= 2; numero=numero+1){
    for(let multiplica = 0; multiplica <= 2; multiplica=multiplica+1){
        let multiplicacao = numero * multiplica;
        let linha = "" + numero + " * " + multiplica + " = " + multiplicacao + "<br>";
        resultado.innerHTML += (linha);
            }
        }
    }

    else if(aviso == 2 ){
    let resultado = document.getElementById('resultado');
    for(let numero = 1; numero <= 3; numero=numero+1){
        for(let multiplica = 0; multiplica <= 3; multiplica=multiplica+1){
            let multiplicacao = numero * multiplica;
            let linha = "" + numero + " * " + multiplica + " = " + multiplicacao + "<br>";
            resultado.innerHTML += (linha);
            }
        }
    }

    else if(aviso == 3 ){
        let resultado = document.getElementById('resultado');
        for(let numero = 1; numero <= 4; numero=numero+1){
            for(let multiplica = 0; multiplica <= 4; multiplica=multiplica+1){
                let multiplicacao = numero * multiplica;
                let linha = "" + numero + " * " + multiplica + " = " + multiplicacao + "<br>";
                resultado.innerHTML += (linha);
            }
        }
    }

    else if(aviso == 4 ){
        let resultado = document.getElementById('resultado');
        for(let numero = 1; numero <= 5; numero=numero+1){
            for(let multiplica = 0; multiplica <= 5; multiplica=multiplica+1){
                let multiplicacao = numero * multiplica;
                let linha = "" + numero + " * " + multiplica + " = " + multiplicacao + "<br>";
                resultado.innerHTML += (linha);
            }
        }
    }
    else if(aviso == 5 ){
        let resultado = document.getElementById('resultado');
        for(let numero = 1; numero <= 6; numero=numero+1){
            for(let multiplica = 0; multiplica <= 6; multiplica=multiplica+1){
                let multiplicacao = numero * multiplica;
                let linha = "" + numero + " * " + multiplica + " = " + multiplicacao + "<br>";
                resultado.innerHTML += (linha);
            }
        }
    }
}