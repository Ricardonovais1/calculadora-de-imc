const calcular = document.getElementById('calcular');

//1º Botão escutando o click e chamando a função imc
//2º Criar função imc
//3º Trazer variáveis correspondentes para dentro de imc() para não ficarem globais
//4º Determinar se os campos estão preenchidos e, se não, emitir um aviso.(em imc())

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

            if (valorImc < 18.5) {
                classificacao = 'abaixo do peso.';
            } else if  (valorImc > 18.4 && valorImc < 24.9) {
                classificacao = 'no peso normal.';
            } else if  (valorImc > 25 && valorImc < 29.9) {
                classificacao = 'acima do peso.';
            } else if  (valorImc > 30 && valorImc < 34.9) {
                classificacao = 'com obesidade grau I.';
            } else if  (valorImc > 35 && valorImc < 39.9) {
                classificacao = 'com obesidade grau II.';
            } else {
                classificacao = 'com obesidade grau III.';
            } 
          
                   
        
            
            resultado.textContent = `${nome}, seu IMC é ${valorImc}, e você está ${classificacao}`;
       

    } else {
        resultado.textContent = 'Todos os campos precisam ser preenchidos';
    }

};

calcular.addEventListener('click', imc);
 