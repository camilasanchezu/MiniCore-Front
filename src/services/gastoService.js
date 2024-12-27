// services/gastosService.js

const API_BASE_URL = "https://localhost:7047/api/Gastos";

export const filtrarPorFechas = async (fechaInicio, fechaFin) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/FiltrarPorFechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
    );

    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en filtrarPorFechas:", error);
    throw error;
  }
};
