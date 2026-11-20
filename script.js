// 1. Buscador de videojuegos en tiempo real
const buscador = document.getElementById('buscador');
const tarjetas = document.querySelectorAll('.card');

buscador.addEventListener('input', (e) => {
  const texto = e.target.value.toLowerCase();

  tarjetas.forEach(tarjeta => {
    const contenido = tarjeta.textContent.toLowerCase();
    tarjeta.style.display = contenido.includes(texto) ? 'block' : 'none';
  });
});

// 2. Sistema de notificaciones (Toast)
function mostrarNotificacion(mensaje) {
  const toast = document.getElementById('toast');
  toast.textContent = mensaje;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function iniciarJuego(nombreJuego) {
  mostrarNotificacion(`🎮 Cargando servidor para: ${nombreJuego}...`);
}

// 3. Control del Modal de Inscripción al Torneo
const modal = document.getElementById('modal-torneo');
const btnAbrir = document.getElementById('btn-abrir-modal');
const btnCerrar = document.querySelector('.close-modal');
const formTorneo = document.getElementById('form-torneo');

btnAbrir.addEventListener('click', () => {
  modal.style.display = 'flex';
});

btnCerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

formTorneo.addEventListener('submit', (e) => {
  e.preventDefault();
  const equipo = document.getElementById('nombre-equipo').value;
  modal.style.display = 'none';
  formTorneo.reset();
  mostrarNotificacion(`🏆 ¡Equipo "${equipo}" inscrito en la Copa videojuegosRa!`);
});
