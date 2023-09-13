/*
NOME NA TELA VARIAS VEZES

var nome = prompt ("Digite o seu nome:");
x= prompt ("Quantas vezes quer que o seu nome apareça na tela?");
n=0, a=1;


while (n < x)
{
	document.write (a + " - " + nome +"<BR>");
	n = n+1;
	a++;
}

---------------------------------------------------------------------------------------------

TABUADA

// var n = 0;
// 		while(n<=10)
// 		{
// 			var n2 = 0;
// 			a=1;
// 			while(n2 <= 10)
// 		{
// 			document.write(a + " - " + n + "x" + n2 + "=" + n * n2 + "</br>");
// 			n2++;
// 			a=a+1;
// 		}
// 			document.write("</br>");
// 			n++;
			
// 	}

---------------------------------------------------------------------------------------------

Tela de LOGIN*/

var login = prompt ("LOGIN:");
var senha = parseInt (prompt ("SENHA:"));
var x=1;

while (x < 3 && login != "Rômulo" || senha != 123)
	{
		var login = prompt ("TENTE NOVAMENTE. LOGIN:");
		var senha = parseInt (prompt ("TENTE NOVAMENTE. SENHA:"));
		x++;
	}
if (login == "Rômulo" && senha == 123)
{
	document.write ("Acesso Permitido");
}
else
{
	document.write ("Acesso Negado");
}