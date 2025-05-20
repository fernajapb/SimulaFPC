function toggleMenu() {
      document.getElementById('menu').classList.toggle('show');
    }

    function toggleSubMenu(element) {
      if (window.innerWidth <= 768) {
        element.classList.toggle('open');
      }
    }

//codigo de tabla de descenso

        function actualizarTabla() {
            var table = document.querySelector("table");
            var tbody = table.querySelector("tbody");
            var rows = Array.from(tbody.querySelectorAll("tr"));

            // Actualizar el promedio en cada fila
            rows.forEach(row => {
                var partidosJugados = parseFloat(row.querySelector(".editable").value) || 0;
                var puntosObtenidos = parseFloat(row.querySelectorAll(".editable")[1].value) || 0;
                var puntaje = partidosJugados !== 0 ? (puntosObtenidos / partidosJugados).toFixed(2) : 0;
                row.querySelector("[id^='Num']").textContent = puntaje;
            });

            // Ordenar las filas según el promedio (ascendente)
            rows.sort((a, b) => {
                var numA = parseFloat(a.querySelector("[id^='Num']").textContent) || 0;
                var numB = parseFloat(b.querySelector("[id^='Num']").textContent) || 0;
                return numA - numB; // Orden ascendente
            });

            // Actualizar la posición y reordenar en el DOM
            rows.forEach((row, index) => {
                row.cells[0].textContent = 20 - index; // Actualizar posición

                // Aplicar clase roja a posiciones 20 y 19
                if (20 - index === 20 || 20 - index === 19) {
                    row.classList.add("red-row");
                } else {
                    row.classList.remove("red-row");
                }

                tbody.appendChild(row); // Reorganizar en el DOM
            });
        }
