class Aluno {
    constructor(nome, idade, nota) {
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;

    }
    apresentar() {
        return "Oi meu nome é " + this.nome + " tenho " + this.idade + " anos e minha nota é " + this.nota;
    }
}

var alunos = new Array(); // criação de uma lista
continuar_lista();


function continuar_lista() {
    if (localStorage.getItem("lista_alunos_js") == null) {// meu primeiro acesso salvo a lista vazia
        localStorage.setItem("lista_alunos_js", JSON.stringify(alunos));
    } else { //nos proximos acessos eu obtenho a lista e converto para objeto
        alunos = JSON.parse(localStorage.getItem("lista_alunos_js"));
        console.log("Olha o que tinha la ");
        console.log(alunos);

        alunos.forEach(
            function(item){
                escrever_linha(new Aluno(item.nome,item.idade,item.nota));
            }


        );

    }
}


$(".btn-danger").click(
    function () {
        $("input").val(""); // para limpar os campos automaticamente
    }
);

$(".btn-success").click(
    function () {
        let nome = $("#nome").val();
        let idade = Number($("#idade").val());
        let nota = Number($("#nota").val());

        let aluno_a_cadastrar = new Aluno(nome, idade, nota);
        console.log(aluno_a_cadastrar.apresentar());
        alunos.push(aluno_a_cadastrar);

        localStorage.setItem("lista_alunos_js", JSON.stringify(alunos)); // localStorage para salvar variáveis

        console.log("No momento la no localStorage tenho isso salvo " + JSON.stringify(alunos));
        $("input").val("");
        escrever_linha(aluno_a_cadastrar);


    }
);

function escrever_linha(aluno){
    let linha = tag("tr"); // <tr></tr>

    let nome= tag("td");
    nome.text(aluno.nome);

    let idade= tag("td");
    idade.text(aluno.idade);

    let nota= tag("td");
    nota.text(aluno.nota);

    linha.append(nome);
    linha.append(idade);
    linha.append(nota);
    $("#alunos").append(linha); // append adiciona no final, incrementando com o que já tem
   
}

function tag(nome){
    return $("<"+nome+"></"+nome+">");

}



