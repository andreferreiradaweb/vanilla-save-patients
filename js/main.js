var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';


var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');

    var imc = tdPeso.textContent / ( tdAltura.textContent * tdAltura.textContent );
    var tdImc = paciente.querySelector('.info-imc');
    tdImc.textContent = imc.toFixed(2);

    var pesoValido = true;
    var alturaValida = true;


    if(tdPeso.textContent <= 0 || tdPeso.textContent >= 200){
        tdImc.textContent = 'Peso incorreto!';
        paciente.classList.add('paciente-invalido');
    }
    if(tdAltura.textContent <= 1.00 || tdAltura.textContent >= 2.00){
        tdImc.textContent = 'Altura incorreta!';
        paciente.classList.add('paciente-invalido');
    }

}

var adicionar = document.querySelector('#adicionar-paciente');
adicionar.addEventListener('click', function(event){
    event.preventDefault();

    console.log('Paciente adicionado!');

    var form = document.querySelector('#form-adiciona');

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);



});




// meu metodo que deu merda!
// tdPeso.textContent <= 0 || tdPeso.textContent >= 200 ? pesoValido = false : console.log('Peso inválido!');
// tdAltura.textContent <= 1.00 || tdAltura.textContent >= 2.00 ? alturaValida = false : console.log('Altura inválido!');

// pesoValido === true ? tdImc.textContent = imc : tdImc.textContent = 'Peso Inválido!';
// AlturaValida === true ? tdImc.textContent = imc : tdImc.textContent = 'Altura Inválida!';
