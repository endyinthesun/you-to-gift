import api from './config';
import {Linking} from 'react-native';

export const _draws = (config, data) =>
  api.get('/draw/', {
    ...config,
    params: {
      ...data,
      type: 'instagram',
    },
  });
export const _drawsFavorites = (config, data, idArr) =>
  api.get('/draws', {
    ...config,
    params: {
      ...data,
      id: idArr.join(','),
    },
  });

export const _draw = id => api.get(`/draw/${id}`);
export const _postImage = (data, config) =>
  api.post(`/get_img_post`, data, config);

export const _excelLink = id =>
  Linking.openURL(`https://youtogift.com/api/get_csv?id=${id}`);
