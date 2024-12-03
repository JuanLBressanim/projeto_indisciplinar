var listaChamados=[];

var i=0;

function adicionarChamado(){
    var chamado=[];
    listaChamados[i]=chamado;
    listaChamados[i]=encerrado;    
    chamado.nome=prompt(" Digite o nome do cliente: ");
    chamado.dataChamado=prompt(" Digite a data do chamado: ");
    chamado.dataResolucao=prompt(" Digite a data em que foi resolvido: ");
    chamado.local=prompt(" Digite o local do chamado: ");
    chamado.descricao=prompt(" Espefique a causa do chamado: ");
    chamado.resolucao=prompt(" Digite a forma em que foi resolvido o chamado:");
    i++;
};

function listarChamados(){
    for(var i=0; i<listaChamados.length;i++){
      console.log("\n      CHAMADO:        \n")
      console.log(" Nome do cliente: ", listaChamados[i].nome);
      console.log(" Data: ", listaChamados[i].dataChamado);
      console.log(" Local: ", listaChamados[i].local);
      console.log(" Descrição: ", listaChamados[i].descricao);

  };
};

function fechamento(){
  for(var i=0; i<listaChamados.length;i++){
    console.log("\n      RESOLUÇÃO:        \n")
    console.log(" Data da resolção: ", listaChamados[i].dataResolucao);
    console.log(" Resolução final: ", listaChamados[i].resolucao);
    
 };
};

i=0;

var continua='s';
while(continua=='s'){
		var opcao=parseInt(prompt("O que deseja Fazer:\n 1- Adicionar chamado\n 2 - Listar Chamados:\n 3 - Resposta: "));
		
		if(opcao==1){adicionarChamado();}else{listarChamados();}
    if(opcao==3){fechamento();} 
		
		continua=prompt("Deseja fazer novas tarefas? Digite s para confirmar:");
};

