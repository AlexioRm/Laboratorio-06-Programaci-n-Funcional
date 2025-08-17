function obtenerNombres(movimientos) {
  return movimientos.map(mov => mov.nombre);
}

function obtenerValores(movimientos) {
  return movimientos.map(mov => mov.valor);
}

function calcularTotal(valores) {
  return valores.reduce((total, valor) => total + valor, 0);
}

function contarPorTipo(movimientos) {
  return {
    ingresos: movimientos.filter(m => m.tipo === "ingreso").length,
    gastos: movimientos.filter(m => m.tipo === "gasto").length
  };
}

function obtenerIngresos(movimientos) {
  return movimientos.filter(mov => mov.tipo === "ingreso");
}

function obtenerGastos(movimientos) {
  return movimientos.filter(mov => mov.tipo === "gasto");
}

function filtrarPorMonto(movimientos, minimo) {
  return movimientos.filter(mov => mov.valor >= minimo);
}

function buscarPorNombre(movimientos, nombre) {
  return movimientos.find(mov => 
    mov.nombre.toLowerCase().includes(nombre.toLowerCase())
  );
}

function obtenerPrimero(movimientos, tipo) {
  return movimientos.find(mov => mov.tipo === tipo);
}

function obtenerTotalPorTipo(movimientos, tipo) {
  const filtrados = movimientos.filter(m => m.tipo === tipo);
  return calcularTotal(obtenerValores(filtrados));
}

function generarReporte(movimientos) {
  const ingresos = obtenerIngresos(movimientos);
  const gastos = obtenerGastos(movimientos);

  return {
    totalIngresos: calcularTotal(obtenerValores(ingresos)),
    totalGastos: calcularTotal(obtenerValores(gastos)),
    cantidad: movimientos.length
  };
}

function calcularBalance(movimientos) {
  const reporte = generarReporte(movimientos);
  return reporte.totalIngresos - reporte.totalGastos;
}

function obtenerPromedio(movimientos, tipo) {
  const filtrados = movimientos.filter(m => m.tipo === tipo);
  if (filtrados.length === 0) return 0;
  return calcularTotal(obtenerValores(filtrados)) / filtrados.length;
}

function validarPresupuesto(movimientos, limite) {
  const totalGastos = obtenerTotalPorTipo(movimientos, "gasto");
  return totalGastos > limite
    ? "Los gastos superan el límite"
    : "Los gastos están dentro del límite";
}
