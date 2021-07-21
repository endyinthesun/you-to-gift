import api from './config';
import * as WebBrowser from 'expo-web-browser';

export const _draws = data =>
    api.get('/draw/', {
        params: {
            ...data,
            status: 'active',
            type: 'instagram',
        },
    });
export const _draw = id => api.get(`/draw/${id}`);
export const _postImage = (data, config) =>
    api.post(`/get_img_post`, data, config);
export const _drawsFavorites = data =>
    api.get('/draws', {
        params: {
            id: data.favoritesId.join(','),
        },
    });
export const _excelLink = id =>
    WebBrowser.openBrowserAsync(`https://youtogift.com/api/get_csv?id=${id}`);
