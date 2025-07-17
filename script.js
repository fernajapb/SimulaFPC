let equiposPrimera = [
  "Nacional", "Millonarios", "América", "Cali", "Junior", "Santa Fe", "Tolima", "Medellín",
  "Once Caldas", "Pereira", "Alianza", "Bucaramanga", "La Equidad", "Envigado", "Pasto",
  "Águilas", "Chico", "Fortaleza", "Llaneros", "Union M."
];
;
let equiposSegunda = [
  { nombre: "Jaguares", fuerza: 63 },
  { nombre: "Real Cartagena", fuerza: 63 },
  { nombre: "Cucuta", fuerza: 63 },
  { nombre: "Huila", fuerza: 62 },
  { nombre: "Patriotas", fuerza: 62 },
  { nombre: "Real Cundinamarca", fuerza: 61 },
  { nombre: "Inter Palmira", fuerza: 61 },
  { nombre: "Leones", fuerza: 59 },
  { nombre: "Tigres", fuerza: 59 },
  { nombre: "Quindio", fuerza: 59 },
  { nombre: "Real Santander", fuerza: 58 },
  { nombre: "Orsomarso", fuerza: 58 },
  { nombre: "Boca Juniors", fuerza: 57 },
  {nombre: "Barranquilla FC", fuerza: 57 },
  {nombre: "Atlético FC", fuerza: 57 },
  { nombre: "Bogotá FC", fuerza: 56 }
  
];

let equipos = [...equiposPrimera];

const fuerzaEquipos = {
  "Nacional": 70, 
  "Millonarios": 69, 
  "América": 69, 
  "Junior": 69, 
  "Santa Fe": 69,
  "Cali": 68, 
  "Medellín": 68, 
  "Tolima": 67, 
  "Once Caldas": 67, 
  "Pereira": 66,
  "Pasto": 66, 
  "Bucaramanga": 66, 
  "Alianza": 65, 
  "La Equidad": 64,
  "Aguilas": 64,
  "Fortaleza": 63, 
  "Llaneros": 63, 
  "Union M.": 63,
  "Chico": 63,
  "Envigado": 63
   
};

// Recuperar el nombre del presidente
const nombrePresidente = localStorage.getItem("nombrePresidente") || "Presidente";

// Mostrarlo en pantalla si tienes un contenedor
const encabezado = document.getElementById("nombrePresidenteMostrar");
if (encabezado) {
  encabezado.textContent = `👔 Bienvenido, ${nombrePresidente}`;
}




const plantillasJugadores = {
  "Nacional": [
    { nombre: "D.Ospina", edad: 36, media: 73, posicion: "Portero" },
    { nombre: "W.Tesillo", edad: 35, media: 72, posicion: "Defensa" },
    { nombre: "A.Roman", edad: 29, media: 70, posicion: "Defensa" },
    { nombre: "A.Morelos", edad: 29, media: 71, posicion: "Delantero" },
    { nombre: "E.Cardona", edad: 32, media: 72, posicion: "Volante" },
    { nombre: "M.Hinestroza", edad: 23, media: 73, posicion: "Delantero" },
    { nombre: "M.Uribe", edad: 34, media: 72, posicion: "Volante" }
  ],
  "Millonarios": [
    { nombre: "G.de Amores", edad: 30, media: 67, posicion: "Portero" },
    { nombre: "A.Llinás", edad: 27, media: 72, posicion: "Defensa" },
    { nombre: "D.Mackalister", edad: 38, media: 70, posicion: "Volante" },
    { nombre: "Leo Castro", edad: 33, media: 72, posicion: "Delantero" },
    { nombre: "N.Arevalo", edad: 22, media: 67, posicion: "Volante" },
    { nombre: "S.Mosquera", edad: 31, media: 69, posicion: "Defensa" },
    { nombre: "D.Ruiz", edad: 23, media: 70, posicion: "Delantero" }
  ],
  "América": [
    { nombre: "J.Soto", edad: 31, media: 69, posicion: "Portero" },
    { nombre: "N.Bocanegra", edad: 38, media: 70, posicion: "Defensa" },
    { nombre: "R.Holgado", edad: 30, media: 70, posicion: "Delantero" },
    { nombre: "C.Barrios", edad: 27, media: 71, posicion: "Volante" },
    { nombre: "F.Leys", edad: 31, media: 65, posicion: "Volante" },
    { nombre: "J.Murillo", edad: 29, media: 72, posicion: "Delantero" },
    { nombre: "C.Tovar", edad: 27, media: 67, posicion: "Defensa" }
  ],
   "Junior": [
    { nombre: "M.Silveira", edad: 25, media: 71, posicion: "Portero" },
    { nombre: "L.Monzon", edad: 24, media: 73, posicion: "Defensa" },
    { nombre: "G.Paiva", edad: 27, media: 70, posicion: "Delantero" },
    { nombre: "T.Gutierrez", edad: 40, media: 69, posicion: "Delantero" },
    { nombre: "Y.Chara", edad: 34, media: 71, posicion: "Volante" },
     { nombre: "J.Baez", edad: 35, media: 69, posicion: "Defensa" },
    { nombre: "D.Moreno", edad: 33, media: 68, posicion: "Volante" }
  ],
  "Santa Fe": [
    { nombre: "A.Marmolejo", edad: 33, media: 73, posicion: "Portero" },
    { nombre: "V.Moreno", edad: 30, media: 70, posicion: "Defensa" },
    { nombre: "H.Rodallega", edad: 40, media: 70, posicion: "Delantero" },
    { nombre: "O.Frasica", edad: 32, media: 69, posicion: "Delantero" },
    { nombre: "Y.Velasquez", edad: 25, media: 68, posicion: "Volante" },
    { nombre: "I.Scarpeta", edad: 29, media: 67, posicion: "Defensa" },
    { nombre: "D.Torres", edad: 35, media: 68, posicion: "Volante" }
  ],
   "Cali": [
    { nombre: "A.Rodriguez", edad: 24, media: 69, posicion: "Portero" },
    { nombre: "G.Corujo", edad: 28, media: 68, posicion: "Defensa" },
    { nombre: "A.Estupiñan", edad: 31, media: 70, posicion: "Delantero" },
    { nombre: "A.Colorado", edad: 26, media: 71, posicion: "Volante" },
    { nombre: "Y.Gordillo", edad: 33, media: 69, posicion: "Volante" },
    { nombre: "J.Cabal", edad: 21, media: 63, posicion: "Delantero" },
    { nombre: "F.Aguilar", edad: 32, media: 66, posicion: "Defensa" }
  ],
  "Medellín": [
    { nombre: "W.Aguerre", edad: 32, media: 71, posicion: "Portero" },
    { nombre: "J.Ortiz", edad: 26, media: 68, posicion: "Defensa" },
    { nombre: "J.Valencia", edad: 25, media: 67, posicion: "Delantero" },
    { nombre: "H.Martinez", edad: 27, media: 67, posicion: "Volante" },
    { nombre: "L.Berrio", edad: 27, media: 67, posicion: "Volante" },
    { nombre: "F.Fydrizewski", edad: 32, media: 68, posicion: "Delantero" },
    { nombre: "D.Londoño", edad: 30, media: 67, posicion: "Defensa" }
  ],
  "Tolima": [
    { nombre: "C.Fiermarin", edad: 27, media: 71, posicion: "Portero" },
    { nombre: "M.Torres", edad: 29, media: 68, posicion: "Defensa" },
    { nombre: "G.Lencina", edad: 27, media: 70, posicion: "Delantero" },
    { nombre: "A.Parra", edad: 28, media: 65, posicion: "Delantero" },
    { nombre: "J.Nieto", edad: 32, media: 68, posicion: "Volante" },
    { nombre: "A.Angulo", edad: 29, media: 66, posicion: "Defensa" },
    { nombre: "J.Quiñonez", edad: 24, media: 67, posicion: "Volante" }
  ],
  "Once Caldas": [
    { nombre: "J.Aguirre", edad: 33, media: 66, posicion: "Portero" },
    { nombre: "J.Castaño", edad: 26, media: 67, posicion: "Defensa" },
    { nombre: "D.Moreno", edad: 39, media: 70, posicion: "Delantero" },
    { nombre: "A.Garcia", edad: 24, media: 64, posicion: "Volante" },
    { nombre: "Niche Sanchez", edad: 24, media: 69, posicion: "Volante" },
    { nombre: "K.Cuesta", edad: 25, media: 65, posicion: "Defensa" },
    { nombre: "M.Barrios", edad: 34, media: 66, posicion: "Delantero" }
  ],
  "Pereira": [
    { nombre: "S.Ichazo", edad: 33, media: 68, posicion: "Portero" },
    { nombre: "J.Moya", edad: 32, media: 68, posicion: "Defensa" },
    { nombre: "J.S.Quintero", edad: 30, media: 69, posicion: "Defensa" },
    { nombre: "Marco Perez", edad: 34, media: 70, posicion: "Delantero" },
    { nombre: "Darwin Quintero", edad: 37, media: 72, posicion: "Volante" },
    { nombre: "G.Torres", edad: 29, media: 67, posicion: "Delantero" },
    { nombre: "V.Mejia", edad: 32, media: 66, posicion: "Volante" }
  ],
  "Pasto": [
    { nombre: "D.Martinez", edad: 35, media: 64, posicion: "Portero" },
    { nombre: "N.Gil", edad: 28, media: 65, posicion: "Defensa" },
    { nombre: "F.Bone", edad: 29, media: 70, posicion: "Delantero" },
    { nombre: "F.Jaramillo", edad: 29, media: 67, posicion: "Volante" },
    { nombre: "J.Rivas", edad: 28, media: 66, posicion: "Delantero" },
    { nombre: "J.Ossa", edad: 27, media: 66, posicion: "Defensa" },
    { nombre: "K.Rendon", edad: 32, media: 66, posicion: "Volante" }
  ],
  "Bucaramanga": [
    { nombre: "A.Quintana", edad: 30, media: 72, posicion: "Portero" },
    { nombre: "J.Mena", edad: 36, media: 68, posicion: "Defensa" },
    { nombre: "L.Pons", edad: 35, media: 71, posicion: "Delantero" },
    { nombre: "F.Sambueza", edad: 36, media: 71, posicion: "Volante" },
    { nombre: "F.Castro", edad: 33, media: 69, posicion: "Volante" },
    { nombre: "C.de las Salas", edad: 27, media: 65, posicion: "Defensa" },
    { nombre: "J.Vasquez", edad: 30, media: 66, posicion: "Delantero" }
  ],
  "Alianza": [
    { nombre: "J.Chaverra", edad: 34, media: 66, posicion: "Portero" },
    { nombre: "P.Franco", edad: 34, media: 66, posicion: "Defensa" },
    { nombre: "J.Figueroa", edad: 29, media: 66, posicion: "Defensa" },
    { nombre: "R.Manjarrez", edad: 25, media: 67, posicion: "Volante" },
    { nombre: "F.Pardo", edad: 34, media: 69, posicion: "Delantero" },
    { nombre: "A.del Valle", edad: 36, media: 66, posicion: "Delantero" },
    { nombre: "W.Fernandez", edad: 27, media: 65, posicion: "Volante" }
  ],
  "La Equidad": [
    { nombre: "E.Esteban", edad: 25, media: 68, posicion: "Portero" },
    { nombre: "D.Polanco", edad: 26, media: 66, posicion: "Defensa" },
    { nombre: "J.Valencia", edad: 21, media: 66, posicion: "Delantero" },
    { nombre: "J.Castilla", edad: 20, media: 71, posicion: "Volante" },
    { nombre: "J.Colorado", edad: 24, media: 67, posicion: "Volante" },
    { nombre: "C.Vivas", edad: 23, media: 67, posicion: "Defensa" },
    { nombre: "K.Parra", edad: 22, media: 66, posicion: "Delantero" }
  ],
  "Águilas": [
    { nombre: "W.Fariñez", edad: 27, media: 68, posicion: "Portero" },
    { nombre: "D.Hernandez", edad: 25, media: 65, posicion: "Defensa" },
    { nombre: "W.Morelo", edad: 38, media: 68, posicion: "Delantero" },
    { nombre: "J.Pineda", edad: 27, media: 67, posicion: "Volante" },
    { nombre: "Y.Gonzalez", edad: 30, media: 69, posicion: "Delantero" },
    { nombre: "S.Rodriguez", edad: 24, media: 65, posicion: "Defensa" },
    { nombre: "F.Lozano", edad: 31, media: 67, posicion: "Volante" }
  ],
  "Fortaleza": [
    { nombre: "J.Garcia", edad: 20, media: 64, posicion: "Portero" },
    { nombre: "Y.Diaz", edad: 27, media: 65, posicion: "Defensa" },
    { nombre: "Emilio A.", edad: 19, media: 65, posicion: "Delantero" },
    { nombre: "A.Ricaurte", edad: 33, media: 67, posicion: "Volante" },
    { nombre: "L.Pico", edad: 33, media: 67, posicion: "Volante" },
    { nombre: "J.Marulanda", edad: 29, media: 66, posicion: "Defensa" },
    { nombre: "A.Amaya", edad: 24, media: 65, posicion: "Delantero" }
  ],
  "Llaneros": [
    { nombre: "M.Ortega", edad: 30, media: 65, posicion: "Portero" },
    { nombre: "F.Meza", edad: 33, media: 65, posicion: "Defensa" },
    { nombre: "M.Rangel", edad: 34, media: 67, posicion: "Delantero" },
    { nombre: "B.Urueña", edad: 32, media: 66, posicion: "Delantero" },
    { nombre: "C.Sierra", edad: 34, media: 68, posicion: "Volante" },
    { nombre: "O.Cabezas", edad: 28, media: 64, posicion: "Defensa" },
    { nombre: "Y.Goez", edad: 25, media: 66, posicion: "Volante" }
  ],
  "Union M.": [
    { nombre: "J.Mattalia", edad: 33, media: 65, posicion: "Portero" },
    { nombre: "N.Ramos", edad: 26, media: 67, posicion: "Defensa" },
    { nombre: "H.Urrego", edad: 32, media: 66, posicion: "Defensa" },
    { nombre: "J.Sarmiento", edad: 25, media: 67, posicion: "Volante" },
    { nombre: "R.Marquez", edad: 27, media: 66, posicion: "Delantero" },
    { nombre: "R.Hinojosa", edad: 26, media: 67, posicion: "Delantero" },
    { nombre: "F.Cantillo", edad: 27, media: 66, posicion: "Volante" }
  ],
  "Chico": [
    { nombre: "D.Denis", edad: 33, media: 62, posicion: "Portero" },
    { nombre: "F.Salas", edad: 27, media: 65, posicion: "Defensa" },
    { nombre: "V.Hernandez", edad: 36, media: 69, posicion: "Delantero" },
    { nombre: "J.Molina", edad: 32, media: 68, posicion: "Delantero" },
    { nombre: "D.Ramirez", edad: 24, media: 65, posicion: "Volante" },
    { nombre: "E.Peralta", edad: 24, media: 64, posicion: "Defensa" },
    { nombre: "E.Camargo", edad: 23, media: 65, posicion: "Volante" }
  ],
  "Envigado": [
    { nombre: "A.Tovar", edad: 19, media: 63, posicion: "Portero" },
    { nombre: "S.Noreña", edad: 27, media: 63, posicion: "Defensa" },
    { nombre: "B.Garces", edad: 32, media: 66, posicion: "Delantero" },
    { nombre: "L.Diaz", edad: 21, media: 64, posicion: "Delantero" },
    { nombre: "D.Arcila", edad: 23, media: 65, posicion: "Volante" },
    { nombre: "D.Palacios", edad: 21, media: 62, posicion: "Defensa" },
    { nombre: "E.Lopez", edad: 25, media: 64, posicion: "Volante" }
  ],
  
  // Segunda División 
   "Jaguares": [
    { nombre: "J.Figueroa", edad: 32, media: 66, posicion: "Portero" },
    { nombre: "K.Saucedo", edad: 25, media: 65, posicion: "Defensa" },
    { nombre: "D.Ceter", edad: 27, media: 66, posicion: "Delantero" },
    { nombre: "K.Lenis", edad: 23, media: 65, posicion: "Delantero" },
    { nombre: "D.Pino", edad: 29, media: 66, posicion: "Volante" },
    { nombre: "A.Renteria", edad: 32, media: 68, posicion: "Delantero" },
    { nombre: "D.Padilla", edad: 31, media: 63, posicion: "Volante" }
  ],
  "Real Cartagena": [
    { nombre: "C.Mosquera", edad: 30, media: 64, posicion: "Portero" },
    { nombre: "C.Ramirez", edad: 37, media: 65, posicion: "Defensa" },
    { nombre: "F.Montero", edad: 37, media: 69, posicion: "Delantero" },
    { nombre: "J.Rodriguez", edad: 32, media: 66, posicion: "Volante" },
    { nombre: "C.Marrugo", edad: 39, media: 68, posicion: "Volante" },
    { nombre: "W.de la Rosa", edad: 32, media: 66, posicion: "Delantero" },
    { nombre: "A.Moralez", edad: 24, media: 65, posicion: "Defensa" }
  ],
  "Cucuta": [
    { nombre: "J.Ramirez", edad: 28, media: 66, posicion: "Portero" },
    { nombre: "H.Plazas", edad: 32, media: 65, posicion: "Defensa" },
    { nombre: "S.Tamara", edad: 29, media: 66, posicion: "Volante" },
    { nombre: "M.Pisano", edad: 33, media: 68, posicion: "Delantero" },
    { nombre: "C.Alvarez", edad: 32, media: 68, posicion: "Volante" },
    { nombre: "L.Payares", edad: 35, media: 65, posicion: "Defensa" },
    { nombre: "L.Rios", edad: 27, media: 66, posicion: "Volante" }
  ],
  "Huila": [
    { nombre: "J.Mendez", edad: 24, media: 65, posicion: "Portero" },
    { nombre: "L.Ospina", edad: 34, media: 65, posicion: "Defensa" },
    { nombre: "F.Arbelaez", edad: 28, media: 66, posicion: "Defensa" },
    { nombre: "O.Duarte", edad: 29, media: 67, posicion: "Delantero" },
    { nombre: "S.Hernandez", edad: 38, media: 68, posicion: "Volante" }
  ],
  "Patriotas": [
    { nombre: "J.Espitia", edad: 25, media: 63, posicion: "Portero" },
    { nombre: "M.Garavito", edad: 24, media: 65, posicion: "Defensa" },
    { nombre: "L.Renteria", edad: 19, media: 61, posicion: "Defensa" },
    { nombre: "E.Sarria", edad: 24, media: 65, posicion: "Delantero" },
    { nombre: "M.Figueroa", edad: 27, media: 66, posicion: "Volante" }
  ],
  "Real Cundinamarca": [
    { nombre: "K.Cataño", edad: 22, media: 64, posicion: "Portero" },
    { nombre: "J.Viveros", edad: 21, media: 60, posicion: "Defensa" },
    { nombre: "M.Castaño", edad: 26, media: 64, posicion: "Volante" },
    { nombre: "J.Asprilla", edad: 22, media: 66, posicion: "Delantero" },
    { nombre: "A.Rocha", edad: 21, media: 66, posicion: "Delantero" }
  ],
  "Inter Palmira": [
    { nombre: "J.Escobar", edad: 37, media: 63, posicion: "Portero" },
    { nombre: "G.Perea", edad: 33, media: 67, posicion: "Defensa" },
    { nombre: "J.Arango", edad: 34, media: 68, posicion: "Delantero" },
    { nombre: "V.Ibarbo", edad: 35, media: 69, posicion: "Delantero" },
    { nombre: "D.Rodriguez", edad: 30, media: 65, posicion: "Delantero" },
    { nombre: "D.Quiñones", edad: 29, media: 66, posicion: "Defensa" },
    { nombre: "D.Riascos", edad: 39, media: 64, posicion: "Delantero" }
  ],
  "Leones": [
    { nombre: "C.Holguin", edad: 21, media: 58, posicion: "Portero" },
    { nombre: "G.Meneses", edad: 23, media: 63, posicion: "Defensa" },
    { nombre: "C.Rodriguez", edad: 23, media: 63, posicion: "Volante" },
    { nombre: "J.Martinez", edad: 23, media: 65, posicion: "Delantero" },
    { nombre: "J.P.Arteaga", edad: 21, media: 62, posicion: "Volante" }
  ],
  "Tigres": [
    { nombre: "J.Huertas", edad: 24, media: 62, posicion: "Portero" },
    { nombre: "J.Barrios", edad: 23, media: 62, posicion: "Defensa" },
    { nombre: "R.Lara", edad: 23, media: 64, posicion: "Volante" },
    { nombre: "L.Palacios", edad: 20, media: 64, posicion: "Delantero" },
    { nombre: "J.Rivaldo", edad: 21, media: 63, posicion: "Delantero" }
  ],
  "Quindio": [
    { nombre: "M.Jimenez", edad: 29, media: 63, posicion: "Portero" },
    { nombre: "K.Hurtado", edad: 20, media: 58, posicion: "Defensa" },
    { nombre: "U.Rovira", edad: 19, media: 61, posicion: "Defensa" },
    { nombre: "J.Rodriguez", edad: 29, media: 64, posicion: "Delantero" },
    { nombre: "F.Valencia", edad: 23, media: 62, posicion: "Volante" },
    { nombre: "J.Lloreda", edad: 30, media: 64, posicion: "Delantero" },
    { nombre: "W.Arango", edad: 27, media: 63, posicion: "Volante" }
  ],
  "Bogotá FC": [
    { nombre: "W.Agamez", edad: 22, media: 59, posicion: "Portero" },
    { nombre: "D.Montien", edad: 24, media: 60, posicion: "Defensa" },
    { nombre: "F.Moreno", edad: 20, media: 62, posicion: "Volante" },
    { nombre: "W.Robledo", edad: 21, media: 60, posicion: "Delantero" },
    { nombre: "C.Huerfano", edad: 29, media: 63, posicion: "Delantero" }
  ],
  "Boca Juniors": [
    { nombre: "E.Obando", edad: 23, media: 61, posicion: "Portero" },
    { nombre: "J.Monsalve", edad: 26, media: 63, posicion: "Delantero" },
    { nombre: "C.Paternina", edad: 21, media: 62, posicion: "Volante" },
    { nombre: "J.Jaramillo", edad: 20, media: 60, posicion: "Delantero" },
    { nombre: "J.Mendoza", edad: 22, media: 60, posicion: "Volante" }
  ],
  "Orsomarso": [
    { nombre: "B.Benitez", edad: 22, media: 59, posicion: "Portero" },
    { nombre: "D.Barrios", edad: 21, media: 62, posicion: "Defensa" },
    { nombre: "E.Preciado", edad: 21, media: 60, posicion: "Volante" },
    { nombre: "S.Girado", edad: 20, media: 65, posicion: "Delantero" },
    { nombre: "A.Montaño", edad: 24, media: 60, posicion: "Volante" }
  ],
  "Barranquilla FC": [
    { nombre: "J.Lemus", edad: 26, media: 58, posicion: "Portero" },
    { nombre: "J.Caicedo", edad: 24, media: 62, posicion: "Defensa" },
    { nombre: "E.Herazo", edad: 16, media: 54, posicion: "Defensa" },
    { nombre: "C.Peñate", edad: 20, media: 60, posicion: "Delantero" },
    { nombre: "L.Berdugo", edad: 23, media: 63, posicion: "Volante" }
  ],
  "Atlético FC": [
    { nombre: "J.Jaramillo", edad: 25, media: 60, posicion: "Portero" },
    { nombre: "J.Alomia", edad: 26, media: 62, posicion: "Defensa" },
    { nombre: "N.Mosorongo", edad: 23, media: 62, posicion: "Volante" },
    { nombre: "J.Farias", edad: 21, media: 62, posicion: "Delantero" },
    { nombre: "J.Aguas", edad: 24, media: 62, posicion: "Volante"},
    { nombre: "D.Reales", edad: 24, media: 62, posicion: "Defensa"}   
  ],
  "Real Santander": [
    { nombre: "K.Chacon", edad: 22, media: 58, posicion: "Portero" },
    { nombre: "A.Ariza", edad: 27, media: 61, posicion: "Defensa" },
    { nombre: "S.Orejuela", edad: 24, media: 60, posicion: "Defensa" },
    { nombre: "Santi Rey", edad: 20, media: 60, posicion: "Delantero" },
    { nombre: "J.Rueda", edad: 24, media: 62, posicion: "Delantero" }
  ]
};


const jugadoresLibres = [
  { nombre: "J.Medranda", edad: 23, media: 64, posicion: "Defensa" },
  { nombre: "S.Cardenas", edad: 35, media: 65, posicion: "Volante" },
  { nombre: "D.Pabon", edad: 37, media: 66, posicion: "Delantero" },
  { nombre: "I.Arboleda", edad: 28, media: 68, posicion: "Portero" },
  { nombre: "R.Falcao", edad: 39, media: 75, posicion: "Delantero" },
  { nombre: "J.Barrera", edad: 29, media: 71, posicion: "Volante" },
  { nombre: "S.Perez", edad: 32, media: 69, posicion: "Volante" },
 { nombre: "C.Zapata", edad: 38, media: 68, posicion: "Defensa" },
  { nombre: "A.Mejia", edad: 37, media: 66, posicion: "Volante" },
  { nombre: "A.Andrade", edad: 31, media: 64, posicion: "Volante" },
  { nombre: "J.Silva", edad: 31, media: 63, posicion: "Portero" },
];

let palmaresEquipos = {
  "Nacional": { ligas: 18, copas: 7 },
  "Millonarios": { ligas: 16, copas: 3 },
  "América": { ligas: 15, copas: 0 },
  "Cali": { ligas: 10, copas: 1 },
  "Junior": { ligas: 10, copas: 2 },
  "Santa Fe": { ligas: 10, copas: 2 },
  "Tolima": { ligas: 3, copas: 1 },
  "Medellín": { ligas: 6, copas: 3},
  "Once Caldas": { ligas: 4, copas: 1 },
  "Pereira": { ligas: 1, copas: 0 },
  "Bucaramanga": { ligas: 1, copas: 0 },
  "Alianza": { ligas: 0, copas: 0 },
  "La Equidad": { ligas: 0, copas: 1 },
  "Pasto": { ligas: 1, copas: 0 },
  "Envigado": { ligas: 0, copas: 0 },
  "Chico": { ligas: 1, copas: 0 },
  "Águilas": { ligas: 0, copas: 0 },
  "Fortaleza": { ligas: 0, copas: 0 },
  "Llaneros": { ligas: 0, copas: 0 },
  "Union M.": { ligas: 1, copas: 0 },
  "Boca Juniors": { ligas: 0, copas: 1 }
};

function agregarTituloLiga(equipo) {
  if (!palmaresEquipos[equipo]) {
    palmaresEquipos[equipo] = { ligas: 0, copas: 0 };
  }
  palmaresEquipos[equipo].ligas++;
}

function agregarTituloCopa(equipo) {
  if (!palmaresEquipos[equipo]) {
    palmaresEquipos[equipo] = { ligas: 0, copas: 0 };
  }
  palmaresEquipos[equipo].copas++;
}



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
// Guarda t铆tulos consecutivos por equipo
let ultimoCampeon = "";// 脷ltimo campe贸n

let dtSeleccionado = "del club"; // antes de elegir


let presupuestosEquipos = {};

let presupuestoVisible = 0;

function sumarPresupuesto(monto) {
  presupuestoVisible += monto;
  document.getElementById("Presupuesto").textContent = `Presupuesto: $${presupuestoVisible.toLocaleString()}`;
}

function restarPresupuesto(monto) {
  presupuestoVisible -= monto; // ✅ Puede quedar en negativo
  document.getElementById("Presupuesto").textContent = `Presupuesto: $${presupuestoVisible.toLocaleString()}`;

  verificarPresupuestoNegativo(); // ✅ Llamada automática
}

let presupuestoNegativoDetectado = false;
let alertaPresupuestoSinResolver = false;

function verificarPresupuestoNegativo() {
  if (presupuestoVisible < 0 && !presupuestoNegativoDetectado) {
    presupuestoNegativoDetectado = true; // evitar múltiples ejecuciones

    const quiereRecortar = confirm("⚠️ Estás en números negativos. ¿Quieres reducir sueldos despidiendo personal en la junta directiva?");

    if (quiereRecortar) {
      // 💰 Se suman 15M al presupuesto
      presupuestoVisible += 15000000;
      actualizarPresupuestoHTML();

      alert("📉 Has reducido personal en la junta directiva y estabilizaste tus finanzas.");
    } else {
      alertaPresupuestoSinResolver = true;
      alert("⚠️ No resolviste el déficit. Esto puede traer problemas al club...");
    }
  }
}

function actualizarPresupuestoHTML() {
  const elemento = document.getElementById("Presupuesto");
  if (elemento) {
    const valor = presupuestoVisible.toLocaleString();
    elemento.textContent = `Presupuesto: $${valor}`;

     elemento.className = "";
if (presupuestoVisible < 0) {
  elemento.classList.add("presupuesto-rojo");
} else if (presupuestoVisible === 0) {
  elemento.classList.add("presupuesto-naranja");
} else {
  elemento.classList.add("presupuesto-verde");
}
  }
}

function obtenerFuerzaEquipo(nombre) {
  if (fuerzaEquipos[nombre] !== undefined) return fuerzaEquipos[nombre];

  const equipo2da = equiposSegunda.find(e => e.nombre === nombre);
  return equipo2da ? equipo2da.fuerza : 60; // valor por defecto si no existe
}


function calcularPresupuestoPorFuerza(fuerza) {
  if (fuerza >= 69) return 15000000;
  if (fuerza >= 67) return 13000000;
  if (fuerza >= 65) return 10000000;
  if (fuerza >= 63) return 7000000;
  if (fuerza >= 60) return 5000000;
  if (fuerza >= 58) return 3500000;
  return 2500000;
}

function seleccionarEquipo(nombreEquipo) {
  equipoUsuario = nombreEquipo;

   const fuerza = obtenerFuerzaEquipo(nombreEquipo);

  presupuestoVisible = calcularPresupuestoPorFuerza(fuerza);
actualizarPresupuestoHTML();
}

//Función selecciónar equipos vieja👇
/*
function seleccionarEquipo(nombreEquipo) {
    equipoUsuario = nombreEquipo;
}
*/

function obtenerFuerzaTotal(nombreEquipo) {

  const base = fuerzaEquipos[nombreEquipo] || equiposSegunda.find(e => e.nombre === nombreEquipo)?.fuerza || 64;

  const plantilla = plantillasJugadores[nombreEquipo];

  if (!plantilla || plantilla.length < 5) return base; // Acepta 5 o más

  const tienePortero = plantilla.some(j => j.posicion.toLowerCase() === "portero");
  if (!tienePortero) return base;

  const mediaPromedio = plantilla.reduce((sum, j) => sum + j.media, 0) / plantilla.length;
  return base + Math.round(mediaPromedio);
}


// Probabilidad de gol seg煤n posici贸n
const probabilidadGolPorPosicion = {
  "portero": 0,
  "defensa": 1,
  "volante": 4,
  "pivote": 3,
  "medio": 3,
  "delantero": 6
};

// Elegir goleador con peso seg煤n posici贸n
function elegirGoleadorPorPeso(plantilla) {
  if (!plantilla || plantilla.length === 0) return "Jugador an贸nimo";

  const pool = [];

  for (let jugador of plantilla) {
    const posicion = jugador.posicion?.toLowerCase() || "volante";
    const peso = probabilidadGolPorPosicion[posicion] || 1;

    for (let i = 0; i < peso; i++) {
      pool.push(jugador.nombre);
    }
  }

  if (pool.length === 0) return "Jugador an贸nimo";
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
}


function descargarHistorialJSON() {
  const historial = {
    historialLigas: campeones.map((c) => ({
    /*  temporada: 2025 + i, */
      campeon: c
    })),
    copaColombia: campeonesCopaColombia
  };

  const blob = new Blob([JSON.stringify(historial, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = "historial_futbol_colombiano.json";
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
}


function simularPartido(equipoA, equipoB) {
  const fuerzaA = obtenerFuerzaTotal(equipoA);
  const fuerzaB = obtenerFuerzaTotal(equipoB);
  const diferencia = fuerzaA - fuerzaB;

  const base = Math.random() * 1.5 + Math.random() * 1.5;
  const ventaja = Math.tanh(diferencia / 30);
  const ruidoA = Math.random() * 1.6 - 0.8;
  const ruidoB = Math.random() * 1.6 - 0.8;

  const golesA = Math.round(Math.max(0, base + ventaja + ruidoA));
  const golesB = Math.round(Math.max(0, base - ventaja + ruidoB));

  const plantillaA = plantillasJugadores[equipoA];
  const plantillaB = plantillasJugadores[equipoB];

  const goleadoresA = Array.from({ length: golesA }, () => elegirGoleadorPorPeso(plantillaA));
  const goleadoresB = Array.from({ length: golesB }, () => elegirGoleadorPorPeso(plantillaB));

  let puntosA = 0, puntosB = 0;
  if (golesA > golesB) puntosA = 3;
  else if (golesB > golesA) puntosB = 3;
  else puntosA = puntosB = 1;

  return { golesA, golesB, puntosA, puntosB, goleadoresA, goleadoresB };
}

function simularTCT() {
  if (!equipoUsuario) {
    alert("⚠️ Debes seleccionar un equipo antes de iniciar la simulación.");
    return;
  }

  resetearVista();
  tabla = equipos.map(e => ({ nombre: e, pts: 0, gf: 0, gc: 0 }));

  const tablaGoleadores = {};
  const partidosPorFecha = [];
  const totalEquipos = [...equipos];

  // Mezclar equipos al azar para que no siempre empiece el mismo
  for (let i = totalEquipos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [totalEquipos[i], totalEquipos[j]] = [totalEquipos[j], totalEquipos[i]];
  }

  // Algoritmo round-robin con alternancia de localía
  if (totalEquipos.length % 2 !== 0) totalEquipos.push("DESCANSA");
  const n = totalEquipos.length;
  const jornadas = n - 1;
  const mitad = n / 2;

  let lista = [...totalEquipos];
  let partidosPorEquipo = {};
  equipos.forEach(e => partidosPorEquipo[e] = { local: 0, visita: 0 });

  for (let fecha = 1; fecha <= jornadas; fecha++) {
    const partidos = [];

    for (let i = 0; i < mitad; i++) {
      let equipoA = lista[i];
      let equipoB = lista[n - 1 - i];
      if (equipoA === "DESCANSA" || equipoB === "DESCANSA") continue;

      // Alternar localía y controlar límites
      let invertir = (fecha + i) % 2 === 0;
      let local = invertir ? equipoB : equipoA;
      let visita = invertir ? equipoA : equipoB;

      const limiteLocal = semestreActual === 1 ? 10 : 9;
      const limiteVisita = semestreActual === 1 ? 9 : 10;

      if (partidosPorEquipo[local].local >= limiteLocal || partidosPorEquipo[visita].visita >= limiteVisita) {
        // Intercambiar localía si se pasó del límite
        let temp = local;
        local = visita;
        visita = temp;
      }

      partidosPorEquipo[local].local++;
      partidosPorEquipo[visita].visita++;

      const resultado = simularPartido(local, visita);

      let equipoObjA = tabla.find(t => t.nombre === local);
      let equipoObjB = tabla.find(t => t.nombre === visita);

      equipoObjA.pts += resultado.puntosA;
      equipoObjA.gf += resultado.golesA;
      equipoObjA.gc += resultado.golesB;

      equipoObjB.pts += resultado.puntosB;
      equipoObjB.gf += resultado.golesB;
      equipoObjB.gc += resultado.golesA;

      resultado.goleadoresA.forEach(j => {
        const key = `${j} (${local})`;
        tablaGoleadores[key] = (tablaGoleadores[key] || 0) + 1;
      });

      resultado.goleadoresB.forEach(j => {
        const key = `${j} (${visita})`;
        tablaGoleadores[key] = (tablaGoleadores[key] || 0) + 1;
      });

      partidos.push({
        equipoA: local,
        equipoB: visita,
        golesA: resultado.golesA,
        golesB: resultado.golesB
      });
    }

    partidosPorFecha.push({ numero: fecha, partidos });

    // Rotación para la siguiente fecha
    const fijo = lista[0];
    const resto = lista.slice(1);
    resto.unshift(resto.pop());
    lista = [fijo, ...resto];
  }

  // Mostrar partidos por fecha
  for (let fecha of partidosPorFecha) {
    let texto = `📅 Fecha ${fecha.numero}\n`;
    for (let p of fecha.partidos) {
      texto += `${p.equipoA} ${p.golesA} - ${p.golesB} ${p.equipoB}\n`;
    }
    alert(texto.trim());
  }

  // Mostrar tabla de goleadores
  let goleadoresTexto = "🏆 Goleadores\n";
  const listaG = Object.entries(tablaGoleadores)
    .sort((a, b) => b[1] - a[1])
    .map(([nombre, goles]) => `${nombre}: ${goles}`);
  goleadoresTexto += listaG.join("\n");
  alert(goleadoresTexto);

  // Ordenar tabla y mostrar
  tabla.sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));
  mostrarTabla("tct", tabla, `Temporada ${temporadaActual} - Semestre ${semestreActual}`, true, [], false);

  tabla.forEach(e => {
    if (!tablaAnual[e.nombre]) tablaAnual[e.nombre] = { nombre: e.nombre, pts: 0, gf: 0, gc: 0 };
    tablaAnual[e.nombre].pts += e.pts;
    tablaAnual[e.nombre].gf += e.gf;
    tablaAnual[e.nombre].gc += e.gc;
  });

  descensoPendiente = true;
  verificarPresupuestoNegativo();
}



function mostrarTabla(divId, datos, titulo, destacarTop8 = false, lideres = [], marcarDescenso = false) {
  let html = `<h2>${titulo}</h2><table><tr><th>#</th><th>Equipo</th><th>PTS</th><th>DG</th></tr>`;

  datos.forEach((t, i) => {
    let claseFila = "";
    if (divId === "segunda" && i < 1) claseFila = "ascendido";
    else if (divId ==="segunda" && i < 3) claseFila = "repechaje";
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

function mostrarAlineacion(nombreEquipo) {
  const plantilla = plantillasJugadores[nombreEquipo];
  if (!plantilla) {
    alert("❌ Este equipo no tiene plantilla de jugadores.");
    return;
  }

  let html = `<h3>${nombreEquipo}</h3><table><tr><th>Nombre</th><th>Edad</th><th>Media</th><th>Posici贸n</th></tr>`;
  plantilla.forEach(j => {
    html += `<tr><td>${j.nombre}</td><td>${j.edad}</td><td>${j.media}</td><td>${j.posicion}</td></tr>`;
  });
  html += "</table>";

  document.getElementById("alineacion").innerHTML = html;
}

function mostrarPlantilla(nombreEquipo) {
  // Si no se pasa como argumento, tomar desde el selector
  if (!nombreEquipo) {
    const selector = document.getElementById("selectorEquipo");
    if (!selector) return alert("❓ Selector no encontrado.");
    nombreEquipo = selector.value;
  }

  const plantilla = plantillasJugadores[nombreEquipo];
  const contenedor = document.getElementById("alineacion") || document.getElementById("plantillaJugadores");

  if (!contenedor) {
    alert("❌ No hay contenedor para mostrar la plantilla.");
    return;
  }

  if (!plantilla) {
    contenedor.innerHTML = `<p>❌ Este equipo no tiene plantilla registrada.</p>`;
    return;
  }

  let html = `
    <h3>${nombreEquipo}</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Media</th>
        <th>Posición</th>
      </tr>
  `;

  plantilla.forEach(j => {
    html += `
      <tr>
        <td>${j.nombre}</td>
        <td>${j.edad}</td>
        <td>${j.media}</td>
        <td>${j.posicion}</td>
      </tr>
    `;
  });

  html += "</table>";
  contenedor.innerHTML = html;
}


let castigoPorCorrupcion = null;
preguntaHechaEstaTemporada = false;
let decisionCorrupcionDebut = false;

function preguntaAleatoria() {
  if (preguntaHechaEstaTemporada) return;
  preguntaHechaEstaTemporada = true;

  const preguntas = [
    {
  texto: "💼 Un empresario quiere invertir en tu club. ¿Aceptar el dinero?",
  si: () => {
    castigoPorCorrupcion = equipoUsuario; // será castigado en descenso()
    sumarPresupuesto(20000000);           // 💰 dinero sucio recibido
    alert("💸 Recibiste los 20 millones... ");
  },
  no: () => {
    alert("👏 Rechazaste el trato y protegiste la reputación del club.");
  }
},
    {
      texto: "📣 La hinchada exige resultados. ¿Aceptar presión y cambiar táctica?",
      si: () => {
        fuerzaEquipos[equipoUsuario] += 2;
        alert("Táctica arriesgada. +2 fuerza a tu equipo.");
      },
      no: () => {
        fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 1);
        alert("No cambiaste nada. Tu equipo pierde -1 de fuerza por presión.");
      }
    },
    {
      texto: "🧪 Un jugador fue pillado dopándose. ¿Encubrirlo?",
      si: () => {
        castigoPorCorrupcion = equipoUsuario;
        alert("Lo encubriste... veremos si te descubren.");
      },
      no: () => {
        const plantilla = plantillasJugadores[equipoUsuario];
        if (plantilla.length > 0) {
          const sancionado = plantilla[Math.floor(Math.random() * plantilla.length)];
          sancionado.media = Math.max(1, sancionado.media - 2);
          alert(`${sancionado.nombre} fue suspendido. Pierde -2 de media.`);
        }
      }
    },
    {
  texto: `⚽ El DT ${dtSeleccionado} propone un entrenamiento intensivo para todo el plantel. ¿Aceptar?`,
  si: () => {
    plantillasJugadores[equipoUsuario].forEach(j => j.media++);
    alert(`✅ Entrenamiento aprobado por ${dtSeleccionado}. Todos los jugadores suben +1 de media.`);
  },
  no: () => {
    alert(`❌ Rechazaste el plan de ${dtSeleccionado}. Nada cambia.`);
  }
},
    {
      texto: "📸 Rumores de fiestas antes de los partidos. ¿Ignorar (Cancelar) o sancionar (Aceptar)?",
      si: () => {
        fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 2);
        alert("Tu equipo se descontrola. Pierdes -2 fuerza.");
      },
      no: () => {
        alert("Actuaste a tiempo.");
      }
    },
     {
      texto: "🎲 La Dimayor propone una regla experimental que aumenta el ritmo de juego. ¿Apoyas la idea?",
   si: () => {
    fuerzaEquipos[equipoUsuario] += 1;
    alert("La nueva regla favorece tu estilo. +1 fuerza al equipo.");
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 1);
    alert("Tu equipo se adapta mal al cambio. -1 fuerza.");
  }
},
{
  texto: "🏟️ Un empresario quiere cambiar el nombre del estadio a cambio de Nuevos Patrocinios. ¿Aceptar?",
  si: () => {
    plantillasJugadores[equipoUsuario].forEach(j => j.media++);
    alert("Mejoraron las taquillas. Todos suben +1 de media.");
  },
  no: () => {
    alert("Preferiste conservar el nombre. Sin cambios.");
  }
},
{
  texto: "💢 Un jugador veterano se enfrentó al DT. Como Presidente, ¿apoyas al DT (Aceptar) o al jugador (Cancelar)?",
  si: () => {
    fuerzaEquipos[equipoUsuario] += 3;
    alert("✅ Defendiste la autoridad del DT. El equipo gana +3 de fuerza.");
  },
  no: () => {
    const plantilla = plantillasJugadores[equipoUsuario];
    if (plantilla.length > 0) {
      const afectado = plantilla[Math.floor(Math.random() * plantilla.length)];
      afectado.media = Math.max(1, afectado.media - 1);
      alert(`⚠️ El conflicto desmotivó a ${afectado.nombre}. Pierde -1 de media.`);
    }
  }
},
{
  texto: "🧑‍⚖️ Un directivo sugiere imponer multas a los jugadores por bajo rendimiento en el semestre. ¿Aprobar la medida?",
  si: () => {
    fuerzaEquipos[equipoUsuario] += 1;
    alert("✅ La disciplina interna mejoró la actitud. Verás más intensidad en el segundo semestre.");
  },
  no: () => {
    alert("❌ Decidiste evitar el castigo. El grupo sigue igual… por ahora.");
  }
},
{
  texto: "📰 La prensa difunde rumores que afectan la concentración del plantel. ¿Enfrentar públicamente los rumores?",
  si: () => {
    fuerzaEquipos[equipoUsuario] += 1;
    alert("✅ Tu respuesta firme calmó al entorno. El equipo recupera foco.");
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 1);
    alert("❌ El silencio alimentó la tensión. El equipo pierde concentración.");
  }
},
{
  texto: `🎯 El DT ${dtSeleccionado} cree que el actual capitán no lidera bien. ¿Cambiar el capitán del equipo?`,
  si: () => {
    fuerzaEquipos[equipoUsuario] += 1;
    alert(`✅ El nuevo capitán inspira al grupo. Se verá reflejado en el segundo semestre.`);
  },
  no: () => {
    alert(`❌ Mantuviste al capitán actual. El ambiente se mantiene estable.`);
  }
},
{
  texto: "🌐 Tu equipo es invitado a un torneo amistoso internacional. ¿Aceptar?",
  si: () => {
    fuerzaEquipos[equipoUsuario] += 5;
    alert("El roce internacional sube tu nivel. +5 fuerza.");
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 1);
    alert("Perdiste visibilidad. -1 fuerza.");
  }
},
{
  texto: "🎁 Un fanático anónimo envió un paquete especial al club. ¿Abrirlo?",
  si: () => {
    const resultado = Math.floor(Math.random() * 3);
    if (resultado === 0) {
      fuerzaEquipos[equipoUsuario] += 2;
      alert("📦 ¡Sorpresa! Contenía material táctico avanzado. +2 fuerza.");
    } else if (resultado === 1) {
      plantillasJugadores[equipoUsuario].forEach(j => j.media++);
      alert("📦 ¡Wow! Era equipamiento de élite. Todos suben +1 de media.");
    } else {
      const jugador = plantillasJugadores[equipoUsuario][Math.floor(Math.random() * plantillasJugadores[equipoUsuario].length)];
      jugador.media = Math.max(1, jugador.media - 2);
      alert(`📦 ¡Oh no! ${jugador.nombre} sufrió una lesión con el regalo. -2 de media.`);
    }
  },
  no: () => {
    alert("Decidiste no abrir el paquete. Mejor prevenir que lamentar.");
  }
},
{
  texto: `🧤 El DT ${dtSeleccionado} propone un programa intensivo solo para porteros. ¿Aprobar su plan?`,
  si: () => {
    plantillasJugadores[equipoUsuario].forEach(j => {
      if (j.posicion.toLowerCase() === "portero") j.media++;
    });
    alert(`✅ ${dtSeleccionado} aplicó el plan. Los porteros ganan +1 de media.`);
  },
  no: () => {
    alert(`❌ Rechazaste el plan de ${dtSeleccionado}. Nada cambia.`);
  }
},
{
  texto: `🎯 El DT ${dtSeleccionado} quiere entrenar a los delanteros por separado para mejorar su precisión. ¿Aceptar?`,
  si: () => {
    plantillasJugadores[equipoUsuario].forEach(j => {
      if (j.posicion.toLowerCase().includes("delantero")) j.media++;
    });
    alert(`✅ Entrenamiento especializado aprobado. Los delanteros ganan +1 de media.`);
  },
  no: () => {
    alert(`❌ Se rechazó la propuesta de ${dtSeleccionado}. Nada cambia.`);
  }
},
{
  texto: `🧠 ${dtSeleccionado} sugiere sesiones privadas con un psicólogo solo para mediocampistas. ¿Aceptar su sugerencia?`,
  si: () => {
    plantillasJugadores[equipoUsuario].forEach(j => {
      if (j.posicion.toLowerCase().includes("Volante")) j.media++;
    });
    alert(`✅ ${dtSeleccionado} mejoró el enfoque mental. Mediocampistas +1 de media.`);
  },
  no: () => {
    alert(`❌ No autorizaste el enfoque psicológico. Nada cambia.`);
  }
},
{
  texto: `⚙️ ${dtSeleccionado} nota que la moral del equipo está baja y quiere cambiar la táctica. ¿Permitir el cambio?`,
  si: () => {
    fuerzaEquipos[equipoUsuario] += 1;
    alert(`✅ ${dtSeleccionado} aplicó la nueva táctica. +1 fuerza al equipo.`);
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 1);
    alert(`❌ No permitiste el cambio. El equipo pierde -1 de fuerza por desmotivación.`);
  }
},
{
  texto: "🕴️ Un agente te ofrece 20 millones si haces debutar a un jugador. ¿Aceptar el trato?",
  si: () => {
    fuerzaEquipos[equipoUsuario] += 2; // para disimular efecto
    sumarPresupuesto(20000000);        // 💰 Se suma el dinero YA
    alert("✅ El dinero ya está en la cuenta del club. El equipo parece motivado... por ahora.");
    decisionCorrupcionDebut = true;    // se evalúa más adelante
  },
  no: () => {
    alert("👏 Rechazaste la oferta y protegiste la integridad del club.");
  }
},
{
  texto: `🧳 Rumores apuntan a que ${dtSeleccionado} recibió una oferta de otro club. ¿Negarlo ante los medios?`,
  si: () => {
    alert(`✅ Desviaste la atención con inteligencia. ${dtSeleccionado} se mantiene en el cargo.`);
  },
  no: () => {
  const todosLosDTs = Object.entries(entrenadores)
    .map(([clave, obj]) => ({ clave, nombre: obj.nombre, imagen: obj.imagen }))
    .filter(dt => dt.nombre !== dtSeleccionado);

  const dtSaliente = dtSeleccionado; // 🟡 guardar antes de reemplazar

  const nuevoDT = todosLosDTs[Math.floor(Math.random() * todosLosDTs.length)];
  dtSeleccionado = nuevoDT.nombre;

  resultado.textContent = `Entrenador asignado: ${nuevoDT.nombre}`;
  foto.src = nuevoDT.imagen;
  foto.alt = nuevoDT.nombre;
  foto.style.display = 'block';

  alert(`❌ ${dtSaliente} dejó el club tras rumores confirmados.\n📢 La directiva ha anunciado a ${nuevoDT.nombre} como nuevo entrenador.`);
}
},
{
  texto: "🏥 El jefe médico advirtió sobre riesgo de lesiones si no se invierte en recuperación. ¿Ignorarlo?",
  si: () => {
    const lesionado = plantillasJugadores[equipoUsuario][Math.floor(Math.random() * plantillasJugadores[equipoUsuario].length)];
    lesionado.media = Math.max(1, lesionado.media - 4);
    alert(`🚑 ${lesionado.nombre} se lesionó por sobrecarga. Pierde -4 de media.`);
  },
  no: () => {
    alert("✅ Aprobaste los refuerzos médicos. El equipo estará más protegido.");
  }
},
{
  texto: "🚨 Se descubrió que uno de tus jugadores está involucrado en apuestas ilegales. ¿Denunciarlo a la federación?",
  si: () => {
    // Elegir jugador aleatorio
    const plantilla = plantillasJugadores[equipoUsuario];
    const jugadorInvolucrado = plantilla[Math.floor(Math.random() * plantilla.length)];

    // Expulsarlo
    const index = plantilla.indexOf(jugadorInvolucrado);
    if (index !== -1) plantilla.splice(index, 1);

    alert(`🚫 ${jugadorInvolucrado.nombre} fue denunciado y expulsado del torneo. No podrá volver a jugar en la temporada.`);
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 3);
    alert("❌ Decidiste encubrir el escándalo. El vestuario se llenó de tensión. Pierdes -3 de fuerza.");
  }
},
{
  texto: "💼 Un empresario ofrece 10 millones como inversión privada. ¿Aceptar?",
  si: () => {
    sumarPresupuesto(10000000);
    alert("💰 Recibiste 10 millones. ¡Presupuesto aumentado!");
  },
  no: () => {
    alert("🙅‍♂️ Rechazaste la inversión. No hay cambios.");
  }
},
{
  texto: "💼 Un empresario con mucho dinero quiere invertir en tu club. Promete mejorar todo sin pedir nada a cambio. ¿Aceptar el dinero?",
  si: () => {
    sumarPresupuesto(10000000);
    fuerzaEquipos[equipoUsuario] += 2;
    plantillasJugadores[equipoUsuario].forEach(j => j.media++);
    alert("✅ Era una inversión legal. Tu club mejora: +1 media a todos, +2 fuerza y +$10M al presupuesto.");
  },
  no: () => {
    alert("Rechazaste la oferta. Tal vez perdiste una oportunidad legítima...");
  }
},
{
  texto: "📩 Una carta sin remitente ofrece un 'bono' si el club acepta sus condiciones. ¿Aceptar?",
  si: () => {
    const resultado = Math.random();
    if (resultado < 0.3) {
      castigoPorCorrupcion = equipoUsuario;
      alert("💸 El bono era dinero ilícito. ¡Corrupción detectada!");
    } else {
      sumarPresupuesto(3000000);
      fuerzaEquipos[equipoUsuario] += 1;
      alert("📈 El bono era legal y útil. +$3M y +1 fuerza.");
    }
  },
  no: () => {
    alert("Ignoraste la carta. Sigues en regla.");
  }
},
{
  texto: "🌧️ Las fuertes lluvias han afectado el campo. ¿Invertir en mejoras urgentes?",
  si: () => {
    const costo = 2000000;
    if (presupuestoVisible >= costo) {
      restarPresupuesto(costo);
      fuerzaEquipos[equipoUsuario] += 1;
      alert("✅ El campo fue restaurado. +1 fuerza.");
    } else {
      alert("❌ No tienes suficiente presupuesto para invertir en las mejoras del campo.");
    }
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 3);
    alert("❌ El terreno sigue irregular. -3 de fuerza.");
  }
},
{
  texto: "🏢 Tu patrocinador principal quiere aparecer más en camisetas y redes. ¿Rechazar sus condiciones?",
  si: () => {
    const penalizacion = 5000000;
    if (presupuestoVisible >= penalizacion) {
      restarPresupuesto(penalizacion);
      fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 4);
      alert("💥 El patrocinador rompió el contrato. Pierdes $5M y -4 de fuerza por tensión institucional.");
    } else {
      alert("🚫 No tienes fondos para asumir la pérdida del patrocinador.\n🧨 La junta directiva ha decidido removerte del cargo.");
      location.reload(); // reinicia el juego
    }
  },
  no: () => {
    alert("🤝 Aceptaste las condiciones del patrocinador. El apoyo económico continúa.");
  }
},
{
  texto: "🏋️‍♀️ El cuerpo técnico solicita remodelar el gimnasio del club. ¿Aprobar los fondos?",
  si: () => {
    const costo = 2000000;
    if (presupuestoVisible >= costo) {
      restarPresupuesto(costo);
      alert("💪 Renovaste el gimnasio. Mejora en entrenamientos físicos.");
    } else {
      alert("❌ No tienes suficiente presupuesto para remodelar el gimnasio.");
    }
  },
  no: () => {
    alert("🏚️ Mantuviste el gimnasio viejo. Nada cambia.");
  }
},
{
  texto: "🚐 El transporte de los juveniles es obsoleto. ¿Adquirir una nueva van por $1.5M?",
  si: () => {
    const costo = 1500000;
    if (presupuestoVisible >= costo) {
      restarPresupuesto(costo);
      alert("🚌 Aprobaste la renovación del vehículo. Mejor logística para los juveniles.");
    } else {
      alert("❌ No tienes fondos para renovar el transporte.");
    }
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 2);
    alert("🚧 El transporte ineficiente afecta el desarrollo de juveniles. -2 de fuerza.");
  }
},
{
  texto: "🏦 Un banco quiere aparecer en la manga de la camiseta. ¿Aceptar el nuevo patrocinio?",
  si: () => {
    sumarPresupuesto(3000000);
    alert("💵 Firmaste el acuerdo. Ingresas $3M.");
  },
  no: () => {
    alert("❌ Rechazaste el acuerdo. Nada cambia.");
  }
},
{
  texto: `🎤 El sponsor principal te pidió participar en un comercial con el DT ${dtSeleccionado}. ¿Aceptar el pedido?`,
  si: () => {
    alert(`📹 El DT ${dtSeleccionado} y tú grabaron el anuncio. La relación con el sponsor se mantiene fuerte.`);
  },
  no: () => {
    const penalizacion = 2000000;
    if (presupuestoVisible >= penalizacion) {
      restarPresupuesto(penalizacion);
      alert("😒 El sponsor se molestó. Retiró parte de su aporte. Pierdes $2M.");
    } else {
      alert("🚫 No cumpliste con el compromiso y no tienes fondos para afrontar la penalización.\n🧨 La junta directiva ha decidido removerte del cargo.");
      location.reload(); // Reinicia el juego
    }
  }
},
{
  texto: "🧬 Un laboratorio ofrece suplementación avanzada legal para mejorar el rendimiento de tu plantilla por $2.000.000. ¿Aceptar?",
  si: () => {
    const costo = 2000000;
    if (presupuestosEquipos[equipoUsuario] >= costo) {
      restarPresupuesto(costo);
      const plantilla = plantillasJugadores[equipoUsuario];
      plantilla.forEach(j => j.media += 5);
      alert("💪 La suplementación funcionó: todos los jugadores suben +5 de media.");
    } else {
      alert("❌ No tienes suficiente presupuesto para pagar la mejora.");
    }
  },
  no: () => {
    alert("🚫 Rechazaste la propuesta. No hay cambios.");
  }
},
  {
    texto: "🧠 Un club árabe ofrece dar una charla técnica a cambio de derechos de imagen. ¿Aceptar?",
    si: () => {
      presupuestoVisible += 3000000;
      actualizarPresupuestoHTML();
      alert("💰 Recibiste $3M por el acuerdo con el club árabe.");
    },
    no: () => {
      alert("🤝 Rechazaste la propuesta por mantener tu independencia.");
    }
  },
  {
    texto: "🎲 Un aficionado millonario ofrece una donación por amor al club. ¿Aceptar el dinero sin hacer preguntas?",
    si: () => {
      presupuestoVisible += 2500000;
      actualizarPresupuestoHTML();
      alert("💸 Aceptaste el dinero misterioso. Sumaste $2.5M.");
    },
    no: () => {
      alert("🧼 Actuaste con ética. El presupuesto sigue igual.");
    }
  },
  {
    texto: "🏛️ El alcalde lanza un subsidio para clubes con impacto juvenil. ¿Postularte?",
    si: () => {
      presupuestoVisible += 2000000;
      actualizarPresupuestoHTML();
      alert("🏅 El club recibió el subsidio. Sumaste $2M.");
    },
    no: () => {
      alert("🙃 Dejaste pasar la oportunidad por burocracia.");
    }
  },
  {
    texto: "🔥 Se rompió el sistema eléctrico del estadio. ¿Cubrir el costo de la reparación?",
    si: () => {
      if (presupuestoVisible >= 1500000) {
        restarPresupuesto(1500000);
        alert("🔧 Se reparó el sistema. $1.5M menos.");
      } else {
        alert("💥 No tienes fondos. El estadio quedó dañado.");
      }
    },
    no: () => {
      fuerzaEquipos[equipoUsuario] = Math.max(1, fuerzaEquipos[equipoUsuario] - 2);
      alert("📉 No se reparó el estadio. Pierdes -2 de fuerza.");
    }
  },
  {
    texto: "📱Los hinchas exigen cambios en redes sociales. ¿Contratar un community manager por $1M?",
    si: () => {
      if (presupuestoVisible >= 1000000) {
        restarPresupuesto(1000000);
        alert("📱 Imagen digital mejorada. Pagaste $1M.");
      } else {
        alert("📉 No tenías dinero y los fans están molestos.");
      }
    },
    no: () => {
      alert("🙈 Ignoraste el reclamo. Nada cambia.");
    }
  },
  {
    texto: "🏗️ Se filtró el techo del vestuario. ¿Repararlo?",
    si: () => {
      if (presupuestoVisible >= 1000000) {
        restarPresupuesto(1000000);
        alert("🚿 Techo reparado. Higiene recuperada.");
      } else {
        alert("🚨 No tienes fondos y los jugadores están incómodos.");
      }
    },
    no: () => {
      fuerzaEquipos[equipoUsuario] = Math.max(1, fuerzaEquipos[equipoUsuario] - 1);
      alert("🤢 Vestuario deteriorado. Pierdes -1 de fuerza.");
    }
  },
  {
    texto: "📚 Un prestigioso preparador físico ofrece una capacitación avanzada. ¿Pagar $3M?",
    si: () => {
      if (presupuestoVisible >= 3000000) {
        restarPresupuesto(3000000);
        const plantilla = plantillasJugadores[equipoUsuario];
        plantilla.forEach(j => {
          j.media += 3;
          j.fuerza += 2;
        });
        alert("💪 Todo el plantel ganó +3 media y +2 fuerza.");
      } else {
        alert("❌ No tienes dinero para la capacitación.");
      }
    },
    no: () => {
      alert("👎 Rechazaste la oportunidad de formación.");
    }
  },
  {
    texto: "🧬 Se implementa una innovadora rutina de nutrición. ¿Aplicarla?",
    si: () => {
      const plantilla = plantillasJugadores[equipoUsuario];
      plantilla.forEach(j => j.fuerza += 3);
      alert("🥗 Mejora física: todos ganan +3 de fuerza.");
    },
    no: () => {
      alert("🍔 Mantienes el plan de siempre. Todo sigue igual.");
    }
  },
  {
    texto: "🎭 Un escándalo de redes sociales afecta la concentración del equipo. ¿Ignorar y no tomar medidas?",
    si: () => {
      const plantilla = plantillasJugadores[equipoUsuario];
      plantilla.forEach(j => {
        j.media = Math.max(1, j.media - 2);
        j.fuerza = Math.max(1, j.fuerza - 1);
      });
      alert("😓 La crisis afectó al grupo. -2 media y -1 fuerza.");
    },
    no: () => {
      alert("📵 Implementaste un protocolo de comunicación. El equipo se mantiene firme.");
    }
  },
{
  texto: "🧪 Un método de recuperación muscular experimental promete +6 de fuerza. ¿Autorizarlo?",
  si: () => {
    const plantilla = plantillasJugadores[equipoUsuario];
    plantilla.forEach(j => j.fuerza += 6);
    alert("⚡ Tus jugadores ganaron +6 de fuerza… aunque aún no está aprobado por la FIFA.");
  },
  no: () => {
    alert("😅 Decidiste no arriesgar la salud de tus jugadores.");
  }
},
{
  texto: "🌋 Una crisis nacional afecta a todos los equipos. ¿Donar fondos a la Dimayor para apoyar al fútbol?",
  si: () => {
    if (presupuestoVisible >= 4000000) {
      restarPresupuesto(4000000);
      alert("🤝 Donaste $4M. La Dimayor reconoce tu compromiso.");
    } else {
      alert("❌ No tienes fondos suficientes para participar en la ayuda.");
    }
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(1, fuerzaEquipos[equipoUsuario] - 3);
    alert("🧊 El club fue criticado por no ayudar. Pierdes -3 de fuerza.");
  }
},
{
  texto: "🧬 Un tratamiento cognitivo mejora la toma de decisiones en cancha. ¿Implementarlo?",
  si: () => {
    const plantilla = plantillasJugadores[equipoUsuario];
    plantilla.forEach(j => j.media += 4);
    alert("🧠 Todos los jugadores ganaron +4 de media gracias al nuevo enfoque mental.");
  },
  no: () => {
    alert("🤔 Preferiste seguir con métodos tradicionales.");
  }
}
  ];

  const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
  const respuesta = confirm(pregunta.texto);
  if (respuesta) {
    pregunta.si();
  } else {
    pregunta.no();
  }
}



let campeonesCopaColombia = []; // Historial de campeones

function simularCopaColombiaNuevoFormato() {
  alert("⚽ Copa Colombia: ¡Comienza el torneo nacional!");

  const mezclaA = [...equiposPrimera];
  const mezclaB = [...equiposSegunda.map(e => e.nombre)];

  shuffleArray(mezclaA);
  shuffleArray(mezclaB);

  const fase1A = mezclaA.slice(0, 12);
  const fase1B = mezclaB.slice(0, 8);
  const fase1Equipos = [...fase1A, ...fase1B];

  const fase2A = mezclaA.slice(12);
  const fase2B = mezclaB.slice(8);

  // FASE 1 – Grupos
  const grupos = [[], [], [], []];
  shuffleArray(fase1Equipos);
  for (let i = 0; i < fase1Equipos.length; i++) {
    grupos[i % 4].push(fase1Equipos[i]);
  }

  const clasificadosFase1 = [];

  grupos.forEach((grupo, index) => {
    const tabla = grupo.map(nombre => ({ nombre, pts: 0, gf: 0, gc: 0 }));

    for (let i = 0; i < grupo.length; i++) {
      for (let j = i + 1; j < grupo.length; j++) {
        const eq1 = grupo[i];
        const eq2 = grupo[j];
        const resultado = simularPartido(eq1, eq2);

        const e1 = tabla.find(t => t.nombre === eq1);
        const e2 = tabla.find(t => t.nombre === eq2);

        e1.gf += resultado.golesA;
        e1.gc += resultado.golesB;
        e2.gf += resultado.golesB;
        e2.gc += resultado.golesA;

        e1.pts += resultado.puntosA;
        e2.pts += resultado.puntosB;
      }
    }

    tabla.sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));
    clasificadosFase1.push(tabla[0].nombre, tabla[1].nombre);

    let texto = `📊 Grupo ${String.fromCharCode(65 + index)}\n`;
    tabla.forEach(t => {
      texto += `${t.nombre}: ${t.pts} pts, DG: ${t.gf - t.gc}\n`;
    });
    alert(texto.trim());
  });

  // FASE 2 – Eliminatoria directa
  const fase2Equipos = [...fase2A, ...fase2B];
  shuffleArray(fase2Equipos);
  const clasificadosFase2 = [];
  const textoF2 = [];

  for (let i = 0; i < fase2Equipos.length; i += 2) {
    const eq1 = fase2Equipos[i];
    const eq2 = fase2Equipos[i + 1];

    const ida = simularPartido(eq1, eq2);
    const vuelta = simularPartido(eq2, eq1);

    const total1 = ida.golesA + vuelta.golesB;
    const total2 = ida.golesB + vuelta.golesA;
    const ganador = total1 > total2 ? eq1 : total2 > total1 ? eq2 : (Math.random() < 0.5 ? eq1 : eq2);

    clasificadosFase2.push(ganador);

    textoF2.push(
      `${eq1} ${ida.golesA}-${ida.golesB} ${eq2} (Ida)\n` +
      `${eq2} ${vuelta.golesA}-${vuelta.golesB} ${eq1} (Vuelta)\n➡️ Pasa: ${ganador}`
    );
  }

  alert("🧩 Fase 2 - Eliminatoria directa (1/2)\n\n" + textoF2.slice(0, 4).join("\n\n"));
  alert("🧩 Fase 2 - Eliminatoria directa (2/2)\n\n" + textoF2.slice(4).join("\n\n"));

  // FASE 3 – Octavos
  const octavos = [...clasificadosFase1, ...clasificadosFase2];
  shuffleArray(octavos);
  const cuartofinalistas = [];
  const textoF3 = [];

  for (let i = 0; i < octavos.length; i += 2) {
    const eq1 = octavos[i];
    const eq2 = octavos[i + 1];
    const ida = simularPartido(eq1, eq2);
    const vuelta = simularPartido(eq2, eq1);
    const total1 = ida.golesA + vuelta.golesB;
    const total2 = ida.golesB + vuelta.golesA;
    const ganador = total1 > total2 ? eq1 : total2 > total1 ? eq2 : (Math.random() < 0.5 ? eq1 : eq2);
    cuartofinalistas.push(ganador);

    textoF3.push(
      `${eq1} ${ida.golesA}-${ida.golesB} ${eq2}\n` +
      `${eq2} ${vuelta.golesA}-${vuelta.golesB} ${eq1}\n➡️ Clasifica: ${ganador}`
    );
  }

  alert("🔶 Fase 3 - Octavos (1/2)\n\n" + textoF3.slice(0, 4).join("\n\n"));
  alert("🔶 Fase 3 - Octavos (2/2)\n\n" + textoF3.slice(4).join("\n\n"));

  // FASE 4 – Cuartos, Semis, Final
  const avanzar = (ronda, equipos) => {
    const ganadores = [];
    shuffleArray(equipos);
    let texto = `📅 ${ronda}\n`;
    for (let i = 0; i < equipos.length; i += 2) {
      const eq1 = equipos[i];
      const eq2 = equipos[i + 1];
      const ida = simularPartido(eq1, eq2);
      const vuelta = simularPartido(eq2, eq1);
      const total1 = ida.golesA + vuelta.golesB;
      const total2 = ida.golesB + vuelta.golesA;
      const ganador = total1 > total2 ? eq1 : total2 > total1 ? eq2 : (Math.random() < 0.5 ? eq1 : eq2);
      ganadores.push(ganador);
      texto += `\n${eq1} ${ida.golesA}-${ida.golesB} ${eq2} / ${eq2} ${vuelta.golesA}-${vuelta.golesB} ${eq1}\n➡️ ${ganador} clasifica\n`;
    }
    alert(texto.trim());
    return ganadores;
  };

  const semifinalistas = avanzar("Cuartos de final", cuartofinalistas);
  const finalistas = avanzar("Semifinal", semifinalistas);
  const campeon = avanzar("🏆 Final", finalistas)[0];
  agregarTituloCopa(campeon); // 🏆 Suma la copa al palmarés

  // PREMIO y historial
  campeonesCopaColombia.push({ nombre: campeon, temporada: temporadaActual });


  if (campeon === equipoUsuario) {
    sumarPresupuesto(250000);
    alert(`🎉 ¡Felicidades! ${campeon} es el campeón de la Copa Colombia\n💰 Recibes $250.000 de premio.`);
  } else {
    alert(`🏆 ${campeon} es el campeón de la Copa Colombia`);
  }
}

// Mezclar array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function mostrarHistorialCopaColombia() {
  if (campeonesCopaColombia.length === 0) {
    alert("📜 Aún no hay campeones en la Copa Colombia.");
    return;
  }

  let texto = "🏆 Historial de Campeones Copa Colombia:\n\n";
  campeonesCopaColombia.forEach((c, i) => {
    texto += `Temporada ${c.temporada}: ${c.nombre}\n`;
  });
  alert(texto.trim());
}


function mostrarPalmares() {
  const contenedor = document.getElementById("palmares") || document.createElement("div");
  contenedor.id = "palmares";
  contenedor.innerHTML = ""; // Limpia antes

  let equiposOrdenados = Object.entries(palmaresEquipos)
    .map(([nombre, { ligas, copas }]) => ({
      nombre,
      ligas,
      copas,
      total: ligas + copas
    }))
    .sort((a, b) => b.total - a.total || b.ligas - a.ligas); // Orden por títulos

  let html = `
    <h2>🏆 Palmarés Histórico</h2>
    <table border="1" cellpadding="5">
      <tr>
        <th>#</th>
        <th>Equipo</th>
        <th>Ligas</th>
        <th>Copas</th>
        <th>Total</th>
      </tr>
  `;

  equiposOrdenados.forEach((equipo, i) => {
    const nombreLimpio = equipo.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_");
    const escudo = `<img src="escudos/${nombreLimpio}.png" alt="${equipo.nombre}" class="escudo" width="20">`;

    html += `
      <tr>
        <td>${i + 1}</td>
        <td>${escudo} ${equipo.nombre}</td>
        <td>${equipo.ligas}</td>
        <td>${equipo.copas}</td>
        <td><strong>${equipo.total}</strong></td>
      </tr>
    `;
  });

  html += "</table>";
  contenedor.innerHTML = html;
  document.body.appendChild(contenedor);
}







function descenso() {
  if (!descensoPendiente) {
    alert("⚠️ Debes simular al menos un semestre antes de hacer descenso.");
    return;
  }

  // ✅ Fin del semestre 1: Lanzar pregunta
  if (semestreActual < 2) {
    semestreActual++;
    preguntaAleatoria(); // solo se hace aquí
    alert("✅ Fin del semestre 1. Ahora puedes simular el segundo semestre.");
    
// Sueldos semestrales (solo usuario)
let sueldoSemestral;
if (equiposPrimera.includes(equipoUsuario)) {
  sueldoSemestral = 2500000; // Primera A
} else {
  sueldoSemestral = 1000000; // Segunda
}

// Preguntar al usuario si quiere pagar
const quierePagar = confirm(`¿Deseas pagar los sueldos de la plantilla de ${equipoUsuario} por $${sueldoSemestral.toLocaleString()}?`);

if (quierePagar) {
  if (presupuestoVisible >= sueldoSemestral) {
    restarPresupuesto(sueldoSemestral);
    alert(`💵 Sueldos del semestre pagados: $${sueldoSemestral.toLocaleString()} a la plantilla de ${equipoUsuario}.`);
  } else {
    alert("❌ No tienes suficiente presupuesto para pagar los sueldos. Se aplicará la penalización.");
    penalizarPorNoPagarSueldos();
  }
} else {
  penalizarPorNoPagarSueldos();
}

return;
  }

   simularCopaColombiaNuevoFormato();


  // 🔢 Calcular reclasificación anual
  let anual = Object.values(tablaAnual).map(e => ({
    ...e,
    pts: parseFloat((e.pts / 40).toFixed(2))
  }));

  // 📊 Ordenar tabla anual
  anual.sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));

  // 📉 Mostrar tabla anual antes de aplicar descenso
  mostrarTabla("tct", anual, `📉 Reclasificación - Descenso ${temporadaActual}`, false, [], true);

  let descendidos = anual.slice(-2).map(e => e.nombre);

  // ⚠️ Castigo por corrupción (dimayor detecta soborno)
/*
  if (castigoPorCorrupcion) {
    alert(`🚨 ESCÁNDALO: ${castigoPorCorrupcion} fue sancionado por corrupción. Desciende automáticamente.`);

    const idx = anual.findIndex(e => e.nombre === castigoPorCorrupcion);
    if (idx !== -1) {
      anual.splice(idx, 1);
    }

    descendidos.push(castigoPorCorrupcion);

    if (descendidos.length > 2) {
      const salvado = descendidos.shift(); // El mejor posicionado se salva
      alert(`🎉 ¡${salvado} se salvó del descenso gracias al castigo a ${castigoPorCorrupcion}!`);
    }

    castigoPorCorrupcion = null;
  }
*/

/*
if (castigoPorCorrupcion) {
  alert(`🚨 ESCÁNDALO: ${castigoPorCorrupcion} fue sancionado por corrupción. Desciende automáticamente.`);

  const idx = anual.findIndex(e => e.nombre === castigoPorCorrupcion);
  if (idx !== -1) {
    anual.splice(idx, 1);
  }

  descendidos.push(castigoPorCorrupcion);

  if (descendidos.length > 2) {
    const salvado = descendidos.shift(); // El mejor posicionado se salva
    alert(`🎉 ¡${salvado} se salvó del descenso gracias al castigo a ${castigoPorCorrupcion}!`);
  }

  // 👇💰 Multa económica si es el equipo del usuario
  if (castigoPorCorrupcion === equipoUsuario) {
    const multa = 10000000;
    presupuestoVisible -= multa;
    actualizarPresupuestoHTML();
    alert(`💸 Multa económica: se descontaron $${multa.toLocaleString()} por corrupción.`);
  }

  castigoPorCorrupcion = null;
}
*/

if (castigoPorCorrupcion) {
  alert(`🚨 ESCÁNDALO: ${castigoPorCorrupcion} fue sancionado por corrupción.\n💸 Multa de $20.000.000 y los jugadores pierden -15 de media.`);

  // Multa económica
  if (castigoPorCorrupcion === equipoUsuario) {
    presupuestoVisible -= 20000000;
    actualizarPresupuestoHTML();
  } else {
    if (!presupuestosEquipos[castigoPorCorrupcion]) {
      presupuestosEquipos[castigoPorCorrupcion] = 0;
    }
    presupuestosEquipos[castigoPorCorrupcion] -= 20000000;
  }

  // Penalización a la plantilla
  const plantilla = plantillasJugadores[castigoPorCorrupcion];
  if (plantilla) {
    plantilla.forEach(jugador => {
      jugador.media = Math.max(1, jugador.media - 15); // evita valores negativos
    });
  }

  castigoPorCorrupcion = null;
}

/*
  // ?? Castigo financiero al usuario
  if (alertaPresupuestoSinResolver) {
    alert("🚨 SANCIONADO: Descenso automático por no resolver deuda financiera.");

    const idx = anual.findIndex(e => e.nombre === equipoUsuario);
    if (idx !== -1) anual.splice(idx, 1);

    descendidos.push(equipoUsuario);

    if (descendidos.length > 2) {
      const salvado = descendidos.shift();
      alert(`🎉 ¡${salvado} se salvó gracias a tu castigo financiero!`);
    }

    alertaPresupuestoSinResolver = false;
  }
*/

// 🚨 Castigo financiero al usuario
if (alertaPresupuestoSinResolver) {
  alert("🚨 SANCIONADO: Tu equipo fue expulsado por no resolver su deuda financiera.");

  // Eliminar equipo del torneo (opcional, decorativo)
  const idx = anual.findIndex(e => e.nombre === equipoUsuario);
  if (idx !== -1) anual.splice(idx, 1);

  // Mostrar mensaje final de expulsión
  alert("📄 COMUNICADO OFICIAL DIMAYOR:\nTu club ha perdido su ficha profesional.\nHas sido eliminado de todas las competiciones.");

  // Reiniciar el juego completamente
  location.reload();

  // Reset la bandera
  alertaPresupuestoSinResolver = false;
}

  // ⬆️ Simular ascenso
  const { tablaAscenso, equiposQueAscienden, repechaje } = simularAscenso();
  const ascendidos = equiposSegunda.filter(e => equiposQueAscienden.includes(e.nombre));

  // 🔄 Actualizar equipos
  equipos = equipos.filter(e => !descendidos.includes(e)).concat(ascendidos.map(a => a.nombre));
  equiposSegunda = equiposSegunda
    .filter(e => !equiposQueAscienden.includes(e.nombre))
    .concat(descendidos.map(nombre => ({ nombre, fuerza: 60 })));

  // 📣 Mensaje final
  const mensajeRepechaje = 
    `\n🎟️ Repechaje de Ascenso:` +
    `\n  Ida: ${repechaje.equipo1} ${repechaje.resultadoIda} ${repechaje.equipo2}` +
    `\n  Vuelta: ${repechaje.equipo2} ${repechaje.resultadoVuelta} ${repechaje.equipo1}` +
    `\n  Global: ${repechaje.resultadoGlobal}` +
    `\n🏆 Ganador: ${repechaje.ganador}`;

  alert(
    `🔴 Descendieron: ${descendidos.join(", ")}` +
    `\n🟢 Ascienden: ${ascendidos.map(e => e.nombre).join(", ")}` +
    mensajeRepechaje
  );

  // ⚠️ Castigo especial: Soborno para debutar jugador
  if (decisionCorrupcionDebut) {
    alert("🚨 ESCÁNDALO: La junta directiva descubrió que aceptaste un pago para hacer debutar a un jugador sin mérito.");
    alert("📉 Has sido despedido como presidente del club.");
    alert("🔁 El juego se reiniciará.");
    decisionCorrupcionDebut = false;
    location.reload(); // Reiniciar el juego
    return;
  }


  // Sumar 1.5M al presupuesto del equipo del usuario
const montoDerechosTV = 1500000;

if (!presupuestosEquipos[equipoUsuario]) {
  presupuestosEquipos[equipoUsuario] = 0;
}

presupuestosEquipos[equipoUsuario] += montoDerechosTV;
sumarPresupuesto(montoDerechosTV);
alert("📺 Derechos de TV pagados");


// Sueldos semestrales (solo usuario)
let sueldoSemestral;
if (equiposPrimera.includes(equipoUsuario)) {
  sueldoSemestral = 2500000; // Primera A
} else {
  sueldoSemestral = 1000000; // Segunda
}

// Preguntar al usuario si quiere pagar
const quierePagar = confirm(`¿Deseas pagar los sueldos de la plantilla de ${equipoUsuario} por $${sueldoSemestral.toLocaleString()}?`);

if (quierePagar) {
  if (presupuestoVisible >= sueldoSemestral) {
    restarPresupuesto(sueldoSemestral);
    alert(`💵 Sueldos del 2do semestre pagados: $${sueldoSemestral.toLocaleString()} a la plantilla de ${equipoUsuario}.`);
  } else {
    alert("❌ No tienes suficiente presupuesto para pagar los sueldos. Se aplicará la penalización.");
    penalizarPorNoPagarSueldos();
  }
} else {
  penalizarPorNoPagarSueldos();
}



/*
// 💸 Sueldos semestrales (solo usuario)
let sueldoSemestral;
if (equiposPrimera.includes(equipoUsuario)) {
  sueldoSemestral = 2500000; // Primera A
} else {
  sueldoSemestral = 1000000; // Segunda
}

// Preguntar al usuario si quiere pagar
const quierePagar = confirm(`¿Deseas pagar los sueldos de la plantilla de ${equipoUsuario} por $${sueldoSemestral.toLocaleString()}?\n`);

if (quierePagar) {
  restarPresupuesto(sueldoSemestral);
  alert(`💵 Sueldos 2do semestre pagados: $${sueldoSemestral.toLocaleString()} a la plantilla de ${equipoUsuario}.`);
} else {
  // Penalización: -10 fuerza y -5 media a cada jugador del equipo del usuario
  const plantilla = plantillasJugadores[equipoUsuario];
  if (plantilla) {
    plantilla.forEach(jugador => {
      jugador.fuerza = Math.max(1, jugador.fuerza - 10); // fuerza mínima 1
      jugador.media = Math.max(1, jugador.media - 5);     // media mínima 1
    });
    alert("⚠️ No pagaste los sueldos. Todos los jugadores de tu plantilla perdieron -10 de fuerza y -5 de media.");
  }
}

*/


  // 🔁 Reiniciar temporada
  semestreActual = 1;
  temporadaActual++;
  tablaAnual = {};
  descensoPendiente = false;
  preguntaHechaEstaTemporada = false;

  // 🧹 Limpieza
  resetearVistacu();
  resetearVistafi();
  procesarRetirosYAltas();
  presupuestoNegativoDetectado = false;
}


function penalizarPorNoPagarSueldos() {
  const plantilla = plantillasJugadores[equipoUsuario];
  if (plantilla && plantilla.length > 0) {
    plantilla.forEach(jugador => {
      jugador.fuerza = Math.max(1, jugador.fuerza - 10);
      jugador.media = Math.max(1, jugador.media - 5);
    });
    alert("⚠️ No pagaste los sueldos. Todos los jugadores de tu plantilla perdieron -10 de fuerza y -5 de media.");
  }
}


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
      let texto = `📅 Fecha ${fechaIndex + 1} - Grupo ${g}\n`;

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

        texto += `${equipoLocal} ${partido.golesA} - ${partido.golesB} ${equipoVisita}\n`;
      });

      alert(texto.trim());
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

  resetearVistatct();
}


function simularFinal() {
  const [equipo1, equipo2] = finalistas;
  const ida = simularPartido(equipo1.nombre, equipo2.nombre);
  const vuelta = simularPartido(equipo2.nombre, equipo1.nombre);

  const goles1 = ida.golesA + vuelta.golesB;
  const goles2 = ida.golesB + vuelta.golesA;
  const campeon = goles1 > goles2 ? equipo1.nombre : equipo2.nombre;
  agregarTituloLiga(campeon);


  // 馃攰 Reproducir audio personalizado por equipo campe贸n
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
    "pereira": "audios/pereira.wav",
    "chico": "audios/chico.wav",
    "pasto": "audios/pasto.wav",
    "quindio": "audios/quindio.wav",
    // Agrega m谩s equipos seg煤n tus audios
  };

  const claveAudio = campeon.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (audiosPorEquipo[claveAudio]) {
    const audio = new Audio(audiosPorEquipo[claveAudio]);
    audio.play();
  }

  alert(`🎉 La DIMAYOR felicita al Club: ${campeon} por ser campeón 🥇⭐`);

  const sufijoSemestre = semestreActual === 1 ? "I" : "II";
  campeones.push(`🏆 ${temporadaActual}-${sufijoSemestre}: ${campeon}`);


  if (campeon === equipoUsuario) {
    ligasGanadasPorUsuario++;
    document.getElementById("titulos").innerText = `Titulo ganados: ${ligasGanadasPorUsuario}`;

    if (ligasGanadasPorUsuario === 13) {
      alert("🎉 🏆Felicidades! Has ganado 13 titulos y recibes el premio Gabriel Ochoa Uribe");
    }
  }

  // 馃弳 Verificar t铆tulos consecutivos de cualquier equipo
  if (campeon === ultimoCampeon) {
    equiposConsecutivos[campeon] = (equiposConsecutivos[campeon] || 1) + 1;
  } else {
    equiposConsecutivos[campeon] = 1;
  }

  // 馃摙 Alertas por racha consecutiva
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
      alert(`🚨 ¡${campeon} es Pentacampeon! 🏆🏆🏆🏆🏆`);
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
    <h3>🏆⭐ Campeón: ${escudoCampeon} ${campeon}</h3>
  `;

resetearVistacu();
}



function simularAscenso() {
  // Inicializar tabla
  let tablaAscenso = equiposSegunda.map(e => ({
    nombre: e.nombre,
    pts: 0,
    gf: 0,
    gc: 0
  }));

  // Simular todos los partidos (ida y vuelta)
  for (let i = 0; i < equiposSegunda.length; i++) {
    for (let j = 0; j < equiposSegunda.length; j++) {
      if (i !== j) {
        const equipoLocal = equiposSegunda[i].nombre;
        const equipoVisita = equiposSegunda[j].nombre;

        const { golesA, golesB, puntosA, puntosB } = simularPartido(equipoLocal, equipoVisita);

        const equipoA = tablaAscenso.find(t => t.nombre === equipoLocal);
        const equipoB = tablaAscenso.find(t => t.nombre === equipoVisita);

        equipoA.pts += puntosA;
        equipoA.gf += golesA;
        equipoA.gc += golesB;

        equipoB.pts += puntosB;
        equipoB.gf += golesB;
        equipoB.gc += golesA;
      }
    }
  }

  // Ordenar tabla por puntos y diferencia de gol
  tablaAscenso.sort((a, b) =>
    b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc)
  );

  const ascensoDirecto = tablaAscenso[0].nombre;
  const equipoRepe1 = tablaAscenso[1].nombre;
  const equipoRepe2 = tablaAscenso[2].nombre;

  // Mostrar tabla con solo el ascenso directo
  mostrarTabla(
    "segunda",
    tablaAscenso,
    `Prinera B - Reclasificación - Temporada ${temporadaActual}`,
    false,
    [ascensoDirecto]
  );

  // 馃彑锔� Repechaje ida y vuelta
  const ida = simularPartido(equipoRepe1, equipoRepe2); // equipoRepe1 local
  const vuelta = simularPartido(equipoRepe2, equipoRepe1); // equipoRepe2 local

  const golesTotal1 = ida.golesA + vuelta.golesB; // Total equipoRepe1
  const golesTotal2 = ida.golesB + vuelta.golesA; // Total equipoRepe2

  const golesVisita1 = vuelta.golesB; // equipoRepe1 como visitante
  const golesVisita2 = ida.golesB;    // equipoRepe2 como visitante

  let repechajeGanador;

  if (golesTotal1 > golesTotal2) {
    repechajeGanador = equipoRepe1;
  } else if (golesTotal2 > golesTotal1) {
    repechajeGanador = equipoRepe2;
  } else {
    // Empate en el global 鈫� desempate por goles de visitante
    if (golesVisita1 > golesVisita2) {
      repechajeGanador = equipoRepe1;
    } else if (golesVisita2 > golesVisita1) {
      repechajeGanador = equipoRepe2;
    } else {
      // Si sigue empatado, definir al azar (puedes cambiar esto por penales)
      repechajeGanador = Math.random() < 0.5 ? equipoRepe1 : equipoRepe2;
    }
  }

  const resultadoGlobal = `${golesTotal1} - ${golesTotal2}`;

  return {
    tablaAscenso,
    equiposQueAscienden: [ascensoDirecto, repechajeGanador],
    repechaje: {
      equipo1: equipoRepe1,
      equipo2: equipoRepe2,
      resultadoIda: `${ida.golesA} - ${ida.golesB}`,
      resultadoVuelta: `${vuelta.golesA} - ${vuelta.golesB}`,
      resultadoGlobal,
      golesVisita1,
      golesVisita2,
      ganador: repechajeGanador
    }
  };
}



function procesarRetirosYAltas() {
  const posiciones = ["Defensa", "Volante", "Delantero", "Medio", "Pivote"];
  
const nombres = [
  "Gómez", "Rodríguez", "Martínez", "López", "Pérez",
  "Gutiérrez", "Ramírez", "Castillo", "Moreno", "Romero",
  "Hernández", "Vargas", "Jiménez", "Torres", "Silva",
  "Ruiz", "Mendoza", "Cortés", "Delgado", "Serrano",
  "Navarro", "Cabrera", "Ortega", "Ríos", "Aguilar",
  "Suárez", "Peña", "Flores", "Campos", "Herrera",
  "García", "Fernández", "Sánchez", "Alvarez", "Molina",
  "Escamilla", "Zambrano", "Ibarra", "Esquivel", "Montoya",
  "Blanco", "Polo"
];

const nombresCortos = [
  "Juan", "Luis", "Carlos", "Andrés", "Mateo",
  "Diego", "Brayan", "Johan", "Kevin", "Camilo",
  "Daniel", "Sebastián", "Tomás", "Esteban", "Lucas",
  "Emilio", "Iván", "Fernando", "Mario", "Julián",
  "Samuel", "Benjamín", "Leonardo", "Alan", "Fabián",
  "Isaac", "Ángel", "Maximiliano", "David", "Elías",
  "José", "Antonio", "Miguel", "Eduardo", "Francisco",
  "Ulises", "Gael", "Bastián", "Axl", "Enzo",
  "Jorge", "Eithan"
];


  let log = "🔄 Retiros y Canteranos Ascendidos:\n";

for (const equipo in plantillasJugadores) {
  
let plantilla = plantillasJugadores[equipo];

// ✅ Siempre envejecer y procesar retiros
let porteroReemplazado = false;

plantilla = plantilla.map(jugador => {
  jugador.edad += 1;
  const probRetiro = calcularProbabilidadRetiro(jugador.edad);
  if (Math.random() < probRetiro) {
    if (jugador.posicion.toLowerCase() === "portero") {
      porteroReemplazado = true;
    }
    log += `👴 ${jugador.nombre} (${jugador.posicion}, ${jugador.edad}) se retira de ${equipo}\n`;
    return null;
  }
  return jugador;
}).filter(j => j !== null);



    // Verificar si queda un portero
    const tienePortero = plantilla.some(j => j.posicion.toLowerCase() === "portero");
    if (!tienePortero || porteroReemplazado) {
      const nuevoPortero = generarJugador("Portero", nombresCortos, nombres);
      plantilla.push(nuevoPortero);
      log += `🧤 ${nuevoPortero.nombre} (Portero, edad ${nuevoPortero.edad}, media ${nuevoPortero.media}) se une a ${equipo}\n`;
    }

    // Rellenar hasta 7 jugadores
    while (plantilla.length < 7) {
      const nuevo = generarJugador(null, nombresCortos, nombres);
      if (nuevo.promesa) {
        log += `⭐ ${nuevo.nombre} (${nuevo.posicion}, edad ${nuevo.edad}, media ${nuevo.media}) se une a ${equipo} como promesa\n`;
      }
      plantilla.push(nuevo);
    }

    plantillasJugadores[equipo] = plantilla;
  }

  alert(log);

   /*También envejece a los jugadores libres
jugadoresLibres.forEach(j => j.edad++); */
}

// Probabilidad de retiro según edad
function calcularProbabilidadRetiro(edad) {
  if (edad < 34) return 0;
  if (edad === 34) return 0;
  if (edad === 35) return 0.02;
  if (edad === 36) return 0.03;
  if (edad === 37) return 0.08;
  if (edad === 38) return 0.14;
  if (edad === 39) return 0.18;
  return 0.20; // 40 o más
}

// Genera un jugador aleatorio
function generarJugador(posicionFija, nombresCortos, nombres) {
  const posiciones = ["Defensa", "Volante", "Delantero","Medio","Pivote"];
  const nombre = `${nombresCortos[Math.floor(Math.random() * nombresCortos.length)]} ${nombres[Math.floor(Math.random() * nombres.length)]}`;
  const edad = Math.floor(Math.random() * 5) + 18;

  // 3% chance de ser promesa
  const esPromesa = Math.random() < 0.03;
  const media = esPromesa
    ? Math.floor(Math.random() * 5) + 70  // 70–74
    : Math.floor(Math.random() * 10) + 58; // 58–67

  const posicion = posicionFija || posiciones[Math.floor(Math.random() * posiciones.length)];

  return {
    nombre,
    edad,
    media,
    posicion,
    promesa: esPromesa
  };
}









function actualizarHistorial() {
  const lista = document.getElementById("listaHistorial");
  lista.innerHTML = "";

  campeones.forEach(c => {
    // Extraemos el nombre del campe贸n
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


function resetearVistatct() {
  document.getElementById("tct").innerHTML = "";
}

function resetearVistacu() {
  document.getElementById("cuadrangulares").innerHTML = "";
}

function resetearVistafi() {
  document.getElementById("final").innerHTML = "";
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
  document.getElementById("equipoUsuario").value = "";
  document.getElementById("resultado").value = "";
  actualizarHistorial();
  document.getElementById("botones").style.display = "block";
}


function inicializarSelectorEquipos() {
  const select = document.getElementById("equipoUsuario");

  // Opción por defecto (no selecciona ningún equipo)
  const opcionInicial = document.createElement("option");
  opcionInicial.disabled = true;
  opcionInicial.selected = true;
  opcionInicial.value = "";
  opcionInicial.textContent = "Seleccioná tu equipo";
  select.appendChild(opcionInicial);

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
      fuerzaJugador = equiposSegunda.find(e => e.nombre === equipoUsuario)?.fuerza || 63;
    }

    seleccionarEquipo(equipoUsuario); // ✅ Mostrar presupuesto después de la elección
  });
}


/*
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
      fuerzaJugador = equiposSegunda.find(e => e.nombre === equipoUsuario)?.fuerza || 63;

    }

    
  });
}
*/

window.onload = () => {
  inicializarSelectorEquipos();
};



/*
window.onload = () => {
  inicializarSelectorEquipos();


     if (!equipoUsuario) {
    document.getElementById("Presupuesto").textContent = "Presupuesto: $0";
  }
};

*/