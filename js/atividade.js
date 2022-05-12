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