let equiposPrimera = [
  "Nacional", "Millonarios", "América", "Cali", "Junior", "Santa Fe", "Tolima", "Medellín",
  "Once Caldas", "Pereira", "Alianza", "Bucaramanga", "La Equidad", "Envigado", "Pasto",
  "Águilas", "Chicó", "Fortaleza", "Llaneros", "Union Magdalena"
];

let equiposSegunda = [
  { nombre: "Real Cartagena", fuerza: 62 },
  { nombre: "Cucuta", fuerza: 62 },
  { nombre: "Huila", fuerza: 61 },
  { nombre: "Patriotas", fuerza: 61 },
  { nombre: "Leones", fuerza: 61 },
  { nombre: "Bogotá FC", fuerza: 60 },
  { nombre: "Tigres", fuerza: 60 },
  { nombre: "Quindio", fuerza: 60 },
  { nombre: "Boca Juniors", fuerza: 60 },
  { nombre: "Jaguares", fuerza: 60 },
  { nombre: "Orsomarso", fuerza: 59 },
  { nombre: "Barranquilla FC", fuerza: 59 },
  { nombre: "Atlético FC", fuerza: 58 },
  { nombre: "Real Santander", fuerza: 58 },
  { nombre: "Real Cundinamarca", fuerza: 58 },
  { nombre: "Inter Palmira", fuerza: 58 }
];

let equipos = [...equiposPrimera];

const fuerzaEquipos = {
  "Nacional": 70, "Millonarios": 69, "América": 69, "Junior": 69, "Santa Fe": 69,
  "Cali": 68, "Tolima": 67, "Medellín": 68, "Once Caldas": 67, "Pereira": 66,
  "Pasto": 66, "Bucaramanga": 66, "Alianza": 65, "La Equidad": 64, "Águilas": 64,
  "Envigado": 62, "Chicó": 62, "Fortaleza": 62, "Llaneros": 62, "Union Magdalena": 62
};


let historialPuntos = {};
let temporadaActual = 2025;
let semestreActual = 1;
let descensoPendiente = false;
let tablaAnual = {};

let campeones = [];
let tabla = [];
let grupos = { A: [], B: [] };
let finalistas = [];

let equipoUsuario = "";
let equipoJugador = "";
let ligasGanadasPorUsuario = 0;
let divisionJugador = "";
let fuerzaJugador = 0;

let equiposConsecutivos = {};  
// Guarda títulos consecutivos por equipo
let ultimoCampeon = "";// Último campeón



function seleccionarEquipo(nombreEquipo) {
    equipoUsuario = nombreEquipo;
}

function simularPartido(equipoA, equipoB) {
  const fuerzaA = fuerzaEquipos[equipoA] || equiposSegunda.find(e => e.nombre === equipoA)?.fuerza || 62;
  const fuerzaB = fuerzaEquipos[equipoB] || equiposSegunda.find(e => e.nombre === equipoB)?.fuerza || 62;
  const diferencia = fuerzaA - fuerzaB;

  const base = Math.random() * 1.5 + Math.random() * 1.5;
  const ventaja = Math.tanh(diferencia / 30);
  const ruidoA = Math.random() * 1.6 - 0.8;
  const ruidoB = Math.random() * 1.6 - 0.8;

  const golesA = Math.round(Math.max(0, base + ventaja + ruidoA));
  const golesB = Math.round(Math.max(0, base - ventaja + ruidoB));

  let puntosA = 0, puntosB = 0;
  if (golesA > golesB) puntosA = 3;
  else if (golesB > golesA) puntosB = 3;
  else puntosA = puntosB = 1;

  return { golesA, golesB, puntosA, puntosB };
}

function simularTCT() {

  if (!equipoUsuario) {
    alert("⚠️ Debes seleccionar un equipo antes de iniciar la simulación.");
    return;
  }

  resetearVista();

  tabla = equipos.map(e => ({ nombre: e, pts: 0, gf: 0, gc: 0 }));

  let partidosJugados = new Set();

for (let equipo of equipos) {
  let rivalesDisponibles = equipos.filter(e => e !== equipo);
  let rivalesSeleccionados = [];

  while (rivalesSeleccionados.length < 10 && rivalesDisponibles.length > 0) {
    let idx = Math.floor(Math.random() * rivalesDisponibles.length);
    let rival = rivalesDisponibles.splice(idx, 1)[0];

    const clave1 = `${equipo}-${rival}`;
    const clave2 = `${rival}-${equipo}`;
    if (!partidosJugados.has(clave1) && !partidosJugados.has(clave2)) {
      rivalesSeleccionados.push(rival);
      partidosJugados.add(clave1);
      partidosJugados.add(clave2);
    }
  }

  for (let rival of rivalesSeleccionados) {
    const resultado = simularPartido(equipo, rival);

    let equipoA = tabla.find(t => t.nombre === equipo);
    let equipoB = tabla.find(t => t.nombre === rival);

    equipoA.pts += resultado.puntosA;
    equipoA.gf += resultado.golesA;
    equipoA.gc += resultado.golesB;

    equipoB.pts += resultado.puntosB;
    equipoB.gf += resultado.golesB;
    equipoB.gc += resultado.golesA;
  }
}

  tabla.sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));
  mostrarTabla("tct", tabla, `Temporada ${temporadaActual} - Semestre ${semestreActual}`, true, [], false);

  // Acumular en tabla anual
  tabla.forEach(e => {
    if (!tablaAnual[e.nombre]) tablaAnual[e.nombre] = { nombre: e.nombre, pts: 0, gf: 0, gc: 0 };
    tablaAnual[e.nombre].pts += e.pts;
    tablaAnual[e.nombre].gf += e.gf;
    tablaAnual[e.nombre].gc += e.gc;
  });

  descensoPendiente = true;
}



function mostrarTabla(divId, datos, titulo, destacarTop8 = false, lideres = [], marcarDescenso = false) {
  let html = `<h2>${titulo}</h2><table><tr><th>#</th><th>Equipo</th><th>PTS</th><th>DG</th></tr>`;

  datos.forEach((t, i) => {
    let claseFila = "";
    if (divId === "segunda" && i < 2) claseFila = "ascendido";
    else if (destacarTop8 && i < 8) claseFila = "clasificado";
    else if (lideres.includes(t.nombre)) claseFila = "lider-grupo";
    else if (marcarDescenso && i >= datos.length - 2) claseFila = "descenso";

    if (t.nombre === equipoUsuario) claseFila += " mi-equipo";

    const dg = (t.gf || 0) - (t.gc || 0);
    const nombreLimpio = t.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_");
    const escudo = `<img src="escudos/${nombreLimpio}.png" alt="${t.nombre}" class="escudo">`;

    html += `<tr class="${claseFila}"><td>${i + 1}</td><td>${escudo} ${t.nombre}</td><td>${t.pts}</td><td>${dg}</td></tr>`;
  });

  html += "</table>";
  document.getElementById(divId).innerHTML = html;
}

function descenso() {
  if (!descensoPendiente) {
    alert("No hay semestre completado para hacer descenso.");
    return;
  }

  if (semestreActual < 2) {
    semestreActual++;
    alert(`✅ Fin del semestre ${semestreActual - 1}. Ahora puedes simular el segundo semestre.`);
    return;
  }

  // Calcular descenso anual
  let anual = Object.values(tablaAnual).map(e => ({
  ...e,
  pts: parseFloat((e.pts / 40).toFixed(2)) // Promedio con 2 decimales
}));
  
anual.sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));

  mostrarTabla("tct", anual, `📉 Tabla Anual - Descenso ${temporadaActual}`, false, [], true);

  const descendidos = anual.slice(-2).map(e => e.nombre);


  const tablaAscenso = simularAscenso();
  const ascendidosNombres = tablaAscenso.slice(0, 2).map(t => t.nombre);
  const ascendidos = equiposSegunda.filter(e => ascendidosNombres.includes(e.nombre));

  equipos = equipos.filter(e => !descendidos.includes(e)).concat(ascendidos.map(a => a.nombre));
  equiposSegunda = equiposSegunda
    .filter(e => !ascendidosNombres.includes(e.nombre))
    .concat(descendidos.map(nombre => ({ nombre, fuerza: 60 })));



  if (semestreActual === 1) {
  semestreActual = 2;
} else {
  semestreActual = 1;
  temporadaActual++;
}
  semestreActual = 1;
  tablaAnual = {};
  descensoPendiente = false;

   

  alert(`⬇ Descendieron: ${descendidos.join(", ")}\n⬆ Ascienden: ${ascendidos.map(e => e.nombre).join(", ")}`);


}

// Las demás funciones como simularCuadrangulares, simularFinal, mostrarPartidos, actualizarHistorial, etc.
// se mantienen igual y se pueden seguir usando sin problema.

function simularCuadrangulares() {
  const clasificados = tabla.slice(0, 8);
  grupos.A = [];
  grupos.B = [];

  clasificados.forEach((equipo, i) => {
    if (i % 2 === 0) grupos.A.push(equipo);
    else grupos.B.push(equipo);
  });

  let resultados = {};
  let partidosGrupos = { A: [], B: [] };

  const calendario = [
    // Fecha, localIndex, visitanteIndex
    [[0, 1], [2, 3]], // Fecha 1
    [[2, 0], [3, 1]], // Fecha 2
    [[1, 2], [3, 0]], // Fecha 3
    [[1, 0], [3, 2]], // Fecha 4
    [[0, 2], [1, 3]], // Fecha 5
    [[2, 1], [0, 3]]  // Fecha 6
  ];

  ["A", "B"].forEach(g => {
    const grupo = grupos[g];
    resultados[g] = grupo.map(e => ({
      nombre: e.nombre, pts: 0, gf: 0, gc: 0, pj: 0
    }));

    calendario.forEach((fechaPartidos, fechaIndex) => {
      fechaPartidos.forEach(([localIdx, visitaIdx]) => {
        const equipoLocal = grupo[localIdx].nombre;
        const equipoVisita = grupo[visitaIdx].nombre;

        const idxLocal = resultados[g].findIndex(e => e.nombre === equipoLocal);
        const idxVisita = resultados[g].findIndex(e => e.nombre === equipoVisita);

        const partido = simularPartido(equipoLocal, equipoVisita);

        resultados[g][idxLocal].pts += partido.puntosA;
        resultados[g][idxLocal].gf += partido.golesA;
        resultados[g][idxLocal].gc += partido.golesB;
        resultados[g][idxLocal].pj += 1;

        resultados[g][idxVisita].pts += partido.puntosB;
        resultados[g][idxVisita].gf += partido.golesB;
        resultados[g][idxVisita].gc += partido.golesA;
        resultados[g][idxVisita].pj += 1;

        partidosGrupos[g].push({
          fecha: fechaIndex + 1,
          local: equipoLocal,
          visitante: equipoVisita,
          golesLocal: partido.golesA,
          golesVisitante: partido.golesB
        });
      });
    });

    resultados[g].sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));
  });

  finalistas = [resultados.A[0], resultados.B[0]];

  document.getElementById("cuadrangulares").innerHTML = `
    <div class="grupos-container">
      <div class="grupo" id="grupoA"></div>
      <div class="grupo" id="grupoB"></div>
    </div>
  `;

  mostrarTabla("grupoA", resultados.A, "Grupo A", false, [resultados.A[0].nombre], false);
  mostrarTabla("grupoB", resultados.B, "Grupo B", false, [resultados.B[0].nombre], false);

  mostrarPartidos("grupoA", partidosGrupos.A);
  mostrarPartidos("grupoB", partidosGrupos.B);
}


function mostrarPartidos(id, partidos) {
  const contenedor = document.getElementById(id);

  // Agrupar partidos por fecha
  const fechas = {};
  partidos.forEach(p => {
    if (!fechas[p.fecha]) fechas[p.fecha] = [];
    fechas[p.fecha].push(p);
  });

  let html = "<h4 style='margin-top:10px;'>Resultados por Fecha:</h4>";
  for (let i = 1; i <= 6; i++) {
    if (!fechas[i]) continue;
    html += `<div class="fecha"><strong>Fecha ${i}:</strong><ul>`;
    fechas[i].forEach(p => {
      html += `<li>${p.local} ${p.golesLocal} - ${p.golesVisitante} ${p.visitante}</li>`;
    });
    html += `</ul></div>`;
  }

  contenedor.innerHTML += html;
}


function simularFinal() {
  const [equipo1, equipo2] = finalistas;
  const ida = simularPartido(equipo1.nombre, equipo2.nombre);
  const vuelta = simularPartido(equipo2.nombre, equipo1.nombre);

  const goles1 = ida.golesA + vuelta.golesB;
  const goles2 = ida.golesB + vuelta.golesA;
  const campeon = goles1 > goles2 ? equipo1.nombre : equipo2.nombre;

  // 🔊 Reproducir audio personalizado por equipo campeón
  const audiosPorEquipo = {
    "millonarios": "audios/millonarios.wav",
    "santa fe": "audios/santafe.wav",
    "nacional": "audios/nacional.wav",
    "america": "audios/america.wav",
    "cali": "audios/cali.wav",
    "junior": "audios/junior.wav",
    "medellin": "audios/dim.wav",
    "tolima": "audios/tolima.wav",
    "bucaramanga": "audios/bucaramanga.wav",
    "once caldas": "audios/oncecaldas.wav",
    // Agrega más equipos según tus audios
  };

  const claveAudio = campeon.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (audiosPorEquipo[claveAudio]) {
    const audio = new Audio(audiosPorEquipo[claveAudio]);
    audio.play();
  }

  alert(`🎉 La DIMAYOR felicita al Club: ${campeon} por ser campeón 🏆`);

  const sufijoSemestre = semestreActual === 1 ? "I" : "II";
  campeones.push(`🏆 ${temporadaActual}-${sufijoSemestre}: ${campeon}`);

  if (campeon === equipoUsuario) {
    ligasGanadasPorUsuario++;
    document.getElementById("titulos").innerText = `Títulos ganados: ${ligasGanadasPorUsuario}`;

    if (ligasGanadasPorUsuario === 13) {
      alert("🏅 ¡Felicidades! Has ganado 13 títulos y recibes el premio Gabriel Ochoa Uribe");
    }
  }

  // 🏆 Verificar títulos consecutivos de cualquier equipo
  if (campeon === ultimoCampeon) {
    equiposConsecutivos[campeon] = (equiposConsecutivos[campeon] || 1) + 1;
  } else {
    equiposConsecutivos[campeon] = 1;
  }

  // 📢 Alertas por racha consecutiva
  switch (equiposConsecutivos[campeon]) {
    case 2:
      alert(`🚨 ¡${campeon} es Bicampeón! 🏆🏆`);
      break;
    case 3:
      alert(`🚨 ¡${campeon} es Tricampeón! 🏆🏆🏆`);
      break;
    case 4:
      alert(`🚨 ¡${campeon} es Tetracampeón! 🏆🏆🏆🏆`);
      break;
    case 5:
      alert(`🚨 ¡${campeon} es Pentacampeón! 🏆🏆🏆🏆🏆`);
      break;
  }

  ultimoCampeon = campeon;



  actualizarHistorial();

  function obtenerEscudo(nombre) {
    const nombreLimpio = nombre.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ /g, "_");
    return `<img src="escudos/${nombreLimpio}.png" alt="${nombre}" class="escudo">`;
  }

  const escudo1 = obtenerEscudo(equipo1.nombre);
  const escudo2 = obtenerEscudo(equipo2.nombre);
  const escudoCampeon = obtenerEscudo(campeon);

  document.getElementById("final").innerHTML = `
    <h2>Final</h2>
    <p>${escudo1} ${equipo1.nombre} ${ida.golesA} - ${ida.golesB} ${equipo2.nombre} ${escudo2} (IDA)</p>
    <p>${escudo2} ${equipo2.nombre} ${vuelta.golesA} - ${vuelta.golesB} ${equipo1.nombre} ${escudo1} (VUELTA)</p>
    <h3>🏆 Campeón: ${escudoCampeon} ${campeon}</h3>
  `;
}



function simularAscenso() {
  let tablaAscenso = equiposSegunda.map(e => ({ nombre: e.nombre, pts: 0, gf: 0, gc: 0 }));

  for (let i = 0; i < equiposSegunda.length; i++) {
    for (let j = 0; j < equiposSegunda.length; j++) {
      if (i !== j) {
        const equipoLocal = equiposSegunda[i].nombre;
        const equipoVisita = equiposSegunda[j].nombre;

        const { golesA, golesB, puntosA, puntosB } = simularPartido(equipoLocal, equipoVisita);

        const equipoA = tablaAscenso.find(t => t.nombre === equipoLocal);
        const equipoB = tablaAscenso.find(t => t.nombre === equipoVisita);

        equipoA.pts += puntosA; equipoA.gf += golesA; equipoA.gc += golesB;
        equipoB.pts += puntosB; equipoB.gf += golesB; equipoB.gc += golesA;
      }
    }
  }

  tablaAscenso.sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));
  mostrarTabla("segunda", tablaAscenso, `Segunda División - Temporada ${temporadaActual}`, false, tablaAscenso.slice(0, 2).map(t => t.nombre));
  return tablaAscenso;
}

function actualizarHistorial() {
  const lista = document.getElementById("listaHistorial");
  lista.innerHTML = "";

  campeones.forEach(c => {
    // Extraemos el nombre del campeón
    const partes = c.split(": ");
    const temporada = partes[0];
    const nombreCampeon = partes[1];

    const nombreLimpio = nombreCampeon.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ /g, "_");

    const escudo = `<img src="escudos/${nombreLimpio}.png" alt="${nombreCampeon}" class="escudo">`;

    const li = document.createElement("li");
    li.innerHTML = `${temporada}: ${escudo} ${nombreCampeon}`;
    lista.appendChild(li);
  });
}

function resetearVista() {
  document.getElementById("tct").innerHTML = "";
  document.getElementById("cuadrangulares").innerHTML = "";
  document.getElementById("final").innerHTML = "";
  document.getElementById("segunda").innerHTML = "";
  tabla = []; grupos = { A: [], B: [] }; finalistas = [];
}

function resetearTotal() {
  resetearVista();
  campeones.length = 0;
  temporadaActual = 2025;
  semestreActual = 1;
  historialPuntos = {};
  descensoPendiente = false;
  equipoUsuario = "";
  entrenador = "";
  objetivosTemporada = [];
  document.getElementById("equipoUsuario").value = "";
  document.getElementById("entrenador").value = "";
  document.getElementById("resultado").value = "";
  actualizarHistorial();
  document.getElementById("botones").style.display = "block";
}

function inicializarSelectorEquipos() {
  const select = document.getElementById("equipoUsuario");
  const todos = [...equiposPrimera, ...equiposSegunda.map(e => e.nombre)];

  todos.forEach(nombre => {
    const option = document.createElement("option");
    option.value = nombre;
    option.textContent = nombre;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    equipoUsuario = select.value;
    equipoJugador = equipoUsuario;

    if (equiposPrimera.includes(equipoUsuario)) {
      divisionJugador = "Primera";
      fuerzaJugador = fuerzaEquipos[equipoUsuario];
    } else {
      divisionJugador = "Segunda";
      fuerzaJugador = equiposSegunda.find(e => e.nombre === equipoUsuario)?.fuerza || 62;

    }

    
  });
}

window.onload = () => {
  inicializarSelectorEquipos();
};