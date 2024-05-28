function confirmDescarga(event) {
    event.preventDefault(); // Evita la acción predeterminada del enlace
    if (confirm("¿Estás seguro de que deseas descargar el CV?")) {
      window.location.href = event.currentTarget.href;
    }
  }