 // classificação de triangulos
 let ladoA = parseInt(prompt('Informe o lado 1: '));
 let ladoB = parseInt(prompt('Informe o lado 2: '));
 let ladoC = parseInt(prompt('Informe o lado 3: '));

 if (ladoA <= ladoB + ladoC &&
     ladoB <= ladoA + ladoC && 
     ladoC <= ladoA + ladoB) {
         if (ladoA == ladoB && ladoC) {
            document.write('Isso é um triângulo equilátero!!');
            document.write('<img src="images/equilatero.png" alt="Sumiu"  title="Isso é um triângulo equilátero">');
         }
         else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
            document.write('Isso é um triângulo Isóceles!!');
            document.write('<img src="images/isosceles.png" alt="Sumiu"  title="Isso é um triângulo isóceles">');
         }
        else {
            document.write('Isso é um triângulo Escaleno!!');
            document.write('<img src="images/escaleno.png" alt="Sumiu"  title="Isso é um triângulo isóceles">');
        }

         }
     
     else {
        document.write('Não é triangulo!!');
        document.write('<img src="images/erro.jpeg" alt="Deu errado" title"Isto é um erro"> ')
    }