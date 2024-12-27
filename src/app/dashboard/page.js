"use client";
import { useState } from "react";
import { filtrarPorFechas } from "../../services/gastoService";

const GastosFiltrados = () => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [gastos, setGastos] = useState([]);
  const [error, setError] = useState("");

  const handleFiltrar = async () => {
    setError("");
    try {
      const data = await filtrarPorFechas(fechaInicio, fechaFin);
      setGastos(data);
    } catch (err) {
      setError(
        "Hubo un error al obtener los datos. Por favor, revisa las fechas."
      );
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Filtrar Gastos por Rango de Fechas
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <div>
          <label htmlFor="fechaInicio" className="block text-sm font-medium">
            Fecha Inicio:
          </label>
          <input
            type="date"
            id="fechaInicio"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="fechaFin" className="block text-sm font-medium">
            Fecha Fin:
          </label>
          <input
            type="date"
            id="fechaFin"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <button
          onClick={handleFiltrar}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Filtrar
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {gastos.length > 0 && (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Departamento</th>
              <th className="border border-gray-300 p-2">Total Gasto</th>
            </tr>
          </thead>
          <tbody>
            {gastos.map((gasto, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">
                  {gasto.departamento}
                </td>
                <td className="border border-gray-300 p-2">
                  ${gasto.totalGasto.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GastosFiltrados;
