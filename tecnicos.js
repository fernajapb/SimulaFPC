const select = document.getElementById('entrenador');
    const resultado = document.getElementById('resultado');
    const foto = document.getElementById('foto');
  
  const formPersonalizado = document.getElementById('form-personalizado');
    const nombreInput = document.getElementById('nombre-dt');
    const imagenInput = document.getElementById('imagen-dt');
    const guardarBtn = document.getElementById('guardar-dt');

    const entrenadores = {
      gamero: {
        nombre: "Alberto Gamero",
        imagen: "https://www.infobae.com/resizer/v2/UQYYTSDFMVH3HKYBVUVRXGQWYU?auth=c6298bf5fa367397acc3dcabb965758dcab93b6b47609b396d9cd5a5e139a492&smart=true&width=1200&height=900&quality=85"
      },
      gonzalez: {
        nombre: "David González",
        imagen: "https://strapi-aws-s3-images-olimpica-stereo-bucket.s3.us-east-1.amazonaws.com/DAVID_GONZALEZ_d421cc6069.webp"
      },
      herrera: {
        nombre: "Hernán Darío Herrera",
        imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/GKWYE6UCXFEWJL5HXTF7GWBP7U.jpg"
      },
      comesaña: {
        nombre: "Julio Comesaña",
        imagen: "https://junioraunclick.com/wp-content/uploads/Julio-Comesa%C3%B1a-2.jpg"
      },
      rivera: {
        nombre: "Harold Rivera",
        imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/VKZCKXAUU5H7NDAWGFUXKV4TEM.jpg"
      },
      garcia: {
        nombre: "Alexis García",
        imagen: "https://www.infobae.com/resizer/v2/XRBMDCUVKJF37IJ65X7SM3AOX4?auth=86f7ff427f1a79af562d818874b40af0286ac0362fce2bf77aafca280d433714&smart=true&width=1200&height=900&quality=85"
      },
      bodhert: {
        nombre: "Hubert Bodhert",
        imagen: "https://www.infobae.com/resizer/v2/PXP7LDEYSBFCHPCKU3QEOF3EIQ.png?auth=6b9b5306fdf68906d4b648d3a30460f97d836894df5f5ad2105bed8f56763a4f&smart=true&width=350&height=233&quality=85"
      },
      suarez: {
        nombre: "Luis Fernando Suárez",
        imagen: "https://caracol.com.co/resizer/v2/AZL453BODZHEVAI4OAC2XW2E3Q.jpg?auth=447fb28004d71f1f165315d761deb95ad7e07a2ce6d0315b444dde3d1f9bb5e6&width=1600&quality=70&smart=true"
      },
      lucas: {
        nombre: "Lucas González ",
        imagen: "https://files.antena2.com/antena2/public/styles/seo1600x1200/public/2025-06/lucas-gonzalez.jpg?VersionId=eCMQFsCKuGUa50K__jSZy5ItdU_2Bz84&h=a9ae5a94&itok=HyIUteiE"
      },
      rueda: {
        nombre: "Reinaldo Rueda",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2XW_DecTcDpewxjemqnEC9NS5hzoL5sJDw&s"
      },
      bava: {
        nombre: "Jorge Bava",
        imagen: "https://imgs.elpais.com.uy/dims4/default/67c9c4e/2147483647/strip/true/crop/4049x2784+0+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fa5%2Fdd%2Fed2754614861bc62a04940339c60%2Fffl-3154.JPG"
      },
      leonel: {
        nombre: "Leonel Alvarez",
        imagen: "https://www.elfutbolero.com.co/image/elfutbolerocomco/la-verdadera-razon-por-la-que-leonel-alvarez-nunca-ha-dirigido-a-nacional-foto-instagram-1738870200.webp"
      },
      restrepo: {
        nombre: "Alejandro Restrepo",
        imagen: "https://estaticos.elcolombiano.com/binrepository/800x565/0c0/780d565/none/11101/SGXA/whatsapp-image-2022-12-01-at-11-26-55-am_41169331_20221201112850.jpg"
      },
      arias: {
        nombre: "Alfredo Arias",
        imagen: "https://extranoticias.com.co/wp-content/uploads/2025/06/644a832df02fe3ca365ddfb41448f41f.jpeg"
      },
      duda: {
        nombre: "Rafael Dudamel",
        imagen: "https://10sports.co/wp-content/uploads/2022/10/IMG-20221015-WA0065.jpg"
      },
      redin: {
        nombre: "Bernardo Redin",
        imagen: "https://caracoltv.brightspotcdn.com/dims4/default/2580929/2147483647/strip/true/crop/1200x720+0+0/resize/767x460!/quality/75/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fc8%2F70%2F3eb527664d4f8286f730581cb26c%2Fbernardo-redin-afp.jpg"
      },
      viera: {
        nombre: "Sebastián Viera",
        imagen: "https://cartagenaaldia.com/wp-content/uploads/2025/04/Real-Cartagena-Salida-de-Viera-1024x640.webp"
      },
      raimondi: {
        nombre: "Gabriel Raimondi",
        imagen: "https://elperiodicodeportivo.com.co/wp-content/uploads/2025/06/El-director-tecnico-nacido-en-Argentina-Diego-Gabriel-Raimondi-tomara-las-riendas-del-America-de-C.jpg"
      },
      gandolfi: {
        nombre: "Javier Gandolfi",
        imagen: "https://files.antena2.com/antena2/public/2025-01/javier-gandolfi.jpg?VersionId=EZ_YftShkv1fjLIa8a8UETS_bZcc6Jgw"
      },
      flabio: {
        nombre: "Flabio Torres",
        imagen: "https://files.antena2.com/antena2/public/downloaded_images/colp-131434.jpg?VersionId=FBnMFJh4DevyXvn.YWpUCsrBwL9EYwvj"
      },
      ayala: {
        nombre: "Camilo Ayala",
        imagen: "https://i.ytimg.com/vi/AygZNkEe0Fk/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgSihJMA8=&rs=AOn4CLDMnt9jm7OThwnOBD__4geYl1vFfw"
      },
      orozco: {
        nombre: "Andrés Orozco",
        imagen: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1sjzwJ.img?w=640&h=428&m=6&x=281&y=108&s=127&d=127"
      },
      zubeldia: {
         nombre: "Luis Zubeldía",
         imagen: "https://elcrackdeportes.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-23-at-08.54.37-e1724421307373-800x445.jpeg"
       },
      crespo: {
         nombre: "Hernán Crespo",
         imagen: "https://images.pagina12.com.ar/styles/focal_content_1200x1050/public/2023-10/774879-whatsapp-20image-202023-10-04-20at-2019-02-46.jpeg?h=ada05aa9&itok=VAQJ8Aal"
       },
       almiron: {
         nombre: "Jorge Almirón",
         imagen: "https://media.tycsports.com/files/2023/04/13/555852/almiron_1440x810_wmk.webp?v=3"
        },
        cruzreal: {
         nombre: "Juan Cruz Real",
         imagen: "https://www.elfutbolero.com.co/_next/image?url=https%3A%2F%2Fwww.elfutbolero.com.co%2Fimage%2Felfutbolerocomco%2Fjuan-cruz-real-se-rompio-y-pudo-evitar-llorar-pero-curiosamente-fue-porque-se-quedo-el-america-cali-y-esta-la-estrella-15-1702055043-hq.webp&w=3840&q=75"
        },
         guimaraes: {
          nombre: "Alexandre Guimarães",
          imagen: "https://img.asmedia.epimg.net/resizer/v2/I4H6NDFLZJB7HKLSVD2ZWGJTB4.jpg?auth=48b73d67c320fd79ba32f2e8ad4ea0edc5ade8db9ef6290477864bd7ba0ae53a&width=1472&height=1104&focal=355%2C8"
},
          salas: {
           nombre: "Mario Salas",
           imagen: "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1230%2Fr1433335_1296x729_16%2D9.jpg"
},
           pusineri: {
            nombre: "Lucas Pusineri",
            imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XD4ORUTJZRBHDKJ77744X3NVXY.jpg"
},
            beccacece: {
             nombre: "Sebastián Beccacece",
             imagen: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0910%2Fr1384713_1296x729_16%2D9.jpg"
},
             dominguez: {
              nombre: "Eduardo Domínguez",
              imagen: "https://kchcomunicacion.com/wp-content/uploads/2024/07/FXUSM6CWAAAL1ZX.webp"
},
              lorenzo: {
               nombre: "Néstor Lorenzo",
               imagen: "https://www.elespectador.com/resizer/v2/FNI32ZB4OVFE4GSFC3AVX5HO3Q.jpg?auth=139014d6fd62c551d2948d774fe3d6dfe5224c6939dacea66dc2d36b4e111ee2&width=920&height=613&smart=true&quality=60"
}
    };

select.addEventListener('change', function () {
  const key = select.value;
  const selectedOption = select.options[select.selectedIndex];

  // Mostrar formulario para crear DT personalizado
  if (key === 'personalizado') {
    formPersonalizado.style.display = 'block';
    resultado.textContent = '';
    foto.style.display = 'none';
    return;
  }

  // Si seleccionó un DT válido (predefinido o personalizado)
  if (key && entrenadores[key]) {
    const tecnico = entrenadores[key];

    formPersonalizado.style.display = 'none';
    resultado.textContent = `Entrenador seleccionado: ${tecnico.nombre}`;
    foto.src = tecnico.imagen;
    foto.alt = tecnico.nombre;
    foto.style.display = 'block';

    // Guardar nombre (por si lo usas después)
    dtSeleccionado = tecnico.nombre;

    // Deshabilitar la opción para evitar repetir selección
    selectedOption.disabled = true;

    // Volver al primer item "--Elige un DT--"
    select.selectedIndex = 0;
  } else {
    formPersonalizado.style.display = 'none';
    resultado.textContent = '';
    foto.style.display = 'none';
  }
});

guardarBtn.addEventListener('click', function () {
  const nombre = nombreInput.value.trim();
  const imagenFile = imagenInput.files[0];

  if (!nombre || !imagenFile) {
    alert('Por favor completa el nombre y selecciona una imagen.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const imagenBase64 = e.target.result;
    const keyPersonalizado = `personalizado_${Date.now()}`;

    // Guardar en el objeto global
    entrenadores[keyPersonalizado] = {
      nombre,
      imagen: imagenBase64
    };

    // Guardar en localStorage
    const entrenadoresPersonalizados = JSON.parse(localStorage.getItem('dtPersonalizados')) || {};
    entrenadoresPersonalizados[keyPersonalizado] = {
      nombre,
      imagen: imagenBase64
    };
    localStorage.setItem('dtPersonalizados', JSON.stringify(entrenadoresPersonalizados));

    // Agregar nueva opción al <select>
    const nuevaOpcion = document.createElement('option');
    nuevaOpcion.value = keyPersonalizado;
    nuevaOpcion.textContent = nombre;
    select.appendChild(nuevaOpcion);

    // Seleccionar automáticamente y mostrarlo
    select.value = keyPersonalizado;
    select.dispatchEvent(new Event('change'));

    // Limpiar el formulario
    formPersonalizado.style.display = 'none';
    nombreInput.value = '';
    imagenInput.value = '';
  };

  reader.readAsDataURL(imagenFile);
});

const dtGuardados = JSON.parse(localStorage.getItem('dtPersonalizados')) || {};
for (const key in dtGuardados) {
  if (!entrenadores[key]) {
    entrenadores[key] = dtGuardados[key];

    const opcion = document.createElement('option');
    opcion.value = key;
    opcion.textContent = dtGuardados[key].nombre;
    select.appendChild(opcion);
  }
}









//versión 2
/*
select.addEventListener('change', function () {
  const key = select.value;
  const selectedOption = select.options[select.selectedIndex];

  // Mostrar formulario si elige "personalizado"
  if (key === 'personalizado') {
    formPersonalizado.style.display = 'block';
    resultado.textContent = '';
    foto.style.display = 'none';
    return;
  }

  // Si eligió un DT válido
  if (key && entrenadores[key]) {
    const tecnico = entrenadores[key];

    // Mostrar info del DT
    formPersonalizado.style.display = 'none';
    resultado.textContent = `Entrenador seleccionado: ${tecnico.nombre}`;
    foto.src = tecnico.imagen;
    foto.alt = tecnico.nombre;
    foto.style.display = 'block';

    // Guardar DT actual
    dtSeleccionado = tecnico.nombre;

    // 🔒 Deshabilitar la opción seleccionada
    selectedOption.disabled = true;

    // 🔄 Volver al primer item ("--Elige un DT--")
    select.selectedIndex = 0;
  } else {
    formPersonalizado.style.display = 'none';
    resultado.textContent = '';
    foto.style.display = 'none';
  }
});
*/

//versión 1
/*
    select.addEventListener('change', function () {
      const key = select.value;
      if (key === 'personalizado') {
        formPersonalizado.style.display = 'block';
        resultado.textContent = '';
        foto.style.display = 'none';
      } else if (key && entrenadores[key]) {
        formPersonalizado.style.display = 'none';
        resultado.textContent = `Entrenador seleccionado: ${entrenadores[key].nombre}`;
        foto.src = entrenadores[key].imagen;
        foto.alt = entrenadores[key].nombre;
        foto.style.display = 'block';
      } else {
        formPersonalizado.style.display = 'none';
        resultado.textContent = '';
        foto.style.display = 'none';
      }
    });

    select.addEventListener('change', () => {
  const key = select.value;
  const tecnico = entrenadores[key];

  if (tecnico) {
    resultado.textContent = tecnico.nombre;
    foto.src = tecnico.imagen;

    // 💾 Guardar DT seleccionado para usar en decisiones
    dtSeleccionado = tecnico.nombre;

  }
});

    guardarBtn.addEventListener('click', function () {
      const nombre = nombreInput.value.trim();
      const imagenFile = imagenInput.files[0];

      if (!nombre || !imagenFile) {
        alert('Por favor completa el nombre y selecciona una imagen.');
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        resultado.textContent = `Entrenador personalizado: ${nombre}`;
        foto.src = e.target.result;
        foto.alt = nombre;
        foto.style.display = 'block';
        formPersonalizado.style.display = 'none';
      };
      reader.readAsDataURL(imagenFile);
    });
*/

const borrarBtn = document.getElementById('borrar-personalizados');

borrarBtn.addEventListener('click', function () {
  const confirmacion = confirm("¿Estás seguro de que quieres borrar todos los DT personalizados?");
  if (!confirmacion) return;

  // 1. Eliminar del objeto global
  const dtGuardados = JSON.parse(localStorage.getItem('dtPersonalizados')) || {};
  for (const key in dtGuardados) {
    delete entrenadores[key];

    // 2. Eliminar opción del <select>
    const opcion = select.querySelector(`option[value="${key}"]`);
    if (opcion) {
      opcion.remove();
    }
  }

  // 3. Limpiar localStorage
  localStorage.removeItem('dtPersonalizados');

  // 4. Limpiar pantalla si estaba activo alguno
  resultado.textContent = '';
  foto.style.display = 'none';
  foto.src = '';
  foto.alt = '';
});
