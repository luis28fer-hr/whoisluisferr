
  const snowContainer = document.querySelector('#home'); // Seleccionar sección específica

  // Lista de íconos que quieres que caigan
  const icons = ["💻", "💻", "👾"];

  // --- Media query para móvil pequeño ---
  const mq = window.matchMedia('(max-width: 550px)');

  // Variables de control del intervalo
  let snowIntervalId = null;

  // Parámetros dependientes del viewport
  let MAX_FLAKES = 0;         // límite por defecto (desktop)
  let BASE_DURATION = 0;      // segundos base (desktop)
  let INTERVAL_DELAY = 0;   // ms (desktop)

  function applyResponsiveParams() {
    if (mq.matches) {
      // En móvil (≤ 550px): más rápido, menos elementos, animación más corta
      MAX_FLAKES = 50;
      BASE_DURATION = 15;    // animación base más corta
      INTERVAL_DELAY = 5000; // generar más seguido
    } else {
      // En pantallas mayores
      MAX_FLAKES = 100;
      BASE_DURATION = 12;
      INTERVAL_DELAY = 2000;
    }
  }

  // Crear un copo/ícono
  const createSnowflake = () => {

    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Elegir un icono aleatorio
    snowflake.textContent = icons[Math.floor(Math.random() * icons.length)];

    // Posición y estilos aleatorios
    const viewportWidth = snowContainer.clientWidth || window.innerWidth;
    snowflake.style.left = Math.random() * viewportWidth + "px";

    // Duración de la animación: base (según viewport) + pequeño rango aleatorio
    const duration = (Math.random() * 3) + BASE_DURATION; // s
    snowflake.style.animationDuration = duration + "s";

    // Tamaño y opacidad
    snowflake.style.fontSize = (Math.random() * 40 + 140) + "px";
    snowflake.style.opacity = (Math.random() * 0.90 + 0.45).toFixed(2);

    snowContainer.appendChild(snowflake);
    
   // Quitar el icono cuando desaparezca (un poco después de la animación)
    setTimeout(() => {
      snowflake.remove();
    }, 8000);

   
  };

  function startSnow() {
    if (snowIntervalId) clearInterval(snowIntervalId);
    snowIntervalId = setInterval(createSnowflake, INTERVAL_DELAY);
  }

  // Inicializar
  applyResponsiveParams();
  startSnow();

  // Reaccionar a cambios de tamaño (rotación, resize)
  if (mq.addEventListener) {
    mq.addEventListener('change', () => {
      applyResponsiveParams();
      startSnow();
    });
  } else if (mq.addListener) {
    // Fallback para navegadores antiguos
    mq.addListener(() => {
      applyResponsiveParams();
      startSnow();
    });
  }
