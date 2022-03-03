const info = document.querySelector('.mostrar_mais');
const botao = document.querySelector('button');

function show_info()
{
  info.classList.toggle("invisivel");
  info.classList.contains('invisivel') ?  botao.innerText = 'Ler mais' : botao.innerText = 'Ler menos';  
}