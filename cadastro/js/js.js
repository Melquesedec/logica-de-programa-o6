function enviar(){
    let aluno1 = parseFloat(document.getElementById('aluno1').value);
    let aluno2 = parseFloat(document.getElementById('aluno2').value);
    let media = (aluno1 + aluno2) / 2
    let resultado = document.getElementById('resultado')
       
        resultado.innerHTML=(`${media}`)
}