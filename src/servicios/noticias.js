import axios from 'axios';

const API_URL = 'https://newsapi.org/v2';
const API_KEY = '291f24ba19a44f0389848b0557045336';

export const obtenerNoticias = async (criterioBusqueda, fuente, fechaInicio, fechaFin, pageNumber) => {
    try {
      const respuesta = await axios.get(`${API_URL}/everything`, {
        params: {
          q: criterioBusqueda,
          sources: fuente,
          from: fechaInicio,
          to: fechaFin,
          sortBy: 'publishedAt',
          pageSize: 30, // <-- Actualizar el valor de "pageSize" a 10
          page: 3, // <-- Enviar el número de página actual como argumento
          language: 'es',
          apiKey: API_KEY,
        },
      });
      return respuesta.data.articles;
    } catch (error) {
      console.error(error);
    }
  };

  