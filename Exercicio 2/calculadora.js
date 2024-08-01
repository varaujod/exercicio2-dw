function calcular(formulario){
    document.write(ok);
    let operacao = parseInt(formulario.operacao.selectIndex);

    let n1 = formulario.n1.value;
    let n2 = formulario.n2.value;

    let resultado;

    switch (operacao) {
        case 1:
            resultado = n1 * n2;
            break;
        
        case 2:
            resultado = n1 / n2;
            break;
        
        case 3:
            resultado = n1 + n2;
            break;

        case 4:
            resultado = n1 - n2;
            break;
    }

    document.getElementById("resultado").innerHTML = resultado;
}