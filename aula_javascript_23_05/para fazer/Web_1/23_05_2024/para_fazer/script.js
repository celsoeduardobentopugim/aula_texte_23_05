const formulario =document.querySelector("#formulario_aluno");
formulario.addEventListener("submit", function(event){
    event.preventDefault();

    let Nome =document.querySelector("#nome").value;
    let Nota1 =parseFloat(document.querySelector("#nota1").value);
    let Nota2 =parseFloat(document.querySelector("#nota2").value);
    let Nota3 =parseFloat(document.querySelector("#nota3").value);
    let Nota4 =parseFloat(document.querySelector("#nota4").value);


    let media = (Nota1 + Nota2 + Nota3 + Nota4)/4
    let tabela= document.querySelector("#corpo_tabela");
    let linha_tabela =tabela.insertRow();

    let celulaNome= linha_tabela.insertCell(0);
    let celulaNota1 = linha_tabela.insertCell(1);
    let celulaNota2 = linha_tabela.insertCell(2);
    let celulaNota3 = linha_tabela.insertCell(3);
    let celulaNota4 = linha_tabela.insertCell(4);
    let celulaMedia= linha_tabela.insertCell(5);

    celulaNome.innerHTML = Nome;
    celulaNota1.innerHTML = Nota1;
    celulaNota2.innerHTML =Nota2;
    celulaNota3.innerHTML = Nota3;
    celulaNota4.innerHTML = Nota4;
    celulaMedia.innerHTML = media.toFixed(2);


    document.querySelector("#formulario_aluno").reset ();

});




