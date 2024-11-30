var listaChamados=[];

var i=0;

function adicionarChamado(){
    var chamado={};
    listaChamados[i]=chamado;
    chamado.cliente=prompt(" Digite o nome do cliente: ");
    chamado.data=prompt(" Digite a data do chamado: ");
    chamado.local=prompt(" Digite o local do chamado: ");
    chamado.descricao=prompt(" Espefique a causa do chamado: ");

};

function listarChamados(){
    for(var i=0; i<listaChamados.length;i++){
    console.log(" Nome do cliente: ", listaChamados[i].cliente);
    console.log(" Data: ", listaChamados[i].data);
    console.log(" Local: ", listaChamados[i].local);
    console.log(" Descrição: ", listaChamados[i].descricao);
  }
};

var continua = 's';
while(continua == 's'){
		var opcao = parseInt(prompt("O que deseja Fazer:\n 1- Adicionar chamado\n 2 - Listar Chamados"));
		
		if(opcao == 1){adicionarChamado();}else {listarChamados();}
		
		continua = prompt("Deseja fazer novas tarefas? Digite s para confirmar:");
    
};
 
console.log(listaChamados[i]);