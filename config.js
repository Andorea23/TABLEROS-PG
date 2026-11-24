/* =====================================================================
   CONFIGURACIÓN DE LA PANTALLA DE INICIO
   Este es el único archivo que necesitas editar para:
   - cambiar el periodo del título
   - cambiar el link de un tablero
   - habilitar o poner "En construcción" un tablero
   - cambiar textos y etiquetas
   Después de editar, guarda los cambios (Commit changes) en GitHub.
   ===================================================================== */
window.CONFIG = {
  titulo: "Tableros comerciales P&G",

  // Periodo que aparece al final del título. Ejemplos: "NOV'26", "DIC'26", "ENE'27"
  periodo: "NOV'26",

  descripcion: "Plataforma de seguimiento comercial P&G. Consulta el desempeño de incentivos, avances de cobertura y ejecución de promociones.",

  nota_pie: "Para ver un tablero necesitas que esté compartido contigo.",

  tableros: [
    {
      nombre: "Redención de Promociones",
      // "activo" = se puede abrir | "construccion" = se ve en gris con la etiqueta "En construcción"
      estado: "construccion",
      link: "https://claude.ai/artifact/VPACRDV4pgWAE71KkoUrif",
      color: "azul",      // azul | verde | morado
      icono: "regalo",    // regalo | diana | trofeo
      descripcion: "Seguimiento de promociones ejecutadas, redenciones e inversión en bonificaciones por tipo de mecánica, sucursal, jefe de ventas, vendedor y cliente.",
      etiquetas: ["Promociones ejecutadas", "Redenciones", "Inversión y liquidación"],
      nota: "La liquidación presentada es referencial y está sujeta a validación."
    },
    {
      nombre: "Incentivos",
      estado: "activo",
      link: "https://andorea23.github.io/INCENTIVOS_PG/",
      color: "verde",
      icono: "diana",
      descripcion: "Seguimiento del desempeño de los incentivos comerciales, evaluando el avance de sell out, cobertura y cumplimiento de cuotas por sucursal, jefe de ventas, supervisor y vendedor.",
      etiquetas: ["Sell Out", "Cobertura", "Cumplimiento", "Prioridades"],
      nota: ""
    },
    {
      nombre: "Cuentas Top y Surte y Gana",
      estado: "activo",
      link: "https://claude.ai/artifact/TvnbHDJH9FhFndHW9vBv7N",
      color: "morado",
      icono: "trofeo",
      descripcion: "Consulta el avance de Cuentas Top y Surte y Gana, con seguimiento de cuotas, ventas en soles, cumplimiento de surtido y cobertura perfecta, incluyendo comparativos frente al periodo anterior.",
      etiquetas: ["Cuentas Top", "Surtido mes", "Cobertura perfecta"],
      nota: ""
    }
  ]
};
