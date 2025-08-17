
const movimientos = [
  { nombre: "Salario", tipo: "ingreso", valor: 3000 },
  { nombre: "Comida", tipo: "gasto", valor: 200 },
  { nombre: "Freelance", tipo: "ingreso", valor: 500 },
  { nombre: "Transporte", tipo: "gasto", valor: 150 }
];

console.log("Nombres:", obtenerNombres(movimientos));
console.log("Valores:", obtenerValores(movimientos));
console.log("Total:", calcularTotal(obtenerValores(movimientos)));
console.log("Contar por tipo:", contarPorTipo(movimientos));

console.log("Ingresos:", obtenerIngresos(movimientos));
console.log("Gastos:", obtenerGastos(movimientos));
console.log("Filtrar >= 200:", filtrarPorMonto(movimientos, 200));

console.log("Buscar 'Comida':", buscarPorNombre(movimientos, "comida"));
console.log("Primer ingreso:", obtenerPrimero(movimientos, "ingreso"));
console.log("Total por tipo (ingreso):", obtenerTotalPorTipo(movimientos, "ingreso"));

console.log("Reporte:", generarReporte(movimientos));
console.log("Balance:", calcularBalance(movimientos));
console.log("Promedio ingresos:", obtenerPromedio(movimientos, "ingreso"));
console.log("Validación de presupuesto (limite=300):", validarPresupuesto(movimientos, 300));
