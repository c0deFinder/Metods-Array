
/*
let tareas = [{
    id: '',
    tarea: '',
    done: false,
    prioridad: 1
  },
  {
    id: 2,
    tarea: 'planchar',
    done: false,
    prioridad: 2
  },
  {
    id: 3,
    tarea: 'barrer',
    done: false,
    prioridad: 3
  }];
*/

const listaDeTareas = document.querySelector("#listaTareas")
const tareaInput = document.querySelector("#nuevaTarea")
const buscadorInput = document.querySelector("#buscarTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const prioridades = document.getElementById("NumTarea")
const totalTareas = document.querySelector("#totalTareas");
const eliminarBtn = document.getElementById("danger-outlined")
const btnSuccess = document.getElementById("btnSuccess")
const realizadas = document.getElementById("tareasRealizadas")
let checks = document.querySelectorAll("flexCheckDefault")
var contador = 0;
let tareas = []

btnAgregar.addEventListener("click", () => {

if (tareaInput.value == 0 || tareaInput.value == '') {
  alert('Debe rellerar el campo con datos válidos');
} else {
  
  const NuevaTarea = tareaInput.value
  tareas.push({id: Date.now(), tarea:NuevaTarea})
  tareaInput.value = ""
  renderList(tareas)

  tareas.forEach(function(x) {
    NumTarea.textContent = `${tareas.length} `
console.log(NumTarea)
    console.log(x);
    }
    );
}

});

function renderList(tareas){
let html = ""
for (let tarea of tareas) {
html += `
<tr>
  <th scope="row" id="NumTarea">${tarea.prioridad}</th>
  <td scope="row" class="table" id="tarea">${tarea.tarea}</td>
  <td scope="row" id="idTareas">${tarea.id}</td>
  <td scope="row">
  <button type="button" id="btnSuccess" onclick="printClick()" class="btn btn-success"><i class="fa-solid fa-check"></i></button>

  </td>
      <th scope="col"> <input type="radio" class="btn-check" name="options-outlined" id="btnCheckBox"  id="danger-outlined" autocomplete="off">
        <label class="btn btn-outline-danger" for="danger-outlined"><i class="fa-solid fa-xmark" onclick="borrar(${tarea.id})"></i></label>
      </th>
  </td>
</tr>
`;
}
listaDeTareas.innerHTML = html;
totalTareas.textContent = `
${tareas.length}
`
}

function borrar(id){
const index = tareas.findIndex((ele) => ele.id == id)
contador--
tareasRealizadas.innerHTML = contador
tareas.splice(index, 1)
renderList(tareas)
}

const ModificarEstado = (idTarea) => {
  const index = tareas.findIndex((tarea)=> tarea.id == idTarea);
  tareas[index].completado = !tareas[index].completado;
renderList();
  console.log(ModificarEstado)
}

function printClick(){
contador++
tareasRealizadas.innerHTML = + contador
  
  alert('tarea realizada');
     
}






