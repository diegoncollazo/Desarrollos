"use strict";
const fila = document.querySelector(".contenedor-carousel");
const pelicula = document.querySelectorAll(".pelicula");
const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

flechaDerecha.addEventListener("click", () => {
	fila.scrollLeft += fila.offsetWidth;
});
flechaIzquierda.addEventListener("click", () => {
	fila.scrollLeft -= fila.offsetWidth;
});

const numeroPaginas = Math.ceil(pelicula.length / 5);
for (let index = 0; index < numeroPaginas; index++) {
	const indicador = document.createElement("button");
	document.querySelector(".indicadores").appendChild(indicador);
	if (index == 0) {
		indicador.classList.add("activo");
	}
	indicador.addEventListener("click", (e) => {
		fila.scrollLeft = index * fila.offsetWidth;
		document
			.querySelector(".indicadores .activo")
			.classList.remove("activo");
		e.target.classList.add("activo");
	});
}

// button:active {
//     outline: none;
//     border: none;
// }
