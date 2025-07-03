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
      }
    };

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