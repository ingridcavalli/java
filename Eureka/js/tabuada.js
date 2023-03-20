// Exibir a tabuada 

let tabuada = parseInt(prompt('Insira um valor: '))

for (i=0; i<=10; i++){
    oxi = i * tabuada; 
    document.write(tabuada + 'X' + i + '=' + oxi + '<br>')
}