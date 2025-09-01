//EQUIPOS DE PRIMERA 
let equiposPrimera = [
  "Nacional", "Millonarios", "América", "Cali", "Junior", "Santa Fe", "Tolima", "Medellín",
  "Once Caldas", "Pereira", "Alianza", "Bucaramanga", "La Equidad", "Envigado", "Pasto",
  "Águilas", "Chico", "Fortaleza", "Llaneros", "Union M."
];

//EQUIPOS DE SEGUNDA +FUERZA
let equiposSegunda = [
  { nombre: "Jaguares", fuerza: 63 },
  { nombre: "Real Cartagena", fuerza: 63 },
  { nombre: "Cucuta", fuerza: 63 },
  { nombre: "Huila", fuerza: 62 },
  { nombre: "Patriotas", fuerza: 62 },
  { nombre: "Real Cundi", fuerza: 61 },
  { nombre: "Inter Palmira", fuerza: 61 },
  { nombre: "Leones", fuerza: 59 },
  { nombre: "Tigres", fuerza: 59 },
  { nombre: "Quindio", fuerza: 59 },
  { nombre: "Real Santander", fuerza: 58 },
  { nombre: "Orsomarso", fuerza: 58 },
  { nombre: "Boca Jrs. Cali", fuerza: 57 },
  {nombre: "Barranquilla", fuerza: 57 },
  {nombre: "Atlético FC", fuerza: 57 },
  { nombre: "Bogotá", fuerza: 56 }
  
];

//FUERZA EQUIPOS DE PRIMERA
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
  "Águilas": 64,
  "Fortaleza": 63, 
  "Llaneros": 63, 
  "Union M.": 63,
  "Chico": 63,
  "Envigado": 63
   
};

// RECUPERAR EL NOMBRE DEL PRESIDENTE
const nombrePresidente = localStorage.getItem("nombrePresidente") || "Presidente";

// MOSTRARLO en PANTALLA si TIENES un CONTENEDOR
const encabezado = document.getElementById("nombrePresidenteMostrar");
if (encabezado) {
  encabezado.textContent = `👔 Bienvenido, ${nombrePresidente}`;
}



//PLANTILLAS
const plantillasJugadores = {
  "Nacional": [
  { nombre: "D.Ospina", edad: 36, media: 73, posicion: "Portero" , foto: "img/jugadores/nacional/ospina.png"},
  { nombre: "H.Castillo", edad: 31, media: 68, posicion: "Portero" , foto: "img/jugadores/nacional/castillo.png"},

  { nombre: "A.Roman", edad: 29, media: 72, posicion: "Defensa" , foto: "img/jugadores/nacional/roman.png"},
  { nombre: "C.Candido", edad: 30, media: 68, posicion: "Defensa" , foto: "img/jugadores/nacional/candido.png"},
  { nombre: "W.Tesillo", edad: 35, media: 72, posicion: "Defensa" , foto: "img/jugadores/nacional/tesillo.png" },
  { nombre: "C.Haydar", edad: 24, media: 69, posicion: "Defensa" , foto: "img/jugadores/nacional/haydar.png"},

  { nombre: "E.Cardona", edad: 32, media: 73, posicion: "Volante" , foto: "img/jugadores/nacional/cardona.png" },
  { nombre: "J.Bauza", edad: 29, media: 69, posicion: "Volante" , foto: "img/jugadores/nacional/bauza.png"},
  { nombre: "M.Uribe", edad: 34, media: 74, posicion: "Pivote" , foto: "img/jugadores/nacional/uribe.png"},
  { nombre: "J.Campuzano", edad: 29, media: 71, posicion: "Pivote" , foto: "img/jugadores/nacional/campuzano.png" },

  { nombre: "A.Morelos", edad: 29, media: 71, posicion: "Delantero" , foto: "img/jugadores/nacional/morelos.png"},
  { nombre: "M.Hinestroza", edad: 23, media: 77, posicion: "Delantero" , foto: "img/jugadores/nacional/marino.png"},
  { nombre: "M.Moreno", edad: 28, media: 76, posicion: "Delantero" , foto: "img/jugadores/nacional/marlos.png"},
  { nombre: "F.Batista", edad: 26, media: 68, posicion: "Delantero" , foto: "img/jugadores/nacional/batista.png"},
  { nombre: "B.Arce", edad: 27, media: 69, posicion: "Delantero" , foto: "img/jugadores/nacional/arce.png"}
],

"Millonarios": [
  { nombre: "G.de Amores", edad: 30, media: 68, posicion: "Portero"  , foto: "img/jugadores/millonarios/amores.png" },
  { nombre: "D.Novoa", edad: 36, media: 65, posicion: "Portero"  , foto: "img/jugadores/millonarios/novoa.png"},

  { nombre: "H.Palacios", edad: 32, media: 69, posicion: "Defensa"  , foto: "img/jugadores/millonarios/helibelton.png"},
  { nombre: "A.Llinás", edad: 27, media: 72, posicion: "Defensa" , foto: "img/jugadores/millonarios/llinas.png" },
  { nombre: "D.Banguero", edad: 35, media: 68, posicion: "Defensa"  , foto: "img/jugadores/millonarios/banguero.png"},
  { nombre: "S.Mosquera", edad: 31, media: 69, posicion: "Defensa"  , foto: "img/jugadores/millonarios/mosquera.png"},
  { nombre: "J.Arias", edad: 32, media: 68, posicion: "Defensa" , foto: "img/jugadores/millonarios/jarias.png"},

  { nombre: "D.Mackalister", edad: 38, media: 70, posicion: "Volante"  , foto: "img/jugadores/millonarios/maca.png"},
  { nombre: "N.Arevalo", edad: 22, media: 69, posicion: "Pivote"  , foto: "img/jugadores/millonarios/arevalo.png"},
  { nombre: "B.Savio", edad: 31, media: 70, posicion: "Volante"  , foto: "img/jugadores/millonarios/savio.png"},

  { nombre: "Leo Castro", edad: 33, media: 72, posicion: "Delantero" , foto: "img/jugadores/millonarios/leo.png" },
  { nombre: "S.Giordana", edad: 30, media: 69, posicion: "Delantero"  , foto: "img/jugadores/millonarios/giordana.png"},
  { nombre: "A.Castro", edad: 31, media: 67, posicion: "Delantero" , foto: "img/jugadores/millonarios/alex.png" },
  { nombre: "Beckham C.", edad: 21, media: 68, posicion: "Delantero" , foto: "img/jugadores/millonarios/beckham.png"},
  { nombre: "C.Cañozales", edad: 26, media: 66, posicion: "Delantero"  , foto: "img/jugadores/millonarios/canozales.png"}
],

"América": [
  { nombre: "J.Soto", edad: 31, media: 69, posicion: "Portero"  , foto: "img/jugadores/america/soto.png"},
  { nombre: "S.Silva", edad: 26, media: 64, posicion: "Portero"  , foto: "img/jugadores/america/silva.png"},

  { nombre: "Y.Candelo", edad: 33, media: 69, posicion: "Defensa"  , foto: "img/jugadores/america/candelo.png"},
  { nombre: "N.Bocanegra", edad: 38, media: 68, posicion: "Defensa" , foto: "img/jugadores/america/bocanegra.png" },
  { nombre: "M.Mina", edad: 26, media: 66, posicion: "Defensa" , foto: "img/jugadores/america/mina.png" },
  { nombre: "C.Tovar", edad: 27, media: 67, posicion: "Defensa"  , foto: "img/jugadores/america/tovar.png"},
  { nombre: "J.Escobar", edad: 20, media: 65, posicion: "Defensa" , foto: "img/jugadores/america/josen.png"},

  { nombre: "R.Carrascal", edad: 27, media: 71, posicion: "Volante"  , foto: "img/jugadores/america/carrascal.png"},
  { nombre: "E.Balanta", edad: 32, media: 67, posicion: "Pivote" , foto: "img/jugadores/america/balanta.png" },
  { nombre: "L.Paz", edad: 36, media: 66, posicion: "Pivote" , foto: "img/jugadores/america/paz.png" },
  { nombre: "S.Navarro", edad: 25, media: 67, posicion: "Volante" , foto: "img/jugadores/america/navarro.png"},

  { nombre: "C.Barrios", edad: 27, media: 71, posicion: "Delantero"  , foto: "img/jugadores/america/barrios.png"},
  { nombre: "R.Holgado", edad: 30, media: 70, posicion: "Delantero" , foto: "img/jugadores/america/holgado.png" },
  { nombre: "J.Murillo", edad: 29, media: 72, posicion: "Delantero" , foto: "img/jugadores/america/murillo.png" },
  { nombre: "D.Borrero", edad: 23, media: 66, posicion: "Delantero"  , foto: "img/jugadores/america/borrero.png"}
],

"Junior": [
  { nombre: "M.Silveira", edad: 25, media: 71, posicion: "Portero"  , foto: "img/jugadores/junior/silveira.png"},
  { nombre: "J.Martinez", edad: 31, media: 67, posicion: "Portero" , foto: "img/jugadores/junior/jeferson.png" },

  { nombre: "J.Guerrero", edad: 24, media: 65, posicion: "Defensa"  , foto: "img/jugadores/junior/jhomier.png"},
  { nombre: "J.Peña", edad: 25, media: 67, posicion: "Defensa"  , foto: "img/jugadores/junior/zidane.png"},
  { nombre: "Y.Suarez", edad: 28, media: 67, posicion: "Defensa"  , foto: "img/jugadores/junior/yeison.png"},
  { nombre: "J.Baez", edad: 35, media: 69, posicion: "Defensa" , foto: "img/jugadores/junior/baez.png" },
   { nombre: "D.Rivera", edad: 26, media: 65, posicion: "Defensa"  , foto: "img/jugadores/junior/drivera.png"},

  { nombre: "Y.Chara", edad: 34, media: 71, posicion: "Volante" , foto: "img/jugadores/junior/chara.png" },
  { nombre: "D.Moreno", edad: 33, media: 68, posicion: "Pivote"  , foto: "img/jugadores/junior/didier.png"},
  { nombre: "G.Celis", edad: 32, media: 68, posicion: "Pivote" , foto: "img/jugadores/junior/celis.png" },
  { nombre: "C.Esparragoza", edad: 26, media: 64, posicion: "Volante"  , foto: "img/jugadores/junior/esparragoza.png"},

  { nombre: "G.Paiva", edad: 27, media: 70, posicion: "Delantero"  , foto: "img/jugadores/junior/paiva.png"},
  { nombre: "C.Bacca", edad: 38, media: 70, posicion: "Delantero"  , foto: "img/jugadores/junior/bacca.png"},
  { nombre: "S.Rodriguez", edad: 28, media: 68, posicion: "Delantero"  , foto: "img/jugadores/junior/titi.png"},
  { nombre: "T.Gutierrez", edad: 40, media: 69, posicion: "Delantero" , foto: "img/jugadores/junior/teo.png" }
],

"Santa Fe": [
  { nombre: "A.Marmolejo", edad: 33, media: 73, posicion: "Portero"  , foto: "img/jugadores/santafe/marmolejo.png"},
  { nombre: "W.Asprilla", edad: 26, media: 66, posicion: "Portero"  , foto: "img/jugadores/santafe/weimar.png"},

  { nombre: "E.Perlaza", edad: 36, media: 68, posicion: "Defensa"  , foto: "img/jugadores/santafe/elvis.png"},
  { nombre: "V.Moreno", edad: 30, media: 67, posicion: "Defensa"  , foto: "img/jugadores/santafe/victor.png"},
  { nombre: "J.Sosa", edad: 23, media: 67, posicion: "Defensa"  , foto: "img/jugadores/santafe/sosa.png"},
  { nombre: "I.Scarpeta", edad: 29, media: 68, posicion: "Defensa"  , foto: "img/jugadores/santafe/scarpeta.png"},

  { nombre: "Y.Velasquez", edad: 25, media: 68, posicion: "Pivote" , foto: "img/jugadores/santafe/yilmar.png" },
  { nombre: "D.Torres", edad: 35, media: 68, posicion: "Pivote"  , foto: "img/jugadores/santafe/danito.png"},
  { nombre: "A.Zapata", edad: 30, media: 67, posicion: "Volante"  , foto: "img/jugadores/santafe/zapata.png"},
  { nombre: "E.Murillo", edad: 25, media: 67,   posicion: "Pivote" , foto: "img/jugadores/santafe/ewil.png" },

  { nombre: "H.Rodallega", edad: 40, media: 70, posicion: "Delantero"  , foto: "img/jugadores/santafe/hugol.png"},
  { nombre: "Angelo R.", edad: 36, media: 67,   posicion: "Delantero" , foto: "img/jugadores/santafe/angelo.png" },
  { nombre: "O.Frasica", edad: 32, media: 69, posicion: "Delantero"  , foto: "img/jugadores/santafe/frasika.png"},
  { nombre: "H.Mosquera", edad: 30, media: 71, posicion: "Delantero"  , foto: "img/jugadores/santafe/santimosquera.png"}
],

 "Cali": [
  { nombre: "A.Rodriguez", edad: 24, media: 69, posicion: "Portero", foto: "img/jugadores/cali/alejo.png" },
  { nombre: "M.Espindola", edad: 27, media: 64, posicion: "Portero" , foto: "img/jugadores/cali/espindola.png"},

  { nombre: "F.Viafara", edad: 33, media: 68, posicion: "Defensa", foto: "img/jugadores/cali/viafara.png" },
  { nombre: "G.Corujo", edad: 28, media: 68, posicion: "Defensa" , foto: "img/jugadores/cali/corujo.png"},
  { nombre: "J.Varela", edad: 27, media: 67, posicion: "Defensa", foto: "img/jugadores/cali/varela.png" },
  { nombre: "F.Aguilar", edad: 32, media: 66, posicion: "Defensa" , foto: "img/jugadores/cali/aguilar.png"},
  { nombre: "J.Quiñones", edad: 35, media: 66, posicion: "Defensa" , foto: "img/jugadores/cali/juliqui.png"},

  { nombre: "A.Colorado", edad: 26, media: 68, posicion: "Pivote" , foto: "img/jugadores/cali/colorado.png"},
  { nombre: "Y.Gordillo", edad: 33, media: 67, posicion: "Pivote" , foto: "img/jugadores/cali/gordillo.png"},
  { nombre: "Yani Q.", edad: 23, media: 66, posicion: "Pivote", foto: "img/jugadores/cali/yani.png" },
  { nombre: "J.Reina", edad: 36, media: 67, posicion: "Volante", foto: "img/jugadores/cali/reina.png" },
  { nombre: "J.Martinez", edad: 23, media: 67, posicion: "Volante" , foto: "img/jugadores/cali/johanm.png"},

  { nombre: "A.Estupiñan", edad: 31, media: 68, posicion: "Delantero" , foto: "img/jugadores/cali/andrey.png"},
  { nombre: "F.Mimbacas", edad: 23, media: 64, posicion: "Delantero", foto: "img/jugadores/cali/mimbacas.png" },
  { nombre: "A.Hurtado", edad: 38, media: 66, posicion: "Delantero" , foto: "img/jugadores/cali/aviles.png"}
],

"Medellín": [
  { "nombre": "W.Aguerre", "edad": 32, "media": 71, "posicion": "Portero"  , foto: "img/jugadores/dim/aguerre.png"},
  { "nombre": "E.Chaux", "edad": 33, "media": 67, "posicion": "Portero" , foto: "img/jugadores/dim/chaux.png" },

  { "nombre": "J.Ortiz", "edad": 26, "media": 68, "posicion": "Defensa"  , foto: "img/jugadores/dim/ortiz.png"},
  { "nombre": "D.Londoño", "edad": 30, "media": 67, "posicion": "Defensa"  , foto: "img/jugadores/dim/londono.png"},
  { "nombre": "F.Torijano", "edad": 36, "media": 66, "posicion": "Defensa" , foto: "img/jugadores/dim/torijano.png" },
  { "nombre": "K.Mantilla", "edad": 22, "media": 67, "posicion": "Defensa" , foto: "img/jugadores/dim/kmantilla.png" },
  
  { "nombre": "J.Barrera", "edad": 29, "media": 68, "posicion": "Volante" , foto: "img/jugadores/dim/jarlan.png" },
  { "nombre": "E.Mena", "edad": 27, "media": 67, "posicion": "Volante" , foto: "img/jugadores/dim/esneyder.png" },
  { "nombre": "L.Berrio", "edad": 27, "media": 67, "posicion": "Volante" , foto: "img/jugadores/dim/leider.png" },
  { "nombre": "J.Alvarado", "edad": 26, "media": 66, "posicion": "Pivote" , foto: "img/jugadores/dim/alvarado.png" },
  { "nombre": "Baldomero P.", "edad": 33, "media": 66, "posicion": "Volante" , foto: "img/jugadores/dim/baldomero.png" },

  { "nombre": "Jader V.", "edad": 25, "media": 67, "posicion": "Delantero"  , foto: "img/jugadores/dim/jader.png"},
  { "nombre": "F.Fydrizewski", "edad": 32, "media": 68, "posicion": "Delantero"  , foto: "img/jugadores/dim/polaco.png"},
  { "nombre": "F.Chaverra", "edad": 25, "media": 67, "posicion": "Delantero" , foto: "img/jugadores/dim/chaverra.png" },
  { "nombre": "L.Sandoval", "edad": 26, "media": 67, "posicion": "Delantero" , foto: "img/jugadores/dim/sandoval.png" }
],

"Tolima": [
  { nombre: "C.Fiermarin", edad: 27, media: 69, posicion:"Portero" , foto: "img/jugadores/tolima/fiermarin.png"  },
  { nombre: "N.Volpi", edad: 33, media: 67, posicion: "Portero" , foto: "img/jugadores/tolima/volpi.png"  },

  { nombre: "Y.Hurtado", edad: 28,  media: 69, posicion: "Defensa"  , foto: "img/jugadores/tolima/yhormar.png" },
  { nombre: "M.Torres", edad: 29,  media: 68, posicion: "Defensa" , foto: "img/jugadores/tolima/marlon.png"  },
  { nombre: "A.Angulo", edad: 29,   media: 67,  posicion: "Defensa", foto: "img/jugadores/tolima/aangulo.png" },
  { nombre: "S.Velasquez", edad: 22,  media: 65, posicion: "Defensa", foto: "img/jugadores/tolima/samuel.png"   },

  { nombre: "J.Nieto",  edad: 32,  media: 68, posicion: "Pivote", foto: "img/jugadores/tolima/nieto.png"   },
  { nombre: "J.Quiñonez", edad: 24, media: 67,   posicion: "Pivote" , foto: "img/jugadores/tolima/jader.png" },
  { nombre: "J.Torres", edad: 21, media: 65,   posicion: "Volante" , foto: "img/jugadores/tolima/tatay.png" },
  { nombre: "B.Rovira", edad: 29,  media: 68, posicion: "Volante"  , foto: "img/jugadores/tolima/rovira.png" },
  { nombre: "J.Gonzalez", edad: 23,  media: 68, posicion: "Volante"  , foto: "img/jugadores/tolima/jersson.png" },

  { nombre: "G.Lencina", edad: 27, media: 70, posicion: "Delantero" , foto: "img/jugadores/tolima/lencina.png" },
  { nombre: "J.Fuentes", edad: 20,  media: 65, posicion: "Delantero", foto: "img/jugadores/tolima/fuentes.png"   },
  { nombre: "A.Parra", edad: 28, media: 65,  posicion: "Delantero" , foto: "img/jugadores/tolima/parra.png"  }
],

"Once Caldas": [
  { nombre: "J.Aguirre", edad: 33, media: 66, posicion: "Portero" , foto: "img/jugadores/once/aguirre.png" },
  { nombre: "J.Parra", edad: 25, media: 66, posicion: "Portero" , foto: "img/jugadores/once/joan.png" },

  { nombre: "J.Castaño", edad: 26, media: 65, posicion: "Defensa" , foto: "img/jugadores/once/castano.png" },
  { nombre: "K.Cuesta", edad: 25, media: 65, posicion: "Defensa"  , foto: "img/jugadores/once/kcuesta.png"},
  { nombre: "J.Riquett", edad: 35, media: 66, posicion: "Defensa" , foto: "img/jugadores/once/riquett.png" },
  { nombre: "J.Cuesta", edad: 27, media: 67, posicion: "Defensa"  , foto: "img/jugadores/once/jcuesta.png"},

  { nombre: "A.Garcia", edad: 24, media: 64, posicion: "Volante"  , foto: "img/jugadores/once/agarcia.png"},
  { nombre: "Niche Sanchez", edad: 24, media: 67, posicion: "Volante"  , foto: "img/jugadores/once/niche.png"},
  { nombre: "I.Rojas", edad: 28, media: 66, posicion: "Pivote"  , foto: "img/jugadores/once/rojas.png"},
  { nombre: "M.Garcia", edad: 26, media: 67, posicion: "Volante" , foto: "img/jugadores/once/mateog.png" },

  { nombre: "D.Moreno", edad: 39, media: 70, posicion: "Delantero" , foto: "img/jugadores/once/dayro.png" },
  { nombre: "M.Zuleta", edad: 23, media: 67, posicion: "Delantero"  , foto: "img/jugadores/once/zuleta.png"},
  { nombre: "J.Zapata", edad: 25, media: 67, posicion: "Delantero" , foto: "img/jugadores/once/jefry.png" },
  { nombre: "Pipe Gomez", edad: 25, media: 66, posicion: "Delantero" , foto: "img/jugadores/once/pipe.png" },
  { nombre: "M.Barrios", edad: 34, media: 66, posicion: "Delantero"  , foto: "img/jugadores/once/michael.png"}
],

"Pereira": [
  { nombre: "S.Ichazo", edad: 33, media: 68, posicion: "Portero" , foto: "img/jugadores/pereira/ichazo.png" },
  { nombre: "F.Mosquera", edad: 26, media: 63, posicion: "Portero", foto: "img/jugadores/pereira/franklin.png"  },

  { nombre: "J.Moya", edad: 32, media: 68, posicion: "Defensa" , foto: "img/jugadores/pereira/moya.png" },
  { nombre: "J.S.Quintero", edad: 30, media: 68, posicion: "Defensa", foto: "img/jugadores/pereira/jsquintero.png"  },
  { nombre: "E.Velasco", edad: 33, media: 68, posicion: "Defensa", foto: "img/jugadores/pereira/velasco.png"  },
  { nombre: "W.Pacheco", edad: 30, media: 69, posicion: "Defensa" , foto: "img/jugadores/pereira/walmer.png" },

  { nombre: "Darwin Quintero", edad: 37, media: 72, posicion: "Volante" , foto: "img/jugadores/pereira/darwin.png" },
  { nombre: "V.Mejia", edad: 32, media: 66, posicion: "Pivote" , foto: "img/jugadores/pereira/mejia.png" },
  { nombre: "Y.Cabrera", edad: 34, media: 69, posicion: "Volante" , foto: "img/jugadores/pereira/yesus.png" },
  { nombre: "K.Osorio", edad: 31, media: 67, posicion: "Pivote", foto: "img/jugadores/pereira/kelvin.png"  },
  { nombre: "J.Rios", edad: 33, media: 67, posicion: "Pivote" , foto: "img/jugadores/pereira/jrios.png" },

  { nombre: "M.Perez", edad: 34, media: 67, posicion: "Delantero" , foto: "img/jugadores/pereira/marco.png" },
  { nombre: "Y.Quiñones", edad: 22, media: 66, posicion: "Delantero" , foto: "img/jugadores/pereira/yuber.png" },
  { nombre: "S.Merheg", edad: 18, media: 66, posicion: "Delantero" , foto: "img/jugadores/pereira/merheg.png" },
  { nombre: "G.Torres", edad: 29, media: 67, posicion: "Delantero" , foto: "img/jugadores/pereira/gtorres.png" }
],
  "Pasto": [
  { nombre: "D.Martinez", edad: 35, media: 64, posicion: "Portero", foto: "img/jugadores/pasto/dmarti.png"  },
  { nombre: "A.Cabezas", edad: 27, media: 65, posicion: "Portero", foto: "img/jugadores/pasto/cabezas.png"  },

  { nombre: "N.Gil", edad: 28, media: 65, posicion: "Defensa", foto: "img/jugadores/pasto/giln.png"  },
  { nombre: "J.Ossa", edad: 27, media: 66, posicion: "Defensa", foto: "img/jugadores/pasto/ossa.png"  },
  { nombre: "A.Alarcon", edad: 24, media: 65, posicion: "Defensa" , foto: "img/jugadores/pasto/alarcon.png" },
  { nombre: "S.Jimenez", edad: 27, media: 66, posicion: "Defensa" , foto: "img/jugadores/pasto/jimenez.png" },

  { nombre: "F.Jaramillo", edad: 29, media: 67, posicion: "Pivote" , foto: "img/jugadores/pasto/jaramillo.png" },
  { nombre: "K.Rendon", edad: 32, media: 66, posicion: "Volante", foto: "img/jugadores/pasto/rendon.png"  },
  { nombre: "G.Ritacco", edad: 32, media: 66, posicion: "Volante" , foto: "img/jugadores/pasto/ritacco.png" },

  { nombre: "F.Bone", edad: 29, media: 70, posicion: "Delantero", foto: "img/jugadores/pasto/bone.png"  },
  { nombre: "J.Rivas", edad: 28, media: 66, posicion: "Delantero", foto: "img/jugadores/pasto/rivas.png"  },
  { nombre: "D.Camacho", edad: 28, media: 66, posicion: "Delantero" , foto: "img/jugadores/pasto/camacho.png" },
  { nombre: "J.Valois", edad: 20, media: 64, posicion: "Delantero" , foto: "img/jugadores/pasto/valois.png" }
],

"Bucaramanga": [
  { nombre: "A.Quintana", edad: 30, media: 72, posicion: "Portero" , foto: "img/jugadores/bucaramanga/aldair.png" },
  { nombre: "L.Vasquez", edad: 29, media: 66, posicion: "Portero" , foto: "img/jugadores/bucaramanga/erney.png" },

  { nombre: "J.Mena", edad: 36, media: 66, posicion: "Defensa", foto: "img/jugadores/bucaramanga/mena.png"  },
  { nombre: "C.de las Salas", edad: 27, media: 65, posicion: "Defensa" , foto: "img/jugadores/bucaramanga/cdls.png" },
  { nombre: "J.Garcia", edad: 22, media: 65, posicion: "Defensa", foto: "img/jugadores/bucaramanga/joseg.png"  },
  { nombre: "C.Henao", edad: 36, media: 66, posicion: "Defensa", foto: "img/jugadores/bucaramanga/henao.png"  },
  { nombre: "C.Romaña", edad: 25, media: 65, posicion: "Defensa", foto: "img/jugadores/bucaramanga/romana.png"  },

  { nombre: "F.Sambueza", edad: 36, media: 71, posicion: "Volante", foto: "img/jugadores/bucaramanga/sambueza.png"  },
  { nombre: "F.Castro", edad: 33, media: 69, posicion: "Pivote", foto: "img/jugadores/bucaramanga/fabry.png"  },
  { nombre: "L.Florez", edad: 30, media: 64, posicion: "Pivote", foto: "img/jugadores/bucaramanga/leoflo.png"  },
  { nombre: "K.Londoño", edad: 31, media: 66, posicion: "Volante" , foto: "img/jugadores/bucaramanga/klondono.png" },

  { nombre: "L.Pons", edad: 35, media: 71, posicion: "Delantero", foto: "img/jugadores/bucaramanga/pons.png"  },
  { nombre: "Faber Gil", edad: 30, media: 67, posicion: "Delantero", foto: "img/jugadores/bucaramanga/gil.png"  },
  { nombre: "F.Hinestroza", edad: 35, media: 66, posicion: "Delantero" , foto: "img/jugadores/bucaramanga/fredy.png" },
  { nombre: "J.Vasquez", edad: 30, media: 66, posicion: "Delantero" , foto: "img/jugadores/bucaramanga/jhonva.png" }
],

"Alianza": [
  { nombre: "J.Chaverra", edad: 34, media: 66, posicion: "Portero" , foto: "img/jugadores/alianza/jchaverra.png" },
  { nombre: "J.Wallens", edad: 32, media: 64, posicion: "Portero", foto: "img/jugadores/alianza/wallens.png"  },

  { nombre: "P.Franco", edad: 34, media: 66, posicion: "Defensa" , foto: "img/jugadores/alianza/pefranco.png" },
  { nombre: "J.Figueroa", edad: 29, media: 66, posicion: "Defensa" , foto: "img/jugadores/alianza/figueroa.png" },
  { nombre: "J.Garcia", edad: 36, media: 65, posicion: "Defensa" , foto: "img/jugadores/alianza/jhongar.png" },
  { nombre: "K.Suarez", edad: 23, media: 66, posicion: "Defensa" , foto: "img/jugadores/alianza/kalazan.png" },

  { nombre: "R.Manjarrez", edad: 25, media: 67, posicion: "Volante" , foto: "img/jugadores/alianza/manjarrez.png" },
  { nombre: "L.F.Perez", edad: 29, media: 65, posicion: "Pivote", foto: "img/jugadores/alianza/perez.png"  },
  { nombre: "W.Fernandez", edad: 27, media: 66, posicion: "Defensa" , foto: "img/jugadores/alianza/wiston.png" },

  { nombre: "F.Pardo", edad: 35, media: 69, posicion: "Delantero" , foto: "img/jugadores/alianza/pardo.png" },
  { nombre: "C.Lucumi", edad: 25, media: 66, posicion: "Delantero" , foto: "img/jugadores/alianza/lucumi.png" },
  { nombre: "E.Torres", edad: 27, media: 65, posicion: "Delantero", foto: "img/jugadores/alianza/torres.png"  },
  { nombre: "A.del Valle", edad: 36, media: 66, posicion: "Delantero", foto: "img/jugadores/alianza/ayron.png"  }
],

"La Equidad": [
  { nombre: "E.Esteban", edad: 25, media: 68, posicion: "Portero" , foto: "img/jugadores/equidad/eduar.png" },
  { nombre: "Y.Gomez", edad: 25, media: 63, posicion: "Portero" , foto: "img/jugadores/equidad/yimy.png" },

  { nombre: "M.Rodas", edad: 27, media: 66, posicion: "Defensa" , foto: "img/jugadores/equidad/rodas.png" },
  { nombre: "C.Vivas", edad: 23, media: 66, posicion: "Defensa", foto: "img/jugadores/equidad/vivas.png"  },
  { nombre: "Y.Gomez", edad: 28, media: 66, posicion: "Defensa" , foto: "img/jugadores/equidad/yulian.png" },
  { nombre: "Y.Abonia", edad: 25, media: 64, posicion: "Defensa", foto: "img/jugadores/equidad/abonia.png"  },

  { nombre: "J.Castilla", edad: 20, media: 68, posicion: "Pivote" , foto: "img/jugadores/equidad/castilla.png" },
  { nombre: "J.Colorado", edad: 24, media: 66, posicion: "Pivote" , foto: "img/jugadores/equidad/colorado.png" },
  { nombre: "M.Monaco" , edad: 23, media: 67, posicion: "Volante", foto: "img/jugadores/equidad/monaco.png"  },
  { nombre: "J.Masllorens", edad: 24, media: 68, posicion: "Pivote" , foto: "img/jugadores/equidad/masllorens.png" },

  { nombre: "J.Valencia", edad: 21, media: 66, posicion: "Delantero", foto: "img/jugadores/equidad/valencia.png"  },
  { nombre: "J.Bolivar", edad: 23, media: 63, posicion: "Delantero" , foto: "img/jugadores/equidad/bolivar.png" },
  { nombre: "K.Parra", edad: 22, media: 66, posicion: "Delantero" , foto: "img/jugadores/equidad/parra.png" }
],

"Águilas": [
  { nombre: "W.Fariñez", edad: 27, media: 68, posicion: "Portero", foto: "img/jugadores/aguilas/farinez.png"  },
  { nombre: "S.Guerra", edad: 24, media: 64, posicion: "Portero" , foto: "img/jugadores/aguilas/guerra.png" },

  { nombre: "D.Hernandez", edad: 25, media: 65, posicion: "Defensa" , foto: "img/jugadores/aguilas/hernandez.png" },
  { nombre: "S.Rodriguez", edad: 24, media: 65, posicion: "Defensa" , foto: "img/jugadores/aguilas/sebastian.png" },
  { nombre: "D.Alfonzo", edad: 24, media: 67, posicion: "Defensa" , foto: "img/jugadores/aguilas/delvin.png" },
  { nombre: "J.Mena", edad: 20, media: 64, posicion: "Defensa" , foto: "img/jugadores/aguilas/mena.png" },

  { nombre: "J.Pineda", edad: 27, media: 67, posicion: "Volante", foto: "img/jugadores/aguilas/pineda.png"  },
  { nombre: "F.Lozano", edad: 32, media: 67, posicion: "Pivote" , foto: "img/jugadores/aguilas/lozano.png" },
  { nombre: "H.Mansilla", edad: 33, media: 65, posicion: "Pivote" , foto: "img/jugadores/aguilas/mansilla.png" },

  { nombre: "W.Morelo", edad: 38, media: 67, posicion: "Delantero", foto: "img/jugadores/aguilas/morelo.png"  },
  { nombre: "J.Rivaldo", edad: 21, media: 66, posicion: "Delantero" , foto: "img/jugadores/aguilas/rivaldo.png" },
  { nombre: "Y.Gonzalez", edad: 30, media: 69, posicion: "Delantero", foto: "img/jugadores/aguilas/yony.png"  }
],

"Fortaleza": [
  { nombre: "J.Garcia", edad: 20, media: 64, posicion: "Portero", foto: "img/jugadores/fortaleza/jordan.png"  },
  { nombre: "C.Santander", edad: 21, media: 60, posicion: "Portero", foto: "img/jugadores/fortaleza/santander.png"  },

  { nombre: "Y.Diaz", edad: 27, media: 65, posicion: "Defensa" , foto: "img/jugadores/fortaleza/yesid.png" },
  { nombre: "J.Marulanda", edad: 29, media: 66, posicion: "Defensa" , foto: "img/jugadores/fortaleza/marulanda.png" },
  { nombre: "L.Escorcia", edad: 21, media: 66, posicion: "Defensa" , foto: "img/jugadores/fortaleza/escorcia.png" },
  { nombre: "S.Valencia", edad: 29, media: 65, posicion: "Defensa" , foto: "img/jugadores/fortaleza/sval.png" },

  { nombre: "A.Ricaurte", edad: 33, media: 67, posicion: "Pivote" , foto: "img/jugadores/fortaleza/ricaurte.png" },
  { nombre: "L.Pico", edad: 33, media: 67, posicion: "Pivote" , foto: "img/jugadores/fortaleza/pico.png" },
  { nombre: "J.Velasquez", edad: 20, media: 68, posicion: "Volante" , foto: "img/jugadores/fortaleza/velasquez.png" },
  { nombre: "R.Pajaro", edad: 20, media: 68, posicion: "Pivote" , foto: "img/jugadores/fortaleza/pajaro.png" },

  { nombre: "Emilio A.", edad: 19, media: 65, posicion: "Delantero" , foto: "img/jugadores/fortaleza/emilio.png" },
  { nombre: "A.Amaya", edad: 24, media: 65, posicion: "Delantero" , foto: "img/jugadores/fortaleza/amaya.png" }
],

"Llaneros": [
  { nombre: "M.Ortega", edad: 30, media: 65, posicion: "Portero" , foto: "img/jugadores/llaneros/ortega.png" },
  { nombre: "R.Romaña", edad: 28, media: 60, posicion: "Portero" },

  { nombre: "F.Meza", edad: 33, media: 65, posicion: "Defensa", foto: "img/jugadores/llaneros/meza.png"  },
  { nombre: "O.Cabezas", edad: 28, media: 64, posicion: "Defensa" , foto: "img/jugadores/llaneros/cabezas.png" },
  { nombre: "H.Mena", edad: 24, media: 68, posicion: "Defensa" , foto: "img/jugadores/llaneros/mena.png" },

  { nombre: "C.Sierra", edad: 34, media: 68, posicion: "Pivote" , foto: "img/jugadores/llaneros/csierra.png" },
  { nombre: "Y.Goez", edad: 25, media: 66, posicion: "Pivote" , foto: "img/jugadores/llaneros/goez.png" },
  { nombre: "M.Sierra", edad: 30, media: 66, posicion: "Pivote" , foto: "img/jugadores/llaneros/msierra.png" },
  { nombre: "A.Lopez", edad: 22, media: 66, posicion: "Pivote", foto: "img/jugadores/llaneros/lopez.png"  },
   { nombre: "B.Urueña", edad: 31, media: 66, posicion: "Volante" , foto: "img/jugadores/llaneros/uruena.png" },

  { nombre: "M.Rangel", edad: 34, media: 67, posicion: "Delantero" , foto: "img/jugadores/llaneros/rangel.png" },
  { nombre: "D.Mantilla", edad: 28, media: 67, posicion: "Delantero" , foto: "img/jugadores/llaneros/mantilla.png" },
  { nombre: "E.Bodencer", edad: 25, media: 66, posicion: "Delantero" , foto: "img/jugadores/llaneros/bodencer.png" },
  { nombre: "J.Angulo", edad: 23, media: 67, posicion: "Delantero", foto: "img/jugadores/llaneros/jas.png"  }
 
],

"Union M.": [
  { nombre: "J.Mattalia", edad: 33, media: 65, posicion: "Portero"  , foto: "img/jugadores/union/mattalia.png"},
  { nombre: "M.Tasso", edad: 24, media: 64, posicion: "Portero"  , foto: "img/jugadores/union/tasso.png"},

  { nombre: "N.Ramos", edad: 26, media: 65, posicion: "Defensa"  , foto: "img/jugadores/union/ramos.png"},
  { nombre: "H.Urrego", edad: 32, media: 65, posicion: "Defensa"  , foto: "img/jugadores/union/urrego.png"},
  { nombre: "D.Mosquera", edad: 33, media: 64, posicion: "Defensa" , foto: "img/jugadores/union/dairon.png" },
  { nombre: "J.Lerma", edad: 22, media: 66, posicion: "Defensa"  , foto: "img/jugadores/union/lerma.png"},

  { nombre: "J.Sarmiento", edad: 25, media: 67, posicion: "Volante"  , foto: "img/jugadores/union/sarmiento.png"},
  { nombre: "F.Cantillo", edad: 27, media: 66, posicion: "Pivote" , foto: "img/jugadores/union/cantillo.png" },
   { nombre: "J.Congo", edad: 27, media: 65, posicion: "Pivote" , foto: "img/jugadores/union/congo.png" },

  { nombre: "R.Marquez", edad: 27, media: 66, posicion: "Delantero" , foto: "img/jugadores/union/marquez.png" },
  { nombre: "R.Hinojosa", edad: 26, media: 65, posicion: "Delantero" , foto: "img/jugadores/union/hinojosa.png" },
  { nombre: "M.Martinez", edad: 27, media: 65, posicion: "Delantero"  , foto: "img/jugadores/union/misael.png"}
],

"Chico": [
  { nombre: "D.Denis", edad: 33, media: 62, posicion: "Portero", foto: "img/jugadores/chico/denis.png" },
  { nombre: "R.Caicedo", edad: 31, media: 61, posicion: "Portero" , foto: "img/jugadores/chico/rogerio.png"},

  { nombre: "F.Salas", edad: 27, media: 64, posicion: "Defensa", foto: "img/jugadores/chico/salas.png" },
  { nombre: "E.Peralta", edad: 24, media: 64, posicion: "Defensa", foto: "img/jugadores/chico/peralta.png" },
  { nombre: "J.Ampudia", edad: 25, media: 65, posicion: "Defensa" , foto: "img/jugadores/chico/ampudia.png"},
  { nombre: "Y.Lopez", edad: 26, media: 63, posicion: "Defensa", foto: "img/jugadores/chico/yael.png" },

  { nombre: "D.Ramirez", edad: 24, media: 65, posicion: "Volante", foto: "img/jugadores/chico/delio.png" },
  { nombre: "E.Camargo", edad: 23, media: 65, posicion: "Pivote", foto: "img/jugadores/chico/camargo.png" },
  { nombre: "F.Cortes", edad: 22, media: 65, posicion: "Volante", foto: "img/jugadores/chico/cortes.png" },

  { nombre: "M.Gomez", edad: 28, media: 64, posicion: "Delantero", foto: "img/jugadores/chico/nike.png" },
  { nombre: "V.Hernandez", edad: 36, media: 69, posicion: "Delantero" , foto: "img/jugadores/chico/vladimir.png"},
  { nombre: "J.Molina", edad: 32, media: 67, posicion: "Delantero" , foto: "img/jugadores/chico/molina.png"}
],

"Envigado": [
  { nombre: "A.Tovar", edad: 19, media: 63, posicion: "Portero", foto: "img/jugadores/envigado/tovar.png" },
  { nombre: "J.P.Montoya", edad: 26, media: 65, posicion: "Portero" , foto: "img/jugadores/envigado/juanpa.png"},

  { nombre: "J.Gamboa", edad: 24, media: 63, posicion: "Defensa" , foto: "img/jugadores/envigado/gamboa.png"},
  { nombre: "D.Palacios", edad: 21, media: 62, posicion: "Defensa", foto: "img/jugadores/envigado/dipal.png" },
  { nombre: "Neymar U.", edad: 21, media: 63, posicion: "Defensa" , foto: "img/jugadores/envigado/neymar.png"},
  { nombre: "B.Agron", edad: 24, media: 62, posicion: "Defensa", foto: "img/jugadores/envigado/agron.png" },

  { nombre: "W.Hurtado", edad: 21, media: 62, posicion: "Volante" , foto: "img/jugadores/envigado/hurtado.png"},
  { nombre: "E.Lopez", edad: 25, media: 64, posicion: "Volante", foto: "img/jugadores/envigado/elopez.png" },
  { nombre: "L.Angulo", edad: 23, media: 64, posicion: "Pivote", foto: "img/jugadores/envigado/angulo.png" },

  { nombre: "S.Londoño", edad: 17, media: 64, posicion: "Delantero" , foto: "img/jugadores/envigado/londono.png"},
  { nombre: "B.Garces", edad: 32, media: 66, posicion: "Delantero" , foto: "img/jugadores/envigado/garces.png"},
  { nombre: "L.Diaz", edad: 21, media: 64, posicion: "Delantero", foto: "img/jugadores/envigado/diaz.png" }
],
  
  // Segunda División 
   "Jaguares": [
  { nombre: "J.Figueroa", edad: 32, media: 66, posicion: "Portero" , foto: "img/jugadores/jaguares/figue.png"},
  { nombre: "V.Brid", edad: 24, media: 63, posicion: "Portero", foto: "img/jugadores/jaguares/brid.png" },

  { nombre: "K.Saucedo", edad: 25, media: 64, posicion: "Defensa" , foto: "img/jugadores/jaguares/saucedo.png"},
  { nombre: "J.Altamiranda", edad: 25, media: 65, posicion: "Defensa", foto: "img/jugadores/jaguares/alta.png" },
  { nombre: "J.Herrera", edad: 24, media: 64, posicion: "Defensa", foto: "img/jugadores/jaguares/herrera.png" },

  { nombre: "J.Andrade", edad: 29, media: 64, posicion: "Volante", foto: "img/jugadores/jaguares/andrade.png" },
  { nombre: "J.Maza", edad: 30, media: 64, posicion: "Volante" , foto: "img/jugadores/jaguares/maza.png"},
  { nombre: "J.Roa", edad: 30, media: 65, posicion: "Pivote", foto: "img/jugadores/jaguares/roa.png" },
  { nombre: "D.Padilla", edad: 31, media: 63, posicion: "Pivote" , foto: "img/jugadores/jaguares/padilla.png"},

  { nombre: "D.Ceter", edad: 27, media: 66, posicion: "Delantero" , foto: "img/jugadores/jaguares/ceter.png"},
  { nombre: "K.Lenis", edad: 23, media: 65, posicion: "Delantero" , foto: "img/jugadores/jaguares/lenis.png"},
  { nombre: "A.Renteria", edad: 32, media: 68, posicion: "Delantero" , foto: "img/jugadores/jaguares/topo.png"}
],

"Real Cartagena": [
  { nombre: "K.Armesto", edad: 28, media: 64, posicion: "Portero", foto: "img/jugadores/cartagena/armesto.png" },
  { nombre: "A.Montes", edad: 25, media: 63, posicion: "Portero", foto: "img/jugadores/cartagena/montes.png" },

  { nombre: "C.Ramirez", edad: 37, media: 64, posicion: "Defensa", foto: "img/jugadores/cartagena/caliche.png" },
  { nombre: "A.Moralez", edad: 24, media: 65, posicion: "Defensa" , foto: "img/jugadores/cartagena/moralez.png"},
  { nombre: "G.Pedroza", edad: 31, media: 63, posicion: "Defensa" },
  { nombre: "J.Solarte", edad: 24, media: 64, posicion: "Defensa" },
  { nombre: "O.Acosta", edad: 25, media: 63, posicion: "Defensa" , foto: "img/jugadores/cartagena/onel.png"},

  { nombre: "J.Rodriguez", edad: 32, media: 66, posicion: "Pivote", foto: "img/jugadores/cartagena/jrod.png" },
  { nombre: "F.Acosta", edad: 31, media: 65, posicion: "Pivote" , foto: "img/jugadores/cartagena/acosta.png"},
  { nombre: "C.Marrugo", edad: 40, media: 68, posicion: "Volante", foto: "img/jugadores/cartagena/marrugo.png" },

  { nombre: "F.Montero", edad: 38, media: 69, posicion: "Delantero" , foto: "img/jugadores/cartagena/montero.png"},
  { nombre: "A.Melendez", edad: 28, media: 65, posicion: "Delantero" , foto: "img/jugadores/cartagena/melendez.png"},
  { nombre: "W.de la Rosa", edad: 32, media: 66, posicion: "Delantero", foto: "img/jugadores/cartagena/dlarosa.png" },
  { nombre: "M.Murillo", edad: 31, media: 64, posicion: "Delantero", foto: "img/jugadores/cartagena/murillo.png" }
],

"Cucuta": [
  { nombre: "J.Ramirez", edad: 28, media: 66, posicion: "Portero", foto: "img/jugadores/cucuta/ramirez.png" },
  { nombre: "R.Sanchez", edad: 41, media: 63, posicion: "Portero" , foto: "img/jugadores/cucuta/ramiro.png"},

  { nombre: "H.Plazas", edad: 32, media: 64, posicion: "Defensa", foto: "img/jugadores/cucuta/plazas.png" },
  { nombre: "L.Payares", edad: 35, media: 63, posicion: "Defensa" , foto: "img/jugadores/cucuta/payares.png"},
  { nombre: "D.Calcaterra", edad: 24, media: 64, posicion: "Defensa", foto: "img/jugadores/cucuta/calcaterra.png" },
  { nombre: "A.Torralvo", edad: 31, media: 65, posicion: "Defensa", foto: "img/jugadores/cucuta/amaury.png" },

  { nombre: "S.Tamara", edad: 29, media: 66, posicion: "Volante", foto: "img/jugadores/cucuta/tamara.png" },
  { nombre: "C.Alvarez", edad: 32, media: 68, posicion: "Volante", foto: "img/jugadores/cucuta/jopito.png" },
  { nombre: "L.Rios", edad: 27, media: 66, posicion: "Volante" , foto: "img/jugadores/cucuta/lucas.png"},

  { nombre: "M.Pisano", edad: 33, media: 68, posicion: "Delantero" , foto: "img/jugadores/cucuta/pisano.png"},
  { nombre: "J.Peralta", edad: 20, media: 65, posicion: "Delantero", foto: "img/jugadores/cucuta/peralta.png" },
  { nombre: "J.Agudelo", edad: 32, media: 65, posicion: "Delantero" , foto: "img/jugadores/cucuta/agudelo.png"}
],

"Huila": [
  { nombre: "J.Mendez", edad: 24, media: 65, posicion: "Portero" , foto: "img/jugadores/huila/mendez.png"},
  { nombre: "L.Mena", edad: 20, media: 59, posicion: "Portero" },

  { nombre: "L.Ospina", edad: 34, media: 65, posicion: "Defensa", foto: "img/jugadores/huila/lospina.png" },
  { nombre: "F.Arbelaez", edad: 28, media: 66, posicion: "Defensa" , foto: "img/jugadores/huila/arbelaez.png"},
  { nombre: "J.Rodriguez", edad: 22, media: 64, posicion: "Defensa" },
  { nombre: "K.Navas", edad: 22, media: 64, posicion: "Defensa" , foto: "img/jugadores/huila/killiam.png"},

  { nombre: "S.Hernandez", edad: 38, media: 66, posicion: "Volante" , foto: "img/jugadores/huila/shern.png"},
  { nombre: "F.Rodriguez", edad: 38, media: 63, posicion: "Pivote" , foto: "img/jugadores/huila/frod.png"},
  { nombre: "A.Ararat", edad: 19, media: 64, posicion: "Pivote" , foto: "img/jugadores/huila/ararat.png"},
   
  { nombre: "S.Lora", edad: 29, media: 65, posicion: "Delantero" , foto: "img/jugadores/huila/lora.png"},
  { nombre: "B.Castro", edad: 23, media: 63, posicion: "Delantero" , foto: "img/jugadores/huila/castro.png"},
  { nombre: "O.Duarte", edad: 30, media: 67, posicion: "Delantero", foto: "img/jugadores/huila/omar.png" }
],

"Patriotas": [
  { nombre: "J.Espitia", edad: 25, media: 63, posicion: "Portero", foto: "img/jugadores/patriotas/espitia.png" },
  { nombre: "J.Amaya", edad: 22, media: 60, posicion: "Portero" },

  { nombre: "M.Garavito", edad: 24, media: 65, posicion: "Defensa", foto: "img/jugadores/patriotas/garavito.png" },
  { nombre: "L.Renteria", edad: 19, media: 61, posicion: "Defensa" , foto: "img/jugadores/patriotas/renteria.png"},
  { nombre: "V.Perea", edad: 28, media: 64, posicion: "Defensa", foto: "img/jugadores/patriotas/perea.png" },

  { nombre: "M.Figueroa", edad: 27, media: 63, posicion: "Volante" , foto: "img/jugadores/patriotas/maclein.png"}, 
  { nombre: "K.Alvarez", edad: 20, media: 65, posicion: "Volante" , foto: "img/jugadores/patriotas/kevin.png"},
  
  { nombre: "B.Fernandez", edad: 33, media: 64, posicion: "Delantero" , foto: "img/jugadores/patriotas/brayan.png"},
  { nombre: "E.Sarria", edad: 24, media: 65, posicion: "Delantero" , foto: "img/jugadores/patriotas/sarria.png"}
],

"Real Cundi": [
  { nombre: "K.Cataño", edad: 22, media: 64, posicion: "Portero", foto: "img/jugadores/cundi/catano.png" },
  { nombre: "K.Hinestroza", edad: 20, media: 58, posicion: "Portero" },

  { nombre: "J.Viveros", edad: 21, media: 61, posicion: "Defensa" , foto: "img/jugadores/cundi/viveros.png" },
  { nombre: "J.Cajares", edad: 22, media: 62, posicion: "Defensa" , foto: "img/jugadores/cundi/cajares.png" },
  { nombre: "S.Barbosa", edad: 21, media: 61, posicion: "Defensa" , foto: "img/jugadores/cundi/barbosa.png" },

  { nombre: "M.Castaño", edad: 26, media: 64, posicion: "Volante" , foto: "img/jugadores/cundi/castano.png" },
  { nombre: "W.Davila", edad: 24, media: 62, posicion: "Volante" , foto: "img/jugadores/cundi/davila.png" },

  { nombre: "J.Asprilla", edad: 22, media: 66, posicion: "Delantero", foto: "img/jugadores/cundi/asprilla.png"  },
  { nombre: "A.Rocha", edad: 21, media: 66, posicion: "Delantero", foto: "img/jugadores/cundi/rocha.png"  }
],

"Inter Palmira": [
  { nombre: "J.Escobar", edad: 37, media: 59, posicion: "Portero" , foto: "img/jugadores/palmira/huber.png" },
  { nombre: "A.Cadavid", edad: 34, media: 62, posicion: "Portero", foto: "img/jugadores/palmira/arled.png"  },

  { nombre: "G.Perea", edad: 33, media: 64, posicion: "Defensa", foto: "img/jugadores/palmira/geisson.png"  },
  { nombre: "D.Quiñones", edad: 29, media: 65, posicion: "Defensa" , foto: "img/jugadores/palmira/raton.png" },
  { nombre: "Y.Gonzalez", edad: 35, media: 65, posicion: "Defensa", foto: "img/jugadores/palmira/yoiver.png"  },

  { nombre: "H.Angulo", edad: 25, media: 64, posicion: "Pivote", foto: "img/jugadores/palmira/hermes.png"  },
  { nombre: "C.Franco", edad: 21, media: 63, posicion: "Pivote" , foto: "img/jugadores/palmira/franco.png" },
  { nombre: "H.Suarez", edad: 31, media: 64, posicion: "Pivote" , foto: "img/jugadores/palmira/harlin.png" },
  { nombre: "J.Guzman", edad: 20, media: 64, posicion: "Volante" , foto: "img/jugadores/palmira/guzman.png" },

  { nombre: "J.Arango", edad: 34, media: 67, posicion: "Delantero" , foto: "img/jugadores/palmira/arango.png" },
  { nombre: "V.Ibarbo", edad: 35, media: 67, posicion: "Delantero", foto: "img/jugadores/palmira/ibarbo.png"  },
  { nombre: "D.Rodriguez", edad: 30, media: 65, posicion: "Delantero", foto: "img/jugadores/palmira/dario.png"  },
  { nombre: "D.Riascos", edad: 39, media: 64, posicion: "Delantero" , foto: "img/jugadores/palmira/duvier.png" }
],
  "Leones": [
    { nombre: "C.Holguin", edad: 21, media: 58, posicion: "Portero" , foto: "img/jugadores/leones/holguin.png" },
    { nombre: "J.Arboleda", edad: 20, media: 60, posicion: "Portero" , foto: "img/jugadores/leones/arboleda.png" },
    { nombre: "D.Marmolejo", edad: 21, media: 60, posicion: "Defensa", foto: "img/jugadores/leones/dmarmo.png"  },
    { nombre: "A.Ceballos", edad: 21, media: 59, posicion: "Volante", foto: "img/jugadores/leones/ceballos.png"  },
    { nombre: "J.P.Arteaga", edad: 21, media: 62, posicion: "Volante", foto: "img/jugadores/leones/jparte.png"  },
    { nombre: "J.Ibargüen", edad: 19, media: 58, posicion: "Delantero" , foto: "img/jugadores/leones/ibarguen.png" },
    { nombre: "C.Rodriguez", edad: 23, media: 61, posicion: "Delantero" , foto: "img/jugadores/leones/cristian.png" },
    
  ],
  "Tigres": [
    { nombre: "J.Huertas", edad: 24, media: 62, posicion: "Portero" },
    { nombre: "E.Arrechea", edad: 20, media: 60, posicion: "Defensa", foto: "img/jugadores/tigota/arrechea.png"  },
    { nombre: "C.Ibarra", edad: 22, media: 63, posicion: "Delantero" , foto: "img/jugadores/tigota/ibarra.png" },
    { nombre: "L.Palacios", edad: 20, media: 64, posicion: "Delantero", foto: "img/jugadores/tigota/palacios.png"  },
    { nombre: "M.Frigerio", edad: 28, media: 62, posicion: "Delantero" , foto: "img/jugadores/tigota/frigerio.png" }
  ],
  "Quindio": [
    { nombre: "M.Jimenez", edad: 29, media: 63, posicion: "Portero" , foto: "img/jugadores/quinboca/jimenez.png" },

    { nombre: "K.Hurtado", edad: 20, media: 58, posicion: "Defensa", foto: "img/jugadores/quinboca/hurtado.png"  },
    { nombre: "U.Rovira", edad: 19, media: 61, posicion: "Defensa", foto: "img/jugadores/quinboca/uberney.png"  },
    { nombre: "D.Palomeque", edad: 32, media: 63, posicion: "Defensa", foto: "img/jugadores/quinboca/palomeque.png"  },

    { nombre: "W.Arango", edad: 27, media: 64, posicion: "Volante", foto: "img/jugadores/quinboca/arango.png"  },
    { nombre: "Y.Torres", edad: 26, media: 63, posicion: "Pivote", foto: "img/jugadores/quinboca/yosimarc.png" },

    { nombre: "J.Lloreda", edad: 31, media: 64, posicion: "Delantero" , foto: "img/jugadores/quinboca/lloreda.png" },
    { nombre: "J.Rodriguez", edad: 29, media: 64, posicion: "Delantero" , foto: "img/jugadores/quinboca/joao.png" }
  ],
  "Bogotá": [
    { nombre: "W.Agamez", edad: 22, media: 57, posicion: "Portero" },
    { nombre: "D.Aguilar", edad: 21, media: 59, posicion: "Portero", foto: "img/jugadores/tigota/aguilar.png"  },
    { nombre: "S.Ruiz R.", edad: 28, media: 61, posicion: "Defensa", foto: "img/jugadores/tigota/srr.png"  },
    { nombre: "D.Montien", edad: 24, media: 60, posicion: "Defensa" },
    { nombre: "F.Moreno", edad: 20, media: 62, posicion: "Volante", foto: "img/jugadores/tigota/freilin.png"  },
    { nombre: "C.Huerfano", edad: 29, media: 63, posicion: "Delantero", foto: "img/jugadores/tigota/huerfano.png"  }
  ],
  "Boca Jrs. Cali": [
    { nombre: "E.Obando", edad: 23, media: 61, posicion: "Portero" , foto: "img/jugadores/quinboca/obando.png" },
    { nombre: "J.Monsalve", edad: 26, media: 63, posicion: "Delantero" , foto: "img/jugadores/quinboca/monsalve.png" },
    { nombre: "C.Paternina", edad: 21, media: 62, posicion: "Volante" },
    { nombre: "J.Jaramillo", edad: 20, media: 60, posicion: "Delantero", foto: "img/jugadores/quinboca/jaramillo.png"  },
    { nombre: "A.Andrade", edad: 36, media: 67, posicion: "Volante", foto: "img/jugadores/quinboca/rifle.png"  },
    { nombre: "H.Ortiz", edad: 21, media: 61, posicion: "Defensa", foto: "img/jugadores/quinboca/ortiz.png"  },
    { nombre: "J.Mendoza", edad: 22, media: 60, posicion: "Volante" , foto: "img/jugadores/quinboca/mendoza.png" }
  ],
  "Orsomarso": [
    { nombre: "B.Benitez", edad: 22, media: 59, posicion: "Portero", foto: "img/jugadores/orsonder/benitez.png" },
    { nombre: "D.Barrios", edad: 21, media: 62, posicion: "Defensa", foto: "img/jugadores/orsonder/deivi.png" },
    { nombre: "J.J.Salcedo", edad: 32, media: 66, posicion: "Delantero" , foto: "img/jugadores/orsonder/salcedo.png"},
    { nombre: "S.Girado", edad: 20, media: 65, posicion: "Delantero", foto: "img/jugadores/orsonder/girado.png" },
    { nombre: "A.Montaño", edad: 24, media: 60, posicion: "Volante", foto: "img/jugadores/orsonder/montano.png" }
  ],
  "Barranquilla": [
    { nombre: "J.Lemus", edad: 26, media: 58, posicion: "Portero" , foto: "img/jugadores/atlilla/lemus.png" },
    { nombre: "J.Caicedo", edad: 24, media: 62, posicion: "Defensa", foto: "img/jugadores/atlilla/josec.png"  },
    { nombre: "E.Herazo", edad: 16, media: 54, posicion: "Defensa" , foto: "img/jugadores/atlilla/herazo.png" },
    { nombre: "C.Peñate", edad: 20, media: 60, posicion: "Delantero" , foto: "img/jugadores/atlilla/penate.png" },
    { nombre: "L.Berdugo", edad: 23, media: 63, posicion: "Volante" , foto: "img/jugadores/atlilla/berdugo.png" },
    { nombre: "J.Velez", edad: 22, media: 65, posicion: "Pivote" , foto: "img/jugadores/atlilla/velez.png" },
    { nombre: "C.Cantillo", edad: 22, media: 62, posicion: "Pivote", foto: "img/jugadores/atlilla/cantillo.png"  },
    { nombre: "M.Bacca", edad: 21, media: 62, posicion: "Delantero" , foto: "img/jugadores/atlilla/bacca.png" }
  ],
  "Atlético FC": [
    { nombre: "J.Jaramillo", edad: 25, media: 60, posicion: "Portero", foto: "img/jugadores/atlilla/jaramillo.png"  },
    { nombre: "M.Suarez", edad: 26, media: 60, posicion: "Portero", foto: "img/jugadores/atlilla/suarez.png"  },
    { nombre: "J.Alomia", edad: 26, media: 61, posicion: "Defensa", foto: "img/jugadores/atlilla/alomia.png"  },
    { nombre: "N.Mosorongo", edad: 23, media: 60, posicion: "Volante" , foto: "img/jugadores/atlilla/mosorongo.png" },
    { nombre: "J.Farias", edad: 21, media: 59, posicion: "Delantero" , foto: "img/jugadores/atlilla/farias.png" },
    { nombre: "J.Escobar", edad: 27, media: 60, posicion: "Delantero", foto: "img/jugadores/atlilla/escobar.png"  },
    { nombre: "J.Aguas", edad: 24, media: 58, posicion: "Volante"},
    { nombre: "D.Reales", edad: 24, media: 60, posicion: "Defensa", foto: "img/jugadores/atlilla/reales.png" }   
  ],
  "Real Santander": [
    { nombre: "J.Mora", edad: 28, media: 60, posicion: "Portero", foto: "img/jugadores/orsonder/mora.png" },
    { nombre: "J.Pertuz", edad: 20, media: 60, posicion: "Defensa", foto: "img/jugadores/orsonder/pertuz.png" },
    { nombre: "S.Orejuela", edad: 24, media: 60, posicion: "Defensa", foto: "img/jugadores/orsonder/orejuela.png" },
    { nombre: "F.Mendoza", edad: 24, media: 60, posicion: "Volante", foto: "img/jugadores/orsonder/faiber.png" },
    { nombre: "S.Rey", edad: 20, media: 57, posicion: "Delantero" , foto: "img/jugadores/orsonder/rey.png"},
    { nombre: "L.Yanes", edad: 18, media: 59, posicion: "Delantero" , foto: "img/jugadores/orsonder/yanes.png"}
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

//PALMARES
let palmaresEquipos = {
  "Nacional": { ligas: 18, copas: 7, superligas:4 },
  "Millonarios": { ligas: 16, copas: 3, superligas:2 },
  "América": { ligas: 15, copas: 0, superligas:0},
  "Cali": { ligas: 10, copas: 1, superligas:1 },
  "Junior": { ligas: 10, copas: 2, superligas:2 },
  "Santa Fe": { ligas: 10, copas: 2, superligas:4 },
  "Tolima": { ligas: 3, copas: 1, superligas:1 },
  "Medellín": { ligas: 6, copas: 3, superligas:0},
  "Once Caldas": { ligas: 4, copas: 1 , superligas:0},
  "Pereira": { ligas: 1, copas: 0 , superligas:0},
  "Bucaramanga": { ligas: 1, copas: 0 , superligas:0},
  "Alianza": { ligas: 0, copas: 0 , superligas:0},
  "La Equidad": { ligas: 0, copas: 1, superligas:0 },
  "Pasto": { ligas: 1, copas: 0 , superligas:0},
  "Envigado": { ligas: 0, copas: 0 , superligas:0},
  "Chico": { ligas: 1, copas: 0 , superligas:0},
  "Águilas": { ligas: 0, copas: 0 , superligas:0},
  "Fortaleza": { ligas: 0, copas: 0 , superligas:0},
  "Llaneros": { ligas: 0, copas: 0 , superligas:0},
  "Union M.": { ligas: 1, copas: 0 , superligas:0},
  "Boca Jrs. cali": { ligas: 0, copas: 1, superligas:0 }
};

//ACTUALIZAR PALMARES 
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

function agregarTituloSuperliga(equipo) {
  if (!palmaresEquipos[equipo]) {
    palmaresEquipos[equipo] = { ligas: 0, copas: 0, superligas: 0 };
  }
  if (palmaresEquipos[equipo].superligas == null) palmaresEquipos[equipo].superligas = 0;
  palmaresEquipos[equipo].superligas++;
}

// Asegurar compatibilidad hacia atrás en todo el palmarés
Object.keys(palmaresEquipos).forEach(k => {
  if (palmaresEquipos[k].superligas == null) palmaresEquipos[k].superligas = 0;
});


//VARIABLES GLOBALES
let historialPuntos = {};
let temporadaActual = 2025;
let semestreActual = 1;
let descensoPendiente = false;
let tablaAnual = {};

// --- SUPERLIGA ---
let campeonesLigaPorTemporada = {}; // { 2025: { I: "Millonarios", II: "Junior" } }
let campeonesSuperliga = [];        // Historial [{nombre, temporada}]

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

let moralHinchada = 50; // valor inicial medio
let moralEvaluadaEsteSemestre = false;

//PRESUPUESTO
let presupuestosEquipos = {};

let presupuestoVisible = 0;

function sumarPresupuesto(monto) {
  presupuestoVisible += monto;
  document.getElementById("Presupuesto").textContent = `Presupuesto: $${presupuestoVisible.toLocaleString()}`;
actualizarPresupuestoHTML() ;
}

function restarPresupuesto(monto) {
  presupuestoVisible -= monto; // ✅ Puede quedar en negativo
  document.getElementById("Presupuesto").textContent = `Presupuesto: $${presupuestoVisible.toLocaleString()}`;

  verificarPresupuestoNegativo(); // ✅ Llamada automática
  actualizarPresupuestoHTML() 
}


let presupuestoNegativoDetectado = false;
let alertaPresupuestoSinResolver = false;

function verificarPresupuestoNegativo() {
  if (presupuestoVisible < 0 && !presupuestoNegativoDetectado && !palancaUsadaEstaCrisis) {
    presupuestoNegativoDetectado = true;

    const botonPalanca = document.getElementById("botonPalanca");
    if (botonPalanca) {
      botonPalanca.disabled = false;
      botonPalanca.classList.add("activo");
    }
  }
}

let palancaUsadaEstaCrisis = false;

function desactivarPalanca() {
  const boton = document.getElementById("botonPalanca");
  if (boton) {
    boton.disabled = true;
    boton.classList.remove("activo");
  }

  palancaUsadaEstaCrisis = true; // ⛔ evita que se active otra vez en la misma crisis
}



function actualizarPresupuestoHTML() {
  const elemento = document.getElementById("Presupuesto");

  if (elemento) {
    const valor = presupuestoVisible.toLocaleString();
    elemento.textContent = `Presupuesto: $${valor}`;

    // 🧼 Primero eliminamos todas las clases posibles
    elemento.classList.remove("presupuesto-rojo", "presupuesto-naranja", "presupuesto-verde");

    // 🎨 Luego agregamos solo la clase que corresponde
    if (presupuestoVisible < 0) {
      elemento.classList.add("presupuesto-rojo");
    } else if (presupuestoVisible === 0) {
      elemento.classList.add("presupuesto-naranja");
    } else {
      elemento.classList.add("presupuesto-verde");

      // 🔁 Resetear flags si saliste de la crisis
      desactivarPalanca();
      presupuestoNegativoDetectado = false;
      palancaUsadaEstaCrisis = false;
    }
  }
}

//MORAL EQUIPO
function ajustarMoralHinchada(resultado) {
  if (resultado === "ganado") moralHinchada = Math.min(100, moralHinchada + 5);
  else if (resultado === "empatado") moralHinchada = Math.min(100, moralHinchada + 1);
  else if (resultado === "perdido") moralHinchada = Math.max(0, moralHinchada - 5);

  // evaluarMoralHinchada(); // 👈 llamada aquí
}

/*
function actualizarMoralHinchadaUI() {
  const moralUI = document.getElementById("moralHinchada");
  let emoji = "🟡";
  if (moralHinchada >= 75) emoji = "🟢";
  else if (moralHinchada <= 30) emoji = "🔴";
  moralUI.textContent = `Moral Hinchada: ${emoji} ${moralHinchada}`;
}
*/

function actualizarMoralHinchadaUI() {
  const moralUI = document.getElementById("moralHinchada");
  const barra = document.getElementById("barraMoral");

  let emoji = "😬";
  let color = "#f1c40f"; // amarillo

  if (moralHinchada >= 80) {
    emoji = "🤩";
    color = "#27ae60"; // verde
  } else if (moralHinchada <= 30) {
    emoji = "🤬";
    color = "#c0392b"; // rojo
  }

  moralUI.textContent = `Moral Hinchada: ${emoji} ${moralHinchada}`;

  // Actualizar ancho y color de la barra
  barra.style.width = `${moralHinchada}%`;
  barra.style.backgroundColor = color;
}

function evaluarMoralHinchada() {
  if (moralEvaluadaEsteSemestre) return;

  if (moralHinchada < 10) {
    alert("❌ La hinchada te odia. Has sido despedido como presidente.");
    location.reload(); // El juego se reinicia, no se necesita flag
    return;
  }

  if (moralHinchada >= 85) {
    alert("🎉 La hinchada está feliz. Te respaldan totalmente. ¡Seguí así!");
  } else if (moralHinchada >= 60) {
    alert("📈 La hinchada está motivada. Están ilusionados con el equipo.");
  } else if (moralHinchada >= 10 && moralHinchada < 20) {
    alert("⚠️ La hinchada comienza a impacientarse. Necesitan resultados.");
  }

  moralEvaluadaEsteSemestre = true;
}


function obtenerFuerzaEquipo(nombre) {
  if (fuerzaEquipos[nombre] !== undefined) return fuerzaEquipos[nombre];

  const equipo2da = equiposSegunda.find(e => e.nombre === nombre);
  return equipo2da ? equipo2da.fuerza : 63; // valor por defecto si no existe
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

  // 🔄 Resetear moral al cambiar de equipo
  moralHinchada = 50;
  actualizarMoralHinchadaUI(); // 👈 para actualizar la interfaz

  const fuerza = obtenerFuerzaEquipo(nombreEquipo);
  presupuestoVisible = calcularPresupuestoPorFuerza(fuerza);
  actualizarPresupuestoHTML();
}


/*
function seleccionarEquipo(nombreEquipo) {
  equipoUsuario = nombreEquipo;

   const fuerza = obtenerFuerzaEquipo(nombreEquipo);

  presupuestoVisible = calcularPresupuestoPorFuerza(fuerza);
actualizarPresupuestoHTML();
}
*/

/*
function obtenerFuerzaTotal(nombreEquipo) {

  const base = fuerzaEquipos[nombreEquipo] || equiposSegunda.find(e => e.nombre === nombreEquipo)?.fuerza || 64;

  const plantilla = plantillasJugadores[nombreEquipo];

  if (!plantilla || plantilla.length < 5) return base; // Acepta 5 o más

  const tienePortero = plantilla.some(j => j.posicion.toLowerCase() === "portero");
  if (!tienePortero) return base;

  const mediaPromedio = plantilla.reduce((sum, j) => sum + j.media, 0) / plantilla.length;
  return base + Math.round(mediaPromedio);
}
*/

function obtenerFuerzaTotal(nombreEquipo) {
  const base = fuerzaEquipos[nombreEquipo] || equiposSegunda.find(e => e.nombre === nombreEquipo)?.fuerza || 64;
  const plantilla = plantillasJugadores[nombreEquipo];

  if (!plantilla || plantilla.length < 5) return base;

  const tienePortero = plantilla.some(j => j.posicion.toLowerCase() === "portero");
  if (!tienePortero) return base;

  const mediaPromedio = plantilla.reduce((sum, j) => sum + j.media, 0) / plantilla.length;

  // Mezcla: 70% fuerza base + 30% media promedio
  const fuerzaTotal = Math.round(base * 0.7 + mediaPromedio * 0.3);

  return fuerzaTotal;
}

// Probabilidad de gol seg煤n posici贸n
const probabilidadGolPorPosicion = {
  "portero": 0,
  "defensa": 2,
  "volante": 4,
  "pivote": 3,
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



const patrocinadoresDisponibles = [
  {
    nombre: "Postobón",
    duracion: 6,
    dinero: 6000000,
    fuerzaExtra: 1,
    efecto: () => {
      fuerzaEquipos[equipoUsuario] += 1;
    }
  },
  {
    nombre: "Betsson",
    duracion: 10,
    dinero: 5000000,
    fuerzaExtra: 0,
    efecto: () => {
      sumarPresupuesto(5000000);
    }
  },
  {
    nombre: "BetPlay",
    duracion: 4,
    dinero: 5000000,
    fuerzaExtra: 1,
    efecto: () => {
      fuerzaEquipos[equipoUsuario] += 1;
    }
  },
  {
    nombre: "Aguila",
    duracion: 4,
    dinero: 6000000,
    fuerzaExtra: 1,
    efecto: () => {
      fuerzaEquipos[equipoUsuario] += 1;
    }
  },
  {
    nombre: "Olimpica",
    duracion: 3,
    dinero: 2000000,
    fuerzaExtra: 0,
    efecto: () => {
       sumarPresupuesto(2000000);
    }
  },
  {
    nombre: "Pepsi",
    duracion: 2,
    dinero: 3000000,
    fuerzaExtra: 0,
    efecto: () => {
      sumarPresupuesto(1000000);
    }
  },
  {
    nombre: "Colanta",
    duracion: 6,
    dinero: 1000000,
    fuerzaExtra: 0,
    efecto: () => {
      sumarPresupuesto(3000000);
    }
  },
  {
  nombre: "Pool",
  duracion: 2,
  dinero: 1000000,
  fuerzaExtra: 0,
  efecto: () => {
    sumarPresupuesto(1000000);
  }
},
{
  nombre: "Wplay.co",
  duracion: 5,
  dinero: 3000000,
  fuerzaExtra: 0,
  efecto: () => {
    sumarPresupuesto(500000);
  }
},
{
  nombre: "Café Águila Roja",
  duracion: 3,
  dinero: 1000000,
  fuerzaExtra: 0,
  efecto: () => {
    sumarPresupuesto(1000000);
  }
},
{
    nombre: "Andina",
    duracion: 4,
    dinero: 6000000,
    fuerzaExtra: 1,
    efecto: () => {
      fuerzaEquipos[equipoUsuario] += 1;
    }
  },
{
   nombre: "Stake",
    duracion: 6,
    dinero: 8000000,
    fuerzaExtra: 1,
    efecto: () => {
      fuerzaEquipos[equipoUsuario] += 1;
    }
  },
{
   nombre: "Pastaslm",
    duracion: 2,
    dinero: 4000000,
    fuerzaExtra: 0,
    efecto: () => {
      sumarPresupuesto(500000);
    }
  },
{
  nombre: "Rivalo",
    duracion: 3,
    dinero: 2000000,
    fuerzaExtra: 0,
    efecto: () => {
      sumarPresupuesto(500000);
    }
  },
{
  nombre: "Megatiendas",
    duracion: 1,
    dinero: 500000,
    fuerzaExtra: 0,
    efecto: () => {
      sumarPresupuesto(500000);
    }
  }
];

let patrocinadorActivo = null;
let temporadasPatrocinioRestantes = 0;

function mostrarOpcionesPatrocinador() {
  if (patrocinadorActivo || document.getElementById("botonPatrocinador").disabled) return;

  let mensaje = "📢 Elige un patrocinador principal:\n";
  patrocinadoresDisponibles.forEach((p, i) => {
    mensaje += `${i + 1}. ${p.nombre} - Contrato por ${p.duracion} semestre(s)\n`;
  });

  const seleccion = prompt(mensaje + "Escribe el número del patrocinador:");
  const index = parseInt(seleccion) - 1;

  if (!patrocinadoresDisponibles[index]) {
    alert("❌ Selección inválida.");
    return;
  }

  const elegido = patrocinadoresDisponibles[index];

  const aceptar = confirm(`¿Aceptar a ${elegido.nombre} como patrocinador principal por ${elegido.duracion} semestre(s)?`);

  if (aceptar) {
  patrocinadorActivo = elegido;
  temporadasPatrocinioRestantes = elegido.duracion;
  sumarPresupuesto(elegido.dinero);
  elegido.efecto();
  document.getElementById("botonPatrocinador").disabled = true;
    

    // Mostrar logo en la camiseta
const logoImg = document.getElementById("logoOverlayImg");
if (logoImg) {
  const logoNombre = elegido.nombre
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_");  // e.g. "Café Águila Roja" -> "cafe_aguila_roja"

  logoImg.src = `logos/${logoNombre}.png`;
  logoImg.alt = elegido.nombre;

  // ⬇️ Aquí va la clase dinámica:
  logoImg.className = "logo-patrocinador " + logoNombre;

}
const escudoImg = document.getElementById("escudoEquipoImg");
if (escudoImg && equipoUsuario) {
  const escudoNombre = equipoUsuario
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_"); // Ej: Atlético Nacional → atletico_nacional

  escudoImg.src = `escudos/${escudoNombre}.png`;
  escudoImg.alt = equipoUsuario;
}

const camisetaImg = document.getElementById("camisetaImg");
if (camisetaImg && equipoUsuario) {
  const equipoNombre = equipoUsuario
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_"); // Ej: Atlético Nacional → atletico_nacional

  const rutaCamiseta = `images/camiseta_${equipoNombre}.png`;

  fetch(rutaCamiseta)
    .then(res => {
      camisetaImg.src = res.ok
        ? rutaCamiseta
        : "images/camiseta_default.png";
    })
    .catch(() => {
      camisetaImg.src = "images/camiseta_default.png";
    });
}

  // Mensajes personalizados
  const nombre = elegido.nombre.trim().toLowerCase();

if (nombre === "postobón") {
  alert("🥤 Postobón se convierte en el sabor oficial de tu club. Recibes $6M y +1 de fuerza.");
} else if (nombre === "betsson") {
  alert("🎰 Betsson apuesta a lo grande por ti. Recibes $10M");
} else if (nombre === "betplay") {
  alert("💵 BetPlay llega con fuerza. Recibes $5M y +1 de fuerza para el equipo.");
} else if (nombre === "aguila") {
  alert("🍻 Águila patrocina tu pasión. Recibes $6M y +1 de fuerza.");
} else if (nombre === "olimpica") {
  alert("📻 Olímpica apoya al talento local. Recibes $4M sin compromisos.");
} else if (nombre === "pepsi") {
  alert("🥤 Pepsi refresca tus finanzas. Recibes $4M por semestre del contrato.");
} else if (nombre === "colanta") {
  alert("🥛 Colanta le pone sabor a tu equipo. Recibes $4M por leche, amor y presupuesto.");
} else if (nombre === "pool") {
  alert("🎱 Pool te apoya en silencio. $2M para seguir compitiendo.");
} else if (nombre === "wplay.co") {
  alert("🎮 Wplay.co confía en tu proyecto. Recibes $3.5M por semestre.");
} else if (nombre === "café águila roja") {
  alert("☕ Café Águila Roja calienta tus finanzas. Recibes $2M por la energía nacional.");
} else if (nombre === "stake") {
  alert("🎲 Stake apuesta en grande por tu equipo. Recibes $8M y +1 de fuerza.");
} else if (nombre === "andina") {
  alert("🥤 Andina se convierte en tu hidratación oficial. Recibes $6M y +1 de fuerza.");
} else if (nombre === "pastaslm") {
  alert("🍝 Pastas La Muñeca alimenta tu sueño. Recibes $4.5M y potencia en cancha.");
} else if (nombre === "rivalo") {
  alert("🤝 Rivalo apuesta por tu equipo. Recibes $2.5M");
} else if (nombre === "megatiendas") {
  alert("🏪 Megatiendas respalda tu sueño. Recibes $1M y potencia en cancha. \"Donde comienza lo grande.\"");
} else {
  alert(`✅ ${elegido.nombre} ahora es tu patrocinador principal. Recibiste $${(elegido.dinero / 1e6)}M.`);
}
  }
}

function procesarTemporadaPatrocinio() {
  if (!patrocinadorActivo) return;

  temporadasPatrocinioRestantes--;

  if (temporadasPatrocinioRestantes <= 0) {
    const renovar = confirm(`🔁 El contrato con ${patrocinadorActivo.nombre} ha terminado. ¿Quieres renovar por otras ${patrocinadorActivo.duracion} temporadas?`);
    if (renovar) {
      temporadasPatrocinioRestantes = patrocinadorActivo.duracion;
      sumarPresupuesto(patrocinadorActivo.dinero);
      patrocinadorActivo.efecto();
      alert(`📢 Renovaste con ${patrocinadorActivo.nombre}.`);
    } else {
      alert(`🏁 ${patrocinadorActivo.nombre} ya no es tu patrocinador.`);
      patrocinadorActivo = null;
      document.getElementById("botonPatrocinador").disabled = false;
    }
  }
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

  // ✅ Ajustar moral antes del return
  if (equipoUsuario === equipoA || equipoUsuario === equipoB) {
    const esA = equipoUsuario === equipoA;
    const golesPropios = esA ? golesA : golesB;
    const golesRivales = esA ? golesB : golesA;

    if (golesPropios > golesRivales) ajustarMoralHinchada("ganado");
    else if (golesPropios < golesRivales) ajustarMoralHinchada("perdido");
    else ajustarMoralHinchada("empatado");

    actualizarMoralHinchadaUI();
  }

  return { golesA, golesB, puntosA, puntosB, goleadoresA, goleadoresB };
}




function verificarEleccionesPresidenciales() {
  const cadaCuantosAnios = 3;

  if ((temporadaActual - 2028) % cadaCuantosAnios !== 0 || temporadaActual < 2028) return;

  const base = moralHinchada;
  const azar = Math.floor(Math.random() * 20) - 10;
  const apoyoFinal = base + azar;

  alert("🗳️ ¡Es año de elecciones presidenciales!");

  if (apoyoFinal >= 50) {
    alert(`✅ Ganaste las elecciones con un apoyo del ${apoyoFinal}%. La hinchada te respalda.`);
  } else {
    alert(`❌ Perdiste las elecciones con solo ${apoyoFinal}%. Otro presidente toma el cargo...`);
    location.reload();
  }
}





function simularTCT() {
  if (!equipoUsuario) {
    alert("⚠️ Debes seleccionar un equipo antes de iniciar la simulación.");
    return;
  }

document.getElementById("mercadoFichajes").innerHTML = "";
document.getElementById("superliga").innerHTML = "";


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
       moralEvaluadaEsteSemestre = false;
       evaluarMoralHinchada();
       habilitarTodosLosDTs();
       verificarPresupuestoNegativo();
      
}

function simularMercadoFichajes() {
  const mercadoDiv = document.getElementById("mercadoFichajes");
  mercadoDiv.innerHTML = "<h3>💸 Mercado de Fichajes</h3><ul>";

  const equiposDisponibles = equiposPrimera.concat(equiposSegunda.map(e => e.nombre));
  const jugadoresMovibles = [];

  // Extrae todos los jugadores con equipo actual
  for (const equipo in plantillasJugadores) {
    const plantilla = plantillasJugadores[equipo];
    plantilla.forEach(jugador => {
      jugadoresMovibles.push({ ...jugador, equipoActual: equipo });
    });
  }

  // Realiza hasta 5 movimientos aleatorios
  const movimientos = 5;
  for (let i = 0; i < movimientos; i++) {
    
    let jugador;
for (let intento = 0; intento < 10; intento++) {
  const candidato = jugadoresMovibles[Math.floor(Math.random() * jugadoresMovibles.length)];

  let probabilidad = 0;
  if (candidato.edad <= 23) probabilidad = 0.8;
  else if (candidato.edad <= 30) probabilidad = 0.4;
  else probabilidad = 0.1;

  if (Math.random() < probabilidad) {
    jugador = candidato;
    break;
  }
}

if (!jugador) continue; // no se eligió jugador válido

  /*const jugador = jugadoresMovibles[Math.floor(Math.random() * jugadoresMovibles.length)]; */
    const nuevosEquipos = equiposDisponibles.filter(e => e !== jugador.equipoActual);
    const nuevoClub = nuevosEquipos[Math.floor(Math.random() * nuevosEquipos.length)];

/*
    const precio = Math.floor((jugador.media + 60) * 100000); // ejemplo: media 70 → 13M
*/

/*
    const mediaEscalada = Math.max(20, jugador.media);
const precio = Math.floor(
  20000 + ((mediaEscalada - 20) / 60) * (10000000 - 20000)
);
*/

    const precio = calcularPrecioPorMedia(jugador.media);

    const plantillaActual = plantillasJugadores[jugador.equipoActual];
    const plantillaDestino = plantillasJugadores[nuevoClub] || [];

    // Eliminar del equipo actual
    const idx = plantillaActual.findIndex(j => j.nombre === jugador.nombre);
    if (idx !== -1) plantillaActual.splice(idx, 1);

    // Agregar al nuevo club
    plantillaDestino.push(jugador);
    plantillasJugadores[nuevoClub] = plantillaDestino;

    // Registrar el movimiento
    let linea;
    if (nuevoClub === equipoUsuario) {
      if (presupuestoVisible >= precio) {
        restarPresupuesto(precio);
       /* linea = `<li>🟢 <b>${nuevoClub}</b> fichó a <b>${jugador.nombre}</b> por $${(precio / 1_000_000).toFixed(1)}M</li>`; */
       linea = `<li>🟢 <b>${nuevoClub}</b> fichó a <b>${jugador.nombre}</b> por ${formatearPrecio(precio)}</li>`;
      } else {
        linea = `<li>🔴 ${nuevoClub} quiso fichar a <b>${jugador.nombre}</b>, pero no tenía presupuesto suficiente.</li>`;
        plantillaDestino.pop(); // revertir
        plantillaActual.push(jugador);
        continue;
      }
    } else {
      linea = `<li>🔁 ${jugador.nombre} fue transferido de ${jugador.equipoActual} a ${nuevoClub} por  ${formatearPrecio(precio)} </li>`;
    }
     /*$${(precio / 1_000_000).toFixed(1)}M*/
    mercadoDiv.innerHTML += linea;
  }

  mercadoDiv.innerHTML += "</ul>";


// 🔻 VENTAS DESDE EL EQUIPO DEL USUARIO (con probabilidad y preferencia por jóvenes)
const plantillaUsuario = plantillasJugadores[equipoUsuario];
const posiblesCompradores = equipos.filter(e => e !== equipoUsuario);

const probabilidadDeVender = 0.5; // 50% chance de que el club del usuario haga ventas
if (Math.random() < probabilidadDeVender) {
  let ventasRealizadas = 0;
  const maxVentas = 2;

  // Filtrar jugadores que podrían venderse, según edad y posición
  const jugadoresVendibles = plantillaUsuario.filter(j => {
    const esPortero = j.posicion.toLowerCase() === "portero";
    const cantidadPorteros = plantillaUsuario.filter(p => p.posicion.toLowerCase() === "portero").length;

    if (esPortero && cantidadPorteros <= 1) return false;

    let probabilidad = 0;
    if (j.edad <= 23) probabilidad = 0.8;         // jóvenes muy buscados
    else if (j.edad <= 30) probabilidad = 0.4;    // edad media
    else probabilidad = 0.1;                      // veteranos raramente vendidos

    return Math.random() < probabilidad;
  });

  while (ventasRealizadas < maxVentas && jugadoresVendibles.length > 0) {
    const jugadorIndex = Math.floor(Math.random() * jugadoresVendibles.length);
    const jugador = jugadoresVendibles.splice(jugadorIndex, 1)[0];

    const comprador = posiblesCompradores[Math.floor(Math.random() * posiblesCompradores.length)];
    const precioVenta = calcularPrecioPorMedia(jugador.media);

    // Remover del equipo del usuario
    const idx = plantillaUsuario.findIndex(j => j.nombre === jugador.nombre);
    if (idx !== -1) plantillaUsuario.splice(idx, 1);

    // Agregar al nuevo equipo comprador
    if (!plantillasJugadores[comprador]) plantillasJugadores[comprador] = [];
    plantillasJugadores[comprador].push(jugador);

    // Sumar dinero al presupuesto del usuario
    sumarPresupuesto(precioVenta);

    // Mostrar el movimiento en pantalla
    mercadoDiv.innerHTML += `<li>🔻 <b>${jugador.nombre}</b> fue vendido por <b>${equipoUsuario}</b> a <b>${comprador}</b> por ${formatearPrecio(precio)}</li>`;

    ventasRealizadas++;
  }
} else {
  mercadoDiv.innerHTML += `<li>⚠️ No hubo ventas en ${equipoUsuario} esta vez.</li>`;
}
}

function formatearPrecio(valor) {
  if (valor >= 1_000_000) {
    return `$${(valor / 1_000_000).toFixed(1)}M`;
  } else {
    return `$${Math.round(valor / 1_000)}K`;
  }
}


function calcularPrecioPorMedia(media) {
  const tabla = [
    { media: 20, precio: 2000},
    { media: 30, precio: 3000 },
    { media: 40, precio: 4000},
    { media: 50, precio: 9000},
    { media: 60, precio: 350000 },
    { media: 65, precio: 550000 },
    { media: 70, precio: 1300000 },
    { media: 75, precio: 3000000 },
    { media: 77, precio: 5000000 },
    { media: 80, precio: 7000000 }
  ];

  // Límite inferior
  if (media <= 20) return 20000;
  // Límite superior
  if (media >= 80) return 7000000;

  // Buscar el rango más cercano
  for (let i = 0; i < tabla.length - 1; i++) {
    const actual = tabla[i];
    const siguiente = tabla[i + 1];

    if (media >= actual.media && media <= siguiente.media) {
      // Interpolación lineal entre dos puntos
      const proporcion = (media - actual.media) / (siguiente.media - actual.media);
      const precioInterpolado = actual.precio + proporcion * (siguiente.precio - actual.precio);
      return Math.floor(precioInterpolado);
    }
  }

  return 100000; // por seguridad
}







function mostrarTabla(divId, datos, titulo, destacarTop8 = false, lideres = [], marcarDescenso = false) {
  let html = `<h2>${titulo}</h2><table><tr><th>#</th><th>Equipo</th><th>PTS</th><th>DG</th></tr>`;

  datos.forEach((t, i) => {
    let claseFila = "";
    if (divId === "segunda" && i < 2) claseFila = "ascendido";
    else if (divId ==="segunda" && i < 6) claseFila = "repechaje";
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
/*
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
*/
// =========================
// 📌 Esquemas tácticos
// =========================
const esquemas = {
  "4-3-3": { defensas: 4, medios: 3, delanteros: 3 },
  "4-4-2": { defensas: 4, medios: 4, delanteros: 2 },
  "3-4-3": { defensas: 3, medios: 4, delanteros: 3 },
  "4-2-4": { defensas: 4, medios: 2, delanteros: 4 },
  "4-2-3-1": { defensas: 4, medios: 3, delanteros: 3 }
};

let esquemaActual = "4-3-3";

// =========================
// 📌 Procesar plantilla (se asegura de usar la que ya está modificada con retiros/ascensos)
// =========================
function procesarPlantilla(nombreEquipo) {
  return plantillasJugadores[nombreEquipo] || [];
}

// =========================
// 📌 Cambiar esquema táctico
// =========================
function cambiarEsquema(nuevoEsquema) {
  if (esquemas[nuevoEsquema]) {
    esquemaActual = nuevoEsquema;
    mostrarPlantilla(equipoUsuario); 
  }
}

// =========================
// 📌 Mostrar info del jugador (Modal)
// =========================
/*
function mostrarInfoJugador(jugador) {
  const modal = document.getElementById("modalJugador");
  const contenido = document.getElementById("modalContenidoJugador");

  let html = "";

  // 👇 Solo agrega la foto si existe
  if (jugador.foto) {
    html += `<img src="${jugador.foto}" alt="${jugador.nombre}" class="fotoJugadorModal">`;
  }

  html += `
    <h2>${jugador.nombre}</h2>
    <p><b>Posición:</b> ${jugador.posicion}</p>
    <p><b>Edad:</b> ${jugador.edad} años</p>
    <p><b>Media:</b> ${jugador.media}</p>
  `;

  contenido.innerHTML = html;
  modal.style.display = "flex";
}
*/

function mostrarInfoJugador(jugador) {
  const modal = document.getElementById("modalJugador");
  const contenido = document.getElementById("modalContenidoJugador");

  contenido.innerHTML = `
    <img src="${jugador.foto || 'img/jugadores/default.png'}" 
         alt="${jugador.nombre}" 
         class="fotoJugadorModal">
    <h2>${jugador.nombre}</h2>
    <p><b>Posición:</b> ${jugador.posicion}</p>
    <p><b>Edad:</b> ${jugador.edad} años</p>
    <p><b>Media:</b> ${jugador.media}</p>
  `;

  modal.style.display = "flex";
}


function cerrarModal() {
  document.getElementById("modalJugador").style.display = "none";
}

// =========================
// 📌 Mostrar plantilla en el campo
// =========================
function mostrarPlantilla(nombreEquipo) {
  if (!nombreEquipo) {
    const selector = document.getElementById("selectorEquipo");
    if (!selector) return alert("❓ Selector no encontrado.");
    nombreEquipo = selector.value;
  }

  const plantilla = procesarPlantilla(nombreEquipo); // 👈 siempre la plantilla procesada
  const contenedor = document.getElementById("alineacion") || document.getElementById("plantillaJugadores");

  if (!contenedor) {
    alert("❌ No hay contenedor para mostrar la plantilla.");
    return;
  }

  if (!plantilla.length) {
    contenedor.innerHTML = `<p>❌ Este equipo no tiene plantilla registrada.</p>`;
    return;
  }

  const esquema = esquemas[esquemaActual];

  // 👉 Titulares
  const porteroTitular = plantilla.filter(j => j.posicion.toLowerCase() === "portero")
                                  .sort((a, b) => b.media - a.media)[0];

  const defensasTitulares = plantilla.filter(j => j.posicion.toLowerCase() === "defensa")
                                     .sort((a, b) => b.media - a.media)
                                     .slice(0, esquema.defensas);

  const mediosTitulares = plantilla.filter(j => {
  const pos = j.posicion.toLowerCase();
  return pos.includes("volante") || pos.includes("pivote");
})
.sort((a, b) => b.media - a.media)
.slice(0, esquema.medios);


  const delanterosTitulares = plantilla.filter(j => j.posicion.toLowerCase().includes("delantero"))
                                       .sort((a, b) => b.media - a.media)
                                       .slice(0, esquema.delanteros);

  const titulares = [porteroTitular, ...defensasTitulares, ...mediosTitulares, ...delanterosTitulares].filter(Boolean);

  // 👉 Suplentes
  const suplentes = plantilla.filter(j => !titulares.includes(j));

  // 👉 Generar HTML
  let html = `
    <h3 class="campo">${nombreEquipo} - (${esquemaActual})</h3>
    <div class="campo">
      <div class="linea portero">
        ${porteroTitular ? `<div class="jugador titular" onclick='mostrarInfoJugador(${JSON.stringify(porteroTitular)})'>${porteroTitular.nombre}</div>` : ""}
      </div>
      <div class="linea defensa">
        ${defensasTitulares.map(j => `<div class="jugador titular" onclick='mostrarInfoJugador(${JSON.stringify(j)})'>${j.nombre}</div>`).join("")}
      </div>
      <div class="linea medio">
        ${mediosTitulares.map(j => `<div class="jugador titular" onclick='mostrarInfoJugador(${JSON.stringify(j)})'>${j.nombre}</div>`).join("")}
      </div>
      <div class="linea delantero">
        ${delanterosTitulares.map(j => `<div class="jugador titular" onclick='mostrarInfoJugador(${JSON.stringify(j)})'>${j.nombre}</div>`).join("")}
      </div>
    </div>

    <h4 class="suplentes-text">🪑 Suplentes</h4>
    <div class="suplentes">
      ${suplentes.map(j => 
        `<div class="jugador suplente" onclick='mostrarInfoJugador(${JSON.stringify(j)})'>${j.nombre} (${j.posicion})</div>`
      ).join("")}
    </div>

    <div class="selectorEsquema">
      ${Object.keys(esquemas).map(e => 
        `<button onclick="cambiarEsquema('${e}')">${e}</button>`
      ).join(" ")}
    </div>
  `;

  contenedor.innerHTML = html;
}





/*
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
*/

/*
function despedirYReemplazarDT() {
  const todosLosDTs = Object.entries(entrenadores)
    .map(([clave, obj]) => ({ clave, nombre: obj.nombre, imagen: obj.imagen }))
    .filter(dt => dt.nombre !== dtSeleccionado);

  const dtSaliente = dtSeleccionado; // Guarda el actual DT antes del cambio

  // Selecciona un nuevo DT al azar
  const nuevoDT = todosLosDTs[Math.floor(Math.random() * todosLosDTs.length)];
  dtSeleccionado = nuevoDT.nombre;

  // Actualiza el contenido de la interfaz
  resultado.textContent = `Entrenador asignado: ${nuevoDT.nombre}`;
  foto.src = nuevoDT.imagen;
  foto.alt = nuevoDT.nombre;
  foto.style.display = 'block';

  // Muestra mensaje de despedida y nuevo DT
  alert(`❌ ${dtSaliente} fue despedido tras malos resultados.\n📢 La directiva ha anunciado a ${nuevoDT.nombre} como nuevo entrenador.`);
}
*/

function despedirYReemplazarDT() {
  const todosLosDTs = Object.entries(entrenadores)
    .map(([clave, obj]) => ({ clave, nombre: obj.nombre, imagen: obj.imagen }));

  // Si ya hay DT, excluirlo de la elección
  const opcionesDisponibles = dtSeleccionado && dtSeleccionado !== "del club"
    ? todosLosDTs.filter(dt => dt.nombre !== dtSeleccionado)
    : todosLosDTs;

  // Si no hay DTs disponibles
  if (opcionesDisponibles.length === 0) {
    alert("⚠️ No hay entrenadores disponibles.");
    return;
  }

  const nuevoDT = opcionesDisponibles[Math.floor(Math.random() * opcionesDisponibles.length)];
  const dtSaliente = dtSeleccionado;

  // Asignar el nuevo DT
  dtSeleccionado = nuevoDT.nombre;

  // Actualizar en la interfaz
  resultado.textContent = `Entrenador asignado: ${nuevoDT.nombre}`;
  foto.src = nuevoDT.imagen;
  foto.alt = nuevoDT.nombre;
  foto.style.display = 'block';

  // Mensaje de acción
  if (!dtSaliente || dtSaliente === "del club") {
    alert(`📢 La junta directiva ha elegido a ${nuevoDT.nombre} como nuevo entrenador.`);
  } else {
    alert(`❌ ${dtSaliente} fue despedido tras los rumores.\n📢 La directiva ha anunciado a ${nuevoDT.nombre} como nuevo entrenador.`);
  }
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
    texto: "🧯 Los hinchas organizaron una protesta en el entrenamiento. ¿Reunirte con ellos?",
    si: () => {
      fuerzaEquipos[equipoUsuario] += 1;
      alert("🫱🤝🫲 Dialogaste con la hinchada. Subís +1 de fuerza por respaldo.");
    },
    no: () => {
      fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 2);
      alert("🙈 Ignoraste a los hinchas. Perdés -2 de fuerza.");
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
},
 {
  texto: "🎟️ La asistencia al estadio creció un 30% este semestre. La directiva te sugiere subir el precio de las entradas. ¿Aceptar?",
  si: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 3);
    alert("😡 Subiste los precios y los hinchas se sintieron traicionados. Muchos dejaron de asistir. Pierdes -3 de fuerza.");
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] += 1;
    alert("🙌 Mantuviste los precios populares. La hinchada está orgullosa y más comprometida. Ganas +1 de fuerza.");
  }
},
 {
  texto: "🎮 Un sponsor importante quiere lanzar un equipo de e-sports con tu escudo. Ofrecen $5M de patrocinio. ¿Aceptar?",
  si: () => {
    sumarPresupuesto(5000000);
    fuerzaEquipos[equipoUsuario] += 1;
    alert("📈 El proyecto e-sports elevó tu imagen y sumaste $5M. También ganas +1 de fuerza institucional.");
  },
  no: () => {
    alert("🚫 Rechazaste la propuesta gamer. El club sigue sin presencia digital.");
  }
},
{
  texto: "🏟️ Un festival musical quiere usar tu estadio durante el receso. Ofrecen $6M de alquiler. ¿Aceptar?",
  si: () => {
    sumarPresupuesto(6000000);
    alert("🎶 El evento fue un éxito. El club ganó $6 millones sin afectar la cancha.");
  },
  no: () => {
    alert("🤷 Rechazaste el alquiler. El estadio quedó vacío durante el receso… y sin ingresos.");
  }
},
{
  texto: "💼 Un grupo de empresarios quiere comprar el 15% del club por $12M. No intervendrán en decisiones deportivas. ¿Aceptar?",
  si: () => {
    sumarPresupuesto(12000000);
    alert("✅ Recibiste $12 millones sin ceder control deportivo. Gran negocio.");
  },
  no: () => {
    alert("❌ Rechazaste la oferta. Algunos en la junta creen que desaprovechaste una gran oportunidad.");
  }
},
 {
  texto: "⚖️ La Dimayor multó a tu club por incidentes con la hinchada. ¿Pagar $4M de sanción?",
  si: () => {
    restarPresupuesto(4000000);
    alert("💸 Pagaste la multa a Dimayor. Presupuesto reducido.");
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 2);
    alert("⚠️ No pagaste. La sanción fue deportiva: pierdes -2 de fuerza.");
  }
},
{
  texto: "🟥 La liga te penalizó por acumular tarjetas y comportamiento antideportivo. ¿Pagar multa de $3M?",
  si: () => {
    restarPresupuesto(3000000);
    alert("💸 Se descontaron $3M por sanción disciplinaria.");
  },
  no: () => {
    alert("🟨 Aceptaste el expediente. Te dejaron pasar esta vez sin castigo extra.");
  }
},
{
  texto: "📉 Una auditoría encontró fallas en tus reportes financieros. ¿Pagar $5M para evitar sanciones mayores?",
  si: () => {
    restarPresupuesto(5000000);
    alert("💰 Pagaste la auditoría. El club evitó problemas mayores.");
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 3);
    alert("🔍 Ocultaste el error. El escándalo afectó al equipo: -3 de fuerza.");
  }
},
{
  texto: "📺 La televisora te multó por no cumplir con entrevistas obligatorias. ¿Pagar $2M?",
  si: () => {
    restarPresupuesto(2000000);
    alert("🎙️ Pagaste la multa. Las relaciones con la prensa se mantienen.");
  },
  no: () => {
    alert("😶 Ignoraste el reclamo. El club queda en mala relación con los medios.");
  }
},
{
  texto: "🏟️ El estadio fue clausurado temporalmente por problemas de seguridad. ¿Pagar $6M para reabrirlo?",
  si: () => {
    restarPresupuesto(6000000);
    alert("🔓 Pagaste la adecuación del estadio. Se reabre para el próximo partido.");
  },
  no: () => {
    fuerzaEquipos[equipoUsuario] = Math.max(0, fuerzaEquipos[equipoUsuario] - 4);
    alert("🚧 Jugaste a puerta cerrada. El equipo sufre sin apoyo: -4 de fuerza.");
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

function activarPalanca() {
  if (presupuestoVisible >= 0) {
    alert("✅ No estás en crisis. La palanca solo se activa con presupuesto negativo.");
    return;
  }

  const preguntasCrisis = [
    {
      texto: "🏟️ ¿Vender el nombre del estadio a una marca por $10M?",
      si: () => {
        sumarPresupuesto(10000000);
        alert("💸 Vendiste los derechos del estadio. El club respira con $10 millones más.");
       desactivarPalanca() ;
        document.getElementById("botonPalanca").disabled = true;
      },
      no: () => {
        alert("😬 Mantuviste el nombre histórico. Pero la crisis sigue.");
      }
    },
    {
      texto: "👕 ¿Subastar camisetas históricas por $4M?",
      si: () => {
        sumarPresupuesto(4000000);
        alert("🧤 Vendiste reliquias. Doloroso pero útil. Sumas $4M.");
        desactivarPalanca() ;
        document.getElementById("botonPalanca").disabled = true;
      },
      no: () => {
        alert("😭 Decidiste conservar la historia. Aún sin fondos.");
      }
    },
    {
      texto: "🏫 ¿Alquilar parte del club para eventos y oficinas externas por $6M?",
      si: () => {
        sumarPresupuesto(6000000);
        alert("💼 Alquilaste espacio del club. Ganas $6M y calmas la crisis.");
        desactivarPalanca() ;
        document.getElementById("botonPalanca").disabled = true;
      },
      no: () => {
        alert("🤷‍♂️ Rechazaste la oferta. El déficit continúa.");
      }
    },
    {
      texto: "🐷 ¿Vender el bus oficial del plantel y usar uno alquilado por ahora? Ganas $3M.",
      si: () => {
        sumarPresupuesto(3000000);
        alert("🚐 Vendiste el bus oficial. Sumas $3M pero el club quedó sin vehículo propio.");
        desactivarPalanca() ;
        document.getElementById("botonPalanca").disabled = true;
      },
      no: () => {
        alert("🚫 Rechazaste la venta. El bus se mantiene, pero no hay ingreso.");
      }
    },
   {
  texto: "👔 Estás en números rojos. Una opción rápida es despedir personal de la junta directiva para ahorrar costos. ¿Recortar sueldos?",
  si: () => {
    presupuestoVisible += 10000000;
    actualizarPresupuestoHTML();
    alert("📉 Recortaste personal y recuperaste $10 millones. El club sigue, aunque con menos apoyo administrativo.");
  },
  no: () => {
    alertaPresupuestoSinResolver = true;
    alert("⚠️ No resolviste el déficit. Esto puede traer problemas al club en el futuro...");
  }
}
  ];

  // Elegir una aleatoria
  const pregunta = preguntasCrisis[Math.floor(Math.random() * preguntasCrisis.length)];
  const confirmar = confirm(pregunta.texto);
  if (confirmar) pregunta.si();
  else pregunta.no();
}







let campeonesCopaColombia = []; // Historial de campeones

// Función para mostrar modal en lugar de alert
function mostrarModal(mensaje) {
  return new Promise(resolve => {
    const modal = document.getElementById("modalCopa");
    const modalTexto = document.getElementById("modalTexto");
    const modalBtn = document.getElementById("modalBtn");

    modalTexto.textContent = mensaje;
    modal.style.display = "flex"; // Mostrar modal (flex para centrar)

    modalBtn.onclick = () => {
      modal.style.display = "none";
      resolve();
    };
  });
}

async function simularCopaColombiaNuevoFormato() {
  await mostrarModal("⚽ Copa Colombia: ¡Comienza el torneo nacional!");

  const mezclaPrimera = [...equiposPrimera];
  const mezclaSegunda = [...equiposSegunda.map(e => e.nombre)];
  shuffleArray(mezclaPrimera);
  shuffleArray(mezclaSegunda);

  // FASE 1 - Segunda + 4 de primera
  const fase1Primera = mezclaPrimera.slice(0, 4);
  const fase1Equipos = [...mezclaSegunda, ...fase1Primera]; // 20 equipos

  // FASE 2 - Resto de primera
  const fase2Equipos = mezclaPrimera.slice(4); // 16 equipos

  // FASE 1 - Grupos (4 de 5 equipos)
  const grupos = [[], [], [], []];
  shuffleArray(fase1Equipos);
  for (let i = 0; i < fase1Equipos.length; i++) {
    grupos[i % 4].push(fase1Equipos[i]);
  }

  const clasificadosFase1 = [];
  for (let index = 0; index < grupos.length; index++) {
    const grupo = grupos[index];
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
    await mostrarModal(texto.trim());
  }

  // FASE 2 - Eliminatoria directa entre los 16 restantes de primera
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

  await mostrarModal("🧩 Fase 2 - Eliminatoria directa (1/2)\n\n" + textoF2.slice(0, 4).join("\n\n"));
  await mostrarModal("🧩 Fase 2 - Eliminatoria directa (2/2)\n\n" + textoF2.slice(4).join("\n\n"));

  // FASE 3 - Octavos de final
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

  await mostrarModal("🔶 Fase 3 - Octavos (1/2)\n\n" + textoF3.slice(0, 4).join("\n\n"));
  await mostrarModal("🔶 Fase 3 - Octavos (2/2)\n\n" + textoF3.slice(4).join("\n\n"));

  // FASE FINAL - Cuartos, Semis y Final
  const avanzar = async (ronda, equipos) => {
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
    await mostrarModal(texto.trim());
    return ganadores;
  };

  const semifinalistas = await avanzar("Cuartos de final", cuartofinalistas);
  const finalistas = await avanzar("Semifinal", semifinalistas);
  const campeon = (await avanzar("🏆 Final", finalistas))[0];
  agregarTituloCopa(campeon);
  campeonesCopaColombia.push({ nombre: campeon, temporada: temporadaActual });

  if (campeon === equipoUsuario) {
    sumarPresupuesto(250000);
    await mostrarModal(`🎉 ¡Felicidades! ${campeon} es el campeón de la Copa Colombia\n💰 Recibes $250.000 de premio.`);
  } else {
    await mostrarModal(`🏆 ${campeon} es el campeón de la Copa Colombia`);
  }
}



/*
function simularCopaColombiaNuevoFormato() {
  alert("⚽ Copa Colombia: ¡Comienza el torneo nacional!");

  const mezclaPrimera = [...equiposPrimera];
  const mezclaSegunda = [...equiposSegunda.map(e => e.nombre)];
  shuffleArray(mezclaPrimera);
  shuffleArray(mezclaSegunda);

  // FASE 1 - Segunda + 4 de primera
  const fase1Primera = mezclaPrimera.slice(0, 4);
  const fase1Equipos = [...mezclaSegunda, ...fase1Primera]; // 20 equipos

  // FASE 2 - Resto de primera
  const fase2Equipos = mezclaPrimera.slice(4); // 16 equipos

  // FASE 1 - Grupos (4 de 5 equipos)
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

  // FASE 2 - Eliminatoria directa entre los 16 restantes de primera
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

    //alert("🧩 Fase 2 - Eliminatoria directa\n\n" + textoF2.join("\n\n")); 
  alert("🧩 Fase 2 - Eliminatoria directa (1/2)\n\n" + textoF2.slice(0, 4).join("\n\n"));
alert("🧩 Fase 2 - Eliminatoria directa (2/2)\n\n" + textoF2.slice(4).join("\n\n"));
  // FASE 3 - Octavos de final
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

   //alert("🔶 Octavos de final\n\n" + textoF3.join("\n\n")); 
  alert("🔶 Fase 3 - Octavos (1/2)\n\n" + textoF3.slice(0, 4).join("\n\n"));
alert("🔶 Fase 3 - Octavos (2/2)\n\n" + textoF3.slice(4).join("\n\n"));

  // FASE FINAL - Cuartos, Semis y Final
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
  agregarTituloCopa(campeon);
  campeonesCopaColombia.push({ nombre: campeon, temporada: temporadaActual });

  if (campeon === equipoUsuario) {
    sumarPresupuesto(250000);
    alert(`🎉 ¡Felicidades! ${campeon} es el campeón de la Copa Colombia\n💰 Recibes $250.000 de premio.`);
  } else {
    alert(`🏆 ${campeon} es el campeón de la Copa Colombia`);
  }
}
*/

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

function simularSuperliga() {
  const cont = document.getElementById("superliga");
  cont.innerHTML = ""; // limpiar antes

  const temporadaBase = temporadaActual - 1;
  const registro = campeonesLigaPorTemporada[temporadaBase];

  if (!registro || !registro.I || !registro.II) {
    cont.innerHTML = `<p>ℹ️ No hay datos completos de campeones ${temporadaBase} para disputar la Superliga.</p>`;
    return;
  }

  const eq1 = registro.I;
  const eq2 = registro.II;

  let html = `<h2>🏟️ Superliga ${temporadaBase}</h2>`;
  html += `<p><strong>${eq1}</strong> vs <strong>${eq2}</strong> (ida y vuelta)</p>`;

  const ida = simularPartido(eq1, eq2);    // eq1 local
  const vuelta = simularPartido(eq2, eq1); // eq2 local

  const total1 = ida.golesA + vuelta.golesB;
  const total2 = ida.golesB + vuelta.golesA;

  let ganador;
  if (total1 !== total2) {
    ganador = total1 > total2 ? eq1 : eq2;
  } else {
    ganador = Math.random() < 0.5 ? eq1 : eq2; // desempate simple
  }

  html += `
    <p>📄 Ida: ${eq1} ${ida.golesA}-${ida.golesB} ${eq2}</p>
    <p>📄 Vuelta: ${eq2} ${vuelta.golesA}-${vuelta.golesB} ${eq1}</p>
    <p><strong>Global:</strong> ${total1} - ${total2}</p>
    <h3>🏆 Campeón Superliga ${temporadaBase}: ${ganador}</h3>
  `;

  cont.innerHTML = html;

  // Palmarés + historial
  agregarTituloSuperliga(ganador);
  campeonesSuperliga.push({ nombre: ganador, temporada: temporadaBase });

  // Premio opcional
  if (ganador === equipoUsuario) {
    sumarPresupuesto(200000);
    cont.innerHTML += `<p>💰 Premio Superliga para ${ganador}: $200.000</p>`;
  }
}

function mostrarPalmares() {
  const contenedor = document.getElementById("palmares") || document.createElement("div");
  contenedor.id = "palmares";
  contenedor.innerHTML = ""; // Limpia antes
let equiposOrdenados = Object.entries(palmaresEquipos)
  .map(([nombre, { ligas, copas, superligas }]) => ({
    nombre,
    ligas,
    copas,
    superligas,
    total: ligas + copas + (superligas || 0)
  }))
  .sort((a, b) => b.total - a.total || b.ligas - a.ligas); // Orden por títulos

  let html = `<h2>🏆 Palmarés Histórico</h2>`;

  equiposOrdenados.forEach((equipo, i) => {
    const nombreLimpio = equipo.nombre
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ /g, "_");

    const escudo = `<img src="escudos/${nombreLimpio}.png" alt="${equipo.nombre}" class="escudo" width="40">`;

    html += `
      <div class="card-palmares">
        <div class="header">
          <span class="posicion">#${i + 1}</span>
          ${escudo} <span class="nombre">${equipo.nombre}</span>
        </div>
<div class="trofeos">
  <img src="trofeos/liga.png"  alt="Liga"      class="icono-trofeo"> <span>${equipo.ligas}</span>
  <img src="trofeos/copa.png"  alt="Copa"      class="icono-trofeo"> <span>${equipo.copas}</span>
  <img src="trofeos/super.png" alt="Superliga" class="icono-trofeo"> <span>${equipo.superligas}</span>
</div>
      </div>
    `;
  });

  contenedor.innerHTML = html;
  document.body.appendChild(contenedor);
}


/*
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
*/


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

/*
function descenso() {
  if (!descensoPendiente) {
    alert("⚠️ Debes simular al menos un semestre antes de hacer descenso.");
    return;
  }

  // ✅ Fin del semestre 1
  if (semestreActual < 2) {
    semestreActual++;
    preguntaAleatoria();
    campeon1S = obtenerCampeonSemestre(); // Guardar campeón 1S
    alert("✅ Fin del semestre 1. Ahora puedes simular el segundo semestre.");

    return;
  }

  // ✅ Fin de temporada (semestre 2)
  simularCopaColombiaNuevoFormato();
  campeon2S = obtenerCampeonSemestre(); // Guardar campeón 2S

  // Calcular tabla anual
  let anual = Object.values(tablaAnual).map(e => ({
    ...e,
    pts: parseFloat((e.pts / 40).toFixed(2))
  }));
  anual.sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));
  mostrarTabla("tct", anual, `📉 Reclasificación - Descenso ${temporadaActual}`, false, [], true);

  let descendidos = anual.slice(-2).map(e => e.nombre);

  // ⚠️ Castigos por corrupción
  if (castigoPorCorrupcion) {
    alert(`🚨 ESCÁNDALO: ${castigoPorCorrupcion} fue sancionado por corrupción. -20M y -15 de media todos tus jugadores.`);
    if (castigoPorCorrupcion === equipoUsuario) {
      presupuestoVisible -= 20000000;
      actualizarPresupuestoHTML();
    } else {
      if (!presupuestosEquipos[castigoPorCorrupcion]) presupuestosEquipos[castigoPorCorrupcion] = 0;
      presupuestosEquipos[castigoPorCorrupcion] -= 20000000;
    }
    const plantilla = plantillasJugadores[castigoPorCorrupcion];
    if (plantilla) {
      plantilla.forEach(j => j.media = Math.max(1, j.media - 15));
    }
    castigoPorCorrupcion = null;
  }

  // ⚠️ Expulsión por deuda financiera
  if (alertaPresupuestoSinResolver) {
    alert("🚨 Tu equipo fue expulsado por deuda financiera.");
    const idx = anual.findIndex(e => e.nombre === equipoUsuario);
    if (idx !== -1) anual.splice(idx, 1);
    alert("📄 COMUNICADO DIMAYOR: Tu club perdió su ficha profesional.");
    location.reload();
    alertaPresupuestoSinResolver = false;
    return;
  }

  // 🔼 Sistema realista de ascenso FPC
  const {
    equiposQueAscienden,
    repechaje: repechajeResultado
  } = simularAscensoRealista();

  const ascendidos = equiposSegunda.filter(e =>
    equiposQueAscienden.includes(e.nombre)
  );

  // Mensaje final
  let mensajeFinal = `🔴 Descendieron: ${descendidos.join(", ")}` +
                     `\n🟢 Ascienden directamente: ${equiposQueAscienden.slice(0, 2).join(", ")}`;

  if (repechajeResultado) {
    mensajeFinal += `\n🎟️ Repechaje de Ascenso:` +
                    `\n  Ida: ${repechajeResultado.equipo1} ${repechajeResultado.resultadoIda} ${repechajeResultado.equipo2}` +
                    `\n  Vuelta: ${repechajeResultado.equipo2} ${repechajeResultado.resultadoVuelta} ${repechajeResultado.equipo1}` +
                    `\n  Global: ${repechajeResultado.resultadoGlobal}` +
                    `\n  Ganador: ${repechajeResultado.ganador}`;
  }

  alert(mensajeFinal);

  // Actualizar ligas
  equipos = equipos.filter(e => !descendidos.includes(e)).concat(equiposQueAscienden);
  equiposSegunda = equiposSegunda
    .filter(e => !equiposQueAscienden.includes(e.nombre))
    .concat(descendidos.map(nombre => ({ nombre, fuerza: 60 })));


   // Pagar derechos de TV
    const montoDerechosTV = 1500000;
    if (!presupuestosEquipos[equipoUsuario]) presupuestosEquipos[equipoUsuario] = 0;
    presupuestosEquipos[equipoUsuario] += montoDerechosTV;
    sumarPresupuesto(montoDerechosTV);
    alert("📺 Derechos de TV pagados");

   
   // Pagar sueldos
    let sueldoSemestral = equiposPrimera.includes(equipoUsuario) ? 2500000 : 1000000;
    const quierePagar = confirm(`¿Deseas pagar los sueldos de la plantilla de ${equipoUsuario} por $${sueldoSemestral.toLocaleString()}?`);
    if (quierePagar) {
      if (presupuestoVisible >= sueldoSemestral) {
        restarPresupuesto(sueldoSemestral);
        alert(`💵 Sueldos del 1er semestre pagados: $${sueldoSemestral.toLocaleString()}`);
      } else {
        alert("❌ No tienes suficiente presupuesto. Se aplicará penalización.");
        penalizarPorNoPagarSueldos();
      }
    } else {
      penalizarPorNoPagarSueldos();
    }


  // 🧹 Reset
  semestreActual = 1;
  temporadaActual++;
  tablaAnual = {};
  descensoPendiente = false;
  preguntaHechaEstaTemporada = false;

  // Limpieza
  resetearVistacu();
  resetearVistafi();
  simularMercadoFichajes();
  procesarRetirosYAltas();
  evaluarMoralHinchada();
  verificarEleccionesPresidenciales();
  presupuestoNegativoDetectado = false;

  // Castigo por corrupción al debutar
  if (decisionCorrupcionDebut) {
    alert("🚨 ESCÁNDALO: Aceptaste soborno para hacer debutar un jugador.");
    alert("📉 Has sido despedido como presidente.");
    location.reload();
    decisionCorrupcionDebut = false;
  }
}
*/

function descenso() {
  if (!descensoPendiente) {
    alert("⚠️ Debes simular al menos un semestre antes de hacer descenso.");
    return;
  }

  // ✅ Fin del semestre 1
  if (semestreActual < 2) {
    semestreActual++;
    preguntaAleatoria();
     simularMercadoFichajes();
    campeon1S = obtenerCampeonSemestre(); // Guardar campeón 1S
    alert("✅ Fin del semestre 1. Ahora puedes simular el segundo semestre.");

    return;
  }

  // ✅ Fin de temporada (semestre 2)
  simularCopaColombiaNuevoFormato();
  campeon2S = obtenerCampeonSemestre(); // Guardar campeón 2S

  // Calcular tabla anual
  let anual = Object.values(tablaAnual).map(e => ({
    ...e,
    pts: parseFloat((e.pts / 40).toFixed(2))
  }));
  anual.sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));
  mostrarTabla("tct", anual, `📉 Reclasificación - Descenso ${temporadaActual}`, false, [], true);

  let descendidos = anual.slice(-2).map(e => e.nombre);

  // ⚠️ Castigos por corrupción
  if (castigoPorCorrupcion) {
    alert(`🚨 ESCÁNDALO: ${castigoPorCorrupcion} fue sancionado por corrupción. -20M y -15 de media todos tus jugadores.`);
    if (castigoPorCorrupcion === equipoUsuario) {
      presupuestoVisible -= 20000000;
      actualizarPresupuestoHTML();
    } else {
      if (!presupuestosEquipos[castigoPorCorrupcion]) presupuestosEquipos[castigoPorCorrupcion] = 0;
      presupuestosEquipos[castigoPorCorrupcion] -= 20000000;
    }
    const plantilla = plantillasJugadores[castigoPorCorrupcion];
    if (plantilla) {
      plantilla.forEach(j => j.media = Math.max(1, j.media - 15));
    }
    castigoPorCorrupcion = null;
  }

  // ⚠️ Expulsión por deuda financiera
  if (alertaPresupuestoSinResolver) {
    alert("🚨 Tu equipo fue expulsado por deuda financiera.");
    const idx = anual.findIndex(e => e.nombre === equipoUsuario);
    if (idx !== -1) anual.splice(idx, 1);
    alert("📄 COMUNICADO DIMAYOR: Tu club perdió su ficha profesional.");
    location.reload();
    alertaPresupuestoSinResolver = false;
    return;
  }

  // 🔼 Sistema realista de ascenso FPC
  const {
    equiposQueAscienden,
    repechaje: repechajeResultado
  } = simularAscensoRealista();

  const ascendidos = equiposSegunda.filter(e =>
    equiposQueAscienden.includes(e.nombre)
  );

  // Mensaje final
  let mensajeFinal = `🔴 Descendieron: ${descendidos.join(", ")}` +
                     `\n🟢 Ascienden directamente: ${equiposQueAscienden.slice(0, 2).join(", ")}`;

  if (repechajeResultado) {
    mensajeFinal += `\n🎟️ Repechaje de Ascenso:` +
                    `\n  Ida: ${repechajeResultado.equipo1} ${repechajeResultado.resultadoIda} ${repechajeResultado.equipo2}` +
                    `\n  Vuelta: ${repechajeResultado.equipo2} ${repechajeResultado.resultadoVuelta} ${repechajeResultado.equipo1}` +
                    `\n  Global: ${repechajeResultado.resultadoGlobal}` +
                    `\n  Ganador: ${repechajeResultado.ganador}`;
  }

  alert(mensajeFinal);

  // Actualizar ligas
  equipos = equipos.filter(e => !descendidos.includes(e)).concat(equiposQueAscienden);
  equiposSegunda = equiposSegunda
    .filter(e => !equiposQueAscienden.includes(e.nombre))
    .concat(descendidos.map(nombre => ({ nombre, fuerza: 60 })));



  // Sumar 1.5M al presupuesto del equipo del usuario
const montoDerechosTV = 1500000;

if (!presupuestosEquipos[equipoUsuario]) {
  presupuestosEquipos[equipoUsuario] = 0;
}

presupuestosEquipos[equipoUsuario] += montoDerechosTV;
sumarPresupuesto(montoDerechosTV);
alert("📺 Derechos de TV pagados + 1.5M");


// Sueldos semestrales (solo usuario)
let sueldoSemestral;
if (equiposPrimera.includes(equipoUsuario)) {
  sueldoSemestral = 5000000; // Primera A
} else {
  sueldoSemestral = 2000000; // Segunda
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


  // 🧹 Reset
  semestreActual = 1;
  temporadaActual++;
  tablaAnual = {};
  descensoPendiente = false;
  preguntaHechaEstaTemporada = false;

  // Limpieza
  resetearVistacu();
  resetearVistafi();
  procesarRetirosYAltas();
  simularMercadoFichajes();
  evaluarMoralHinchada();
  verificarEleccionesPresidenciales();
  presupuestoNegativoDetectado = false;

  // Castigo por corrupción al debutar
  if (decisionCorrupcionDebut) {
    alert("🚨 ESCÁNDALO: Aceptaste soborno para hacer debutar un jugador.");
    alert("📉 Has sido despedido como presidente.");
    location.reload();
    decisionCorrupcionDebut = false;
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
  
   // Registrar campeón por semestre para la Superliga
if (!campeonesLigaPorTemporada[temporadaActual]) {
  campeonesLigaPorTemporada[temporadaActual] = { I: null, II: null };
}
const tagSem = semestreActual === 1 ? "I" : "II";
campeonesLigaPorTemporada[temporadaActual][tagSem] = campeon;


  agregarTituloLiga(campeon);

    
  if (campeon === equipoUsuario) {
    sumarPresupuesto(500000);
    alert(`🎉 ¡Felicidades! ${campeon} es el campeón de liga\n💰 Recibes $500.000 de premio.`);
  } /*else {
    alert(`🏆 ${campeon} es el campeón de la Copa Colombia`);
  }
*/


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
   
procesarTemporadaPatrocinio();
 
}

function simularAscensoRealista() {
  // 1. Crear tabla reclasificación
  let tablaAscenso = equiposSegunda.map(e => ({
    nombre: e.nombre,
    pts: 0,
    gf: 0,
    gc: 0
  }));

  // 2. Simular liga todos contra todos
  for (let i = 0; i < equiposSegunda.length; i++) {
    for (let j = 0; j < equiposSegunda.length; j++) {
      if (i !== j) {
        const local = equiposSegunda[i].nombre;
        const visita = equiposSegunda[j].nombre;
        const { golesA, golesB, puntosA, puntosB } = simularPartido(local, visita);

        const equipoLocal = tablaAscenso.find(t => t.nombre === local);
        const equipoVisita = tablaAscenso.find(t => t.nombre === visita);

        equipoLocal.pts += puntosA;
        equipoLocal.gf += golesA;
        equipoLocal.gc += golesB;

        equipoVisita.pts += puntosB;
        equipoVisita.gf += golesB;
        equipoVisita.gc += golesA;
      }
    }
  }

  tablaAscenso.sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));
  const tablaOrdenada = tablaAscenso.map(e => e.nombre);
  const top1 = tablaOrdenada[0];
  const top2 = tablaOrdenada[1];

  // 3. Elegir campeones (puedes cambiar esta lógica)
  const top8 = tablaOrdenada.slice(0, 6);
  const campeon1S = top8[Math.floor(Math.random() * top8.length)];
  let campeon2S = top8[Math.floor(Math.random() * top8.length)];
  while (campeon2S === campeon1S) {
    campeon2S = top8[Math.floor(Math.random() * top8.length)];
  }

  let equiposQueAscienden = [];
  let repechaje = null;
  let repechajeResultado = null;
  let mensaje = `🏆 Ascenso FPC Realista - Temporada ${temporadaActual}` +
                `\n1S Campeón: ${campeon1S}` +
                `\n2S Campeón: ${campeon2S}` +
                `\n📊 Top 3 tabla: ${tablaOrdenada.slice(0, 3).join(", ")}`;

  // CASO 1: Campeón en ambos semestres
  if (campeon1S === campeon2S) {
    equiposQueAscienden.push(campeon1S);
    mensaje += `\n🟢 ${campeon1S} ganó ambos semestres. Asciende directo.`;

    const [r1, r2] = tablaOrdenada.filter(e => e !== campeon1S);
    repechaje = { equipo1: r1, equipo2: r2 };
    repechajeResultado = simularPartidoIdaVuelta(r1, r2);
    equiposQueAscienden.push(repechajeResultado.ganador);
    mensaje += `\n🎟️ Repechaje por segundo ascenso: ${r1} vs ${r2}` +
               `\n  Ganador: ${repechajeResultado.ganador}`;

  // CASO 3: Ambos campeones están en top 1 y 2
  } else if ((campeon1S === top1 || campeon1S === top2) && (campeon2S === top1 || campeon2S === top2)) {
    equiposQueAscienden.push(campeon1S, campeon2S);
    mensaje += `\n🟢 Ambos campeones (${campeon1S}, ${campeon2S}) están en top 2. Ascienden directo.`;

  // CASO 2: Uno de los campeones está en top 1 o 2
  } else if ((campeon1S === top1 || campeon1S === top2) || (campeon2S === top1 || campeon2S === top2)) {
    const ascendidoDirecto = (campeon1S === top1 || campeon1S === top2) ? campeon1S : campeon2S;
    const otroCampeon = (ascendidoDirecto === campeon1S) ? campeon2S : campeon1S;
    equiposQueAscienden.push(ascendidoDirecto);
    mensaje += `\n🟢 ${ascendidoDirecto} es campeón y está en top 2. Asciende directo.`;

    const mejorNoCampeon = tablaOrdenada.find(e => e !== campeon1S && e !== campeon2S);
    repechaje = { equipo1: otroCampeon, equipo2: mejorNoCampeon };
    repechajeResultado = simularPartidoIdaVuelta(otroCampeon, mejorNoCampeon);
    equiposQueAscienden.push(repechajeResultado.ganador);
    mensaje += `\n🎟️ Repechaje: ${otroCampeon} vs ${mejorNoCampeon}` +
               `\n  Ganador: ${repechajeResultado.ganador}`;

  // CASO 4: Ninguno de los campeones está en top 2
  } else {
    mensaje += `\n⚔️ Ningún campeón está en top 2. Se juega gran final entre ${campeon1S} y ${campeon2S}.`;
    const final = simularPartidoIdaVuelta(campeon1S, campeon2S);
    const ganadorFinal = final.ganador;
    const perdedorFinal = ganadorFinal === campeon1S ? campeon2S : campeon1S;
    equiposQueAscienden.push(ganadorFinal);
    mensaje += `\n🏁 Ganador de la final y asciende: ${ganadorFinal}`;

    const mejorTabla = tablaOrdenada.find(e => e !== campeon1S && e !== campeon2S);
    repechaje = { equipo1: perdedorFinal, equipo2: mejorTabla };
    repechajeResultado = simularPartidoIdaVuelta(perdedorFinal, mejorTabla);
    equiposQueAscienden.push(repechajeResultado.ganador);
    mensaje += `\n🎟️ Repechaje: ${perdedorFinal} vs ${mejorTabla}` +
               `\n  Ganador: ${repechajeResultado.ganador}`;
  }

  // Mostrar tabla y alert
  mostrarTabla("segunda", tablaAscenso, `Primera B - Reclasificación - Temporada ${temporadaActual}`, false, equiposQueAscienden);

  if (repechajeResultado) {
    mensaje += `\n📊 Repechaje Global: ${repechajeResultado.resultadoGlobal}`;
  }

  alert(mensaje);

  return {
    tablaAscenso,
    equiposQueAscienden,
    repechaje: repechajeResultado
  };
}



function simularPartidoIdaVuelta(equipo1, equipo2) {
  const ida = simularPartido(equipo1, equipo2); // equipo1 local
  const vuelta = simularPartido(equipo2, equipo1); // equipo2 local

  const goles1 = ida.golesA + vuelta.golesB;
  const goles2 = ida.golesB + vuelta.golesA;
  const golesVisita1 = vuelta.golesB;
  const golesVisita2 = ida.golesB;

  let ganador;
  if (goles1 > goles2) {
    ganador = equipo1;
  } else if (goles2 > goles1) {
    ganador = equipo2;
  } else {
    if (golesVisita1 > golesVisita2) {
      ganador = equipo1;
    } else if (golesVisita2 > golesVisita1) {
      ganador = equipo2;
    } else {
      ganador = Math.random() < 0.5 ? equipo1 : equipo2;
    }
  }

  return {
    equipo1,
    equipo2,
    resultadoIda: `${ida.golesA} - ${ida.golesB}`,
    resultadoVuelta: `${vuelta.golesA} - ${vuelta.golesB}`,
    resultadoGlobal: `${goles1} - ${goles2}`,
    ganador
  };
}

function obtenerCampeonSemestre(semestre) {
  const pesos = [0.32, 0.16, 0.14, 0.13, 0.13, 0.12]; // pesos por posición 1–6
  const acumulado = pesos.map((p, i) => pesos.slice(0, i + 1).reduce((a, b) => a + b));

  const r = Math.random();
  let index = acumulado.findIndex(p => r <= p);
  if (index === -1) index = 0; // seguridad

  return equiposSegunda[index].nombre;
}



function procesarRetirosYAltas() {
  const posiciones = ["Defensa", "Volante", "Delantero", "Pivote"];
  
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
    while (plantilla.length < 18) {
      const nuevo = generarJugador(null, nombresCortos, nombres);
      if (nuevo.promesa) {
        log += `⭐ ${nuevo.nombre} (${nuevo.posicion}, edad ${nuevo.edad}, media ${nuevo.media}) se une a ${equipo} como promesa\n`;
      }
      plantilla.push(nuevo);
    }

    plantillasJugadores[equipo] = plantilla;
  }

  alert(log);

   //También envejece a los jugadores libres
  //jugadoresLibres.forEach(j => j.edad++); 
}



// Probabilidad de retiro según edad
function calcularProbabilidadRetiro(edad) {
  if (edad < 34) return 0;
  if (edad === 34) return 0;
  if (edad === 35) return 0.01;
  if (edad === 36) return 0.02;
  if (edad === 37) return 0.08;
  if (edad === 38) return 0.10;
  if (edad === 39) return 0.15;
  if (edad >= 40 && edad < 43) return 0.20;
  if (edad >= 43 && edad < 46) return 0.30;
  if (edad >= 46 && edad < 50) return 0.50;
  if (edad >= 50) return 1.0; // 100% chance de retiro
}

// Genera un jugador aleatorio
function generarJugador(posicionFija, nombresCortos, nombres) {
  const posiciones = ["Defensa", "Volante", "Delantero","Pivote"];
  const nombre = `${nombresCortos[Math.floor(Math.random() * nombresCortos.length)]} ${nombres[Math.floor(Math.random() * nombres.length)]}`;
  const edad = Math.floor(Math.random() * 5) + 18;

  //  chance de ser promesa
const r = Math.random();
  let media;
  let esPromesa = false;

  if (r < 0.03) {
    // 0.3% -> Promesa élite
    media = Math.floor(Math.random() * 6) + 77; // 77–82
    esPromesa = true;
  } else if (r < 0.075) {
    // siguiente 4.5% -> Promesa común
    media = Math.floor(Math.random() * 5) + 70; // 70–74
    esPromesa = true;
  } else {
    // 97% -> Jugador normal
    media = Math.floor(Math.random() * 10) + 58; // 58–67
  }


/*
  const esPromesa = Math.random() < 0.03;
  const media = esPromesa
    ? Math.floor(Math.random() * 5) + 70  // 70–74
    : Math.floor(Math.random() * 10) + 58; // 58–67
*/

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
  opcionInicial.textContent = "--Equipos--";
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

function habilitarTodosLosDTs() {
  const selectDT = document.getElementById("entrenador");
  for (let i = 0; i < selectDT.options.length; i++) {
    selectDT.options[i].disabled = false;
  }
}


window.onload = () => {
  inicializarSelectorEquipos();
};
