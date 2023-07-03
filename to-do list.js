const button= document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa () {

  minhaListaDeItens.push({
    tarefa : input.value,
    concluida : false

  })


  
  
  mostrarTarefas()

  console.log ()

}


function mostrarTarefas (){

  let novaLi= ''

  minhaListaDeItens.forEach((item, posicao )=> {

    novaLi = novaLi + `
  <li class="task ${item.concluida && 'done'}">
    <img src="./images/checked.png" alt="check" onclick =  "concluirTarefa(${posicao})" >
    <p>${item.tarefa}</p>
    <img src="./images/trash.png" alt="trash" 
    
    onclick="deletarItem(${posicao})">
  `
  })
 
  listaCompleta.innerHTML = novaLi

  localStorage.setItem('lista',JSON.stringify(minhaListaDeItens))

}
   function concluirTarefa (posicao){
    minhaListaDeItens[posicao]. concluida = !minhaListaDeItens[posicao]. concluida

    mostrarTarefas()
   }

   
   function deletarItem (posicao){
    
    minhaListaDeItens.splice(posicao,1)
   
    mostrarTarefas()

  }

  function recarregarTarefas (){
  const tarefasDoLocasStorage = localStorage.getItem('lista')

  if(tarefasDoLocasStorage){
  minhaListaDeItens = JSON.parse(tarefasDoLocasStorage)
}
 
  console.log(tarefasDoLocasStorage)

  mostrarTarefas()
  }

  recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)

