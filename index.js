const listaAlumnos = [];

function cargarAlumno() {
  const nombreAlumno = prompt('Escribir nombre completo');
  let materias = [];

  let i = 0;
  while (i < 3) {
    const materia = {
      nombreMateria: prompt('Escribir materia1'),
      notaMateria: prompt('Escribir notamateria1'),
    };

    materias.push(materia);

    i = i + 1;
  }

  const alumno = {
    nombre: nombreAlumno,
    materias,
  };
  listaAlumnos.push(alumno);
}
function mostrarLista() {
  const ul = document.getElementById('listaAlumnos');
  ul.innerHTML = '';
  for (let i = 0; i < listaAlumnos.length; i++) {
    const ulMaterias = document.createElement('ul');
    const li = document.createElement('li');
    let template = '';
    // const materias = listaAlumnos[i].materias;
    for (let j = 0; j < listaAlumnos[i].materias.length; j++) {
      template += `<li>
                      Materia:  ${listaAlumnos[i].materias[j].nombreMateria}
                      Nota:  ${listaAlumnos[i].materias[j].notaMateria}
                   </li>`;
    }
    ulMaterias.innerHTML = template;
    li.innerText = listaAlumnos[i].nombre;
    li.appendChild(ulMaterias);
    ul.appendChild(li);
  }
}
