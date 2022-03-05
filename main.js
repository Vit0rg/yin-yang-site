const more_info = document.querySelectorAll('.mostrar-mais');
const botao = document.querySelectorAll('button');

console.log(botao)

console.log(more_info);

function show_more()
{
  more_info.forEach(element => 
  {
    element.classList.toggle('invisivel');
  });

  botao.forEach(element => 
  {
    element.innerText === 'Ler menos' ?  element.innerText = 'Ler mais' : element.innerText = 'Ler menos';  
  });
}