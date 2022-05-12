/*alert("seja bem vindo");
alert("um retorno de carro\bem no meio desta linha");
alert("\"Isto nao saiu como deveria\"disse ela");
var nome=prompt("Digite seu nome aqui");
document.write("olá "+nome);
Response=confirm("será que vai chover hoje?");
var a, b;
a=5;
b= "5Kg de açucar";
document.write("<p>"+"O valor da variavel A é "+a+"</p>");
document.write("<p>"+"O valor da variavel B é "+b+"</p>");
document.write("<p>"+"O valor da variavel A dividido por 2 é "+a/2+"</p>");
document.write("<p>"+"O valor da variavel B dividido por 2 é "+b/2+"</p>");

var a, inteiro, flutuante;
a = "45.78Kg de acucar";
inteiro = parseInt(a);
flutuante = parseFloat(a);

document.write("<p>" + "O valor da variavel A é " + a + "</p>");
document.write("<p>" + "O valor numerico inteiro é " + inteiro + "</p>");
document.write("<p>" + "O valor da variavel A dividido por 2 é " + inteiro / 2 + "</p>");
document.write("<p>" + "O valor da variavel decimal é " + flutuante + "</p>");

var a, b, c;
a = "Olá pessoal!";
b = "Sejam bem vindos ao Javascript";
c = a + b;
alert(c);

a=5;
alert(++a +2); //adiciona 1 a variavel "a" antes de executar a expressao
alert("a="+a); //o resultado do alert será 8

a=5;
alert(++a +2); //adiciona 1 a variavel "a" após de executar a expressao
alert("a="+a); //o resultado do alert será 7

a=5;
b=--a+2
alert(b); //subtrai 1 a variavel "a" após de executar a expressao
alert("b="+b); //o resultado do alert será 6

a=5;
b=a-- +2
alert(b); //subtrai 1 a variavel "a" após de executar a expressao
alert("a="+b); //o resultado do alert será 7

a= 2;
b= -a; //muda o sinal de positivo para negativo
alert("b="+b);

c= -3;
d= -c; //muda o sinal de negativo para positivo 
alert("d="+d);

document.write("<p><b>"+"usando o método toUpperCase"+"</p></b>");
a=("Olá pessoal!");
b=("Sejam bem vindos ao javascript");
document.write(a.toUpperCase());
document.write(b.toUpperCase());
document.write("<p><b><br>"+"você poderá usar: "+"</p></b>");
document.write("<p>"+ a.toUpperCase()+ b.toUpperCase()+"</b>");
document.write("<p><b>"+"usando o método toLowerCase"+"</p></b>");

document.write(a.toLowerCase());
document.write(b.toLowerCase());
document.write("<p><b><br>"+"você poderá usar: "+"</p></b>");
document.write("<p>"+ a.toLowerCase()+ b.toLowerCase()+"</b>");

hoje= new Date();
xDia=hoje.getDay();
diaSemana=new Array(7);
diaSemana[0]="domingo";
diaSemana[1]="segunda";
diaSemana[2]="terça";
diaSemana[3]="quarta";
diaSemana[4]="quinta";
diaSemana[5]="sexta";
diaSemana[6]="sábado";
document.write("o numero da semana é: "+(xDia +1));
document.write("<p><b>"+"hoje é "+diaSemana[xDia]);

hoje= new Date();

pratoDiaI=hoje.getDay();

pratoDia= new Array(7);
pratoDia[0]= "frango grelhado";
pratoDia[1]= "carne cozida";
pratoDia[2]= "bisteca";
pratoDia[3]= "feijoada";
pratoDia[4]= "linguiça toscana";
pratoDia[5]= "macarronada";
pratoDia[6]= "feijoada";

pratoPreco= new Array(7);
pratoPreco[0]="R$25"
pratoPreco[1]="R$28"
pratoPreco[2]="R$32"
pratoPreco[3]="R$30"
pratoPreco[4]="R$22"
pratoPreco[5]="R$24"
pratoPreco[6]="R$33"

document.write("<b>"+"cardápio:"+"</b><br>");

for (i=0; i<=6; i++)
document.write((pratoDia[i])+":  "+(pratoPreco[i])+"<br>");


document.write("o prato de hoje é: "+(pratoDiaI +1)+":"+(pratoDia[pratoDiaI])+" "+(pratoPreco[pratoDiaI]));

diaSemana=3;
switch(diaSemana){
    case 0: document.write("Domingo");
    break;

    case 1: document.write("segunda");
    break;

    case 2: document.write("terça");
    break;

    case 3: document.write("quarta");
    break;

    case 4: document.write("quinta");
    break;

    case 5: document.write("sexta");
    break;

    case 6: document.write("sábado");
    break;

    default: alert("Dia da semana inválido!");
}*/