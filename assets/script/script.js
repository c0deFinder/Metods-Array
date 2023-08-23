let tareas = [{
    id: '',
    tarea: 'limpiar',
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


const listaDeTareas = document.querySelector("#listaTareas")
const tareaInput = document.querySelector("#nuevaTarea").value
const buscadorInput = document.querySelector("#buscarTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const totalTareas = document.querySelector("#totalTareas");
const eliminarBtn = document.getElementById("danger-outlined")
const checkBox = document.getElementById("flexCheckDefault")

btnAgregar.addEventListener("click", () => {
const NuevaTarea = tareaInput.value
tareas.push({id: Date.now(), tareas:NuevaTarea})
tareaInput.value = ""
renderList(tareas)
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
    <div class="form-check">
        <input class="form-check-input" type="checkbox"${tarea.done} value="" id="flexCheckDefault" id="btnBorrarTarea">
    </div>
  </td>
      <th scope="col"> <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
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
tareas.splice(index, 1)
renderList(tareas)
}

