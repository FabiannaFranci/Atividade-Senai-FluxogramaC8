let cont = 0;
while(cont < 100){
    let nome = window.prompt("Qual seu nome:");
    let idade = window.prompt("Qual sua idade:"); 
    if(idade >= 18){
    cont ++;
    alert("Olá, " + nome + '. Você foi cadastrado com sucesso!');
    }else{
    alert("Cadastro não poderá ser efetuado");
    }
window.alert(cont + ' nomes cadastrados até o momento!');    
}
