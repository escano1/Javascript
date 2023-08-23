class Servicio {
  constructor(nombre, costo) {
      this.nombre = nombre;
      this.costo = costo;
  }
}
Servicio.lista = [];


function calcularServicio() {
 
  const lista_servicios = ["Instalacion_electrica", "Mantenimiento", "Diseño"];

  let instalacion_electrica = 0;
  let mantenimiento = 0;
  let diseño = 0;

  let checkboxInstalacion = document.getElementById("instalacion");
  let checkboxMantenimiento = document.getElementById("mantenimiento");
  let checkboxDiseno = document.getElementById("diseno");

  if (checkboxInstalacion.checked) {
      let mt2_instalacion = parseFloat(document.getElementById("mt2_instalacion").value);
      instalacion_electrica = mt2_instalacion * 80000;
  }

  if (checkboxMantenimiento.checked) {
      let medidores = parseInt(document.getElementById("medidores").value);
      mantenimiento = medidores * 50000;
  }

  if (checkboxDiseno.checked) {
      let mt2_diseño = parseFloat(document.getElementById("mt2_diseno").value);
      diseño = mt2_diseño * 10000;
  }

  let servicio1 = new Servicio("Instalacion electrica", instalacion_electrica);
  let servicio2 = new Servicio("Mantenimiento", mantenimiento);
  let servicio3 = new Servicio("Diseño", diseño);

  Servicio.lista = [servicio1, servicio2, servicio3];

  let resultadosTable = document.querySelector("#resultados table");
  resultadosTable.innerHTML = `
      <tr>
          <th>Servicio</th>
          <th>Costo</th>
      </tr>
      <tr>
          <td>${servicio1.nombre}</td>
          <td>${servicio1.costo}</td>
      </tr>
      <tr>
          <td>${servicio2.nombre}</td>
          <td>${servicio2.costo}</td>
      </tr>
      <tr>
          <td>${servicio3.nombre}</td>
          <td>${servicio3.costo}</td>
      </tr>
  `;
  localStorage.setItem('servicios', JSON.stringify(Servicio.lista));

}

function mostrarInputs() {
  let inputInstalacion = document.getElementById("inputInstalacion");
  let inputMantenimiento = document.getElementById("inputMantenimiento");
  let inputDiseno = document.getElementById("inputDiseno");

  if (checkboxInstalacion.checked) {
      inputInstalacion.style.display = "block";
  } else {
      inputInstalacion.style.display = "none";
  }

  if (checkboxMantenimiento.checked) {
      inputMantenimiento.style.display = "block";
  } else {
      inputMantenimiento.style.display = "none";
  }

  if (checkboxDiseno.checked) {
      inputDiseno.style.display = "block";
  } else {
      inputDiseno.style.display = "none";
  }
}

function mostrarResultados() {
  let resultadosTable = document.querySelector("#resultados table");
  resultadosTable.innerHTML = `
      <tr>
          <th>Servicio</th>
          <th>Costo</th>
      </tr>
      ${Servicio.lista.map(servicio => `
          <tr>
              <td>${servicio.nombre}</td>
              <td>${servicio.costo}</td>
          </tr>
      `).join('')}
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('servicios')) {
      Servicio.lista = JSON.parse(localStorage.getItem('servicios'));
      mostrarResultados();
  }
});

Servicio.lista = [];

let checkboxInstalacion = document.getElementById("instalacion");
let checkboxMantenimiento = document.getElementById("mantenimiento");
let checkboxDiseno = document.getElementById("diseno");

checkboxInstalacion.addEventListener("change", mostrarInputs);
checkboxMantenimiento.addEventListener("change", mostrarInputs);
checkboxDiseno.addEventListener("change", mostrarInputs);