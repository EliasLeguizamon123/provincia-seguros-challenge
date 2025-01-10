import axios from 'axios';

const url = 'https://magicloops.dev/api/loop/edbfcf0d-144d-4053-b584-972a316cb2dd/run';

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

            return data.results.map((results: any) => ({
                ...results,
                province
            }));
        }));

        return results.flat();
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error de Axios:', error.response?.data || error.message);
        } else {
            console.error('Error desconocido:', error);
        }
    }
};
