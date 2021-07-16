import api from './config';

export const _draws = data =>
    api.get('/draw/', {
        params: {
            ...data,
            status: 'active',
            type: 'instagram',
        },
    });
export const _draw = id => api.get(`/draw/${id}`);
export const _postImage = data => api.post(`/get_img_post`, data);
export const _drawsFavorites = data =>
    api.get('/draws', {
        params: {
            id: data.favoritesId.join(','),
        },
    });
