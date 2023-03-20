// Escolher a página que quiser 
let entrada = parseInt(prompt('Informe a opção 1 a 3: '));

switch(entrada) {
    case 1: 
       location.href = 'pages/pagina1.html';
       
       break;

    case 2: 
       location.href = 'pages/pagina2.html';
       break;

    case 3: 
       location.href = 'pages/pagina3.html';
       break;
    default: 
       location.href = 'index2.html';
       break;
}
