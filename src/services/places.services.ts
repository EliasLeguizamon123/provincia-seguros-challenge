import axios from 'axios';

const url = 'https://magicloops.dev/api/loop/edbfcf0d-144d-4053-b584-972a316cb2dd/run';

/**
 * Obtiene una lista de lugares basados en una consulta y un conjunto de provincias.
 * @param {string} [query='Provincia Seguros'] - La consulta de búsqueda a utilizar.
 * @param {string[]} [provinces=['Buenos Aires', 'Neuquén', 'Tierra del Fuego', 'Córdoba', 'Misiones', 'Santa Fe']] - Lista de provincias donde se realizará la búsqueda.
 * @returns {Promise<Object[]>} Una promesa que resuelve a una lista de objetos que contienen los resultados de búsqueda con su provincia correspondiente.
 * @throws Muestra errores de Axios o errores desconocidos en la consola.
 */

export const getPlaces = async (query = 'Provincia Seguros', provinces = ['Buenos Aires', 'Neuquén', 'Tierra del Fuego', 'Córdoba', 'Misiones', 'Santa Fe']) => {
    try {
        const results = await Promise.all(provinces.map(async (province) => {
            const payload = {
                query: `${query} en ${province}`
            };

            const { data } = await axios.post(url, payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Mapea los resultados y agrega la provincia correspondiente a cada uno.
            return data.results.map((results: any) => ({
                ...results,
                province
            }));
        }));

        // Aplana la lista de resultados y la devuelve.
        return results.flat();
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error de Axios:', error.response?.data || error.message);
        } else {
            console.error('Error desconocido:', error);
        }
    }
};
