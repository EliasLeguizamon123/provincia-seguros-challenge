import axios from 'axios';

const apiKey = import.meta.env.VITE_MAPS_TOKEN;

export const getPlaces = async (query = 'McDonald\'s', city = 'Buenos Aires') => {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}+in+${encodeURIComponent(city)}&key=${apiKey}`;
    
    try {
        const { data } = await axios.get(url);
        console.log('Resultados:', data);
        return data.results;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error de Axios:', error.response?.data);
        } else {
            console.error('Error desconocido:', error);
        }
    }
};
