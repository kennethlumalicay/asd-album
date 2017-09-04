import axios from 'axios';

export function addImg(dispatch, url, title, id, userId) {
	dispatch({type: 'IMG_ADD_PENDING'});
	axios({
		url: '/api/addImg',
		params: {
			url: url,
			title: title,
			id: id,
			userId: userId
		}
	}).then(res => {
		dispatch({type: 'IMG_ADD_SUCCESS', payload: res.data});
	}).catch(err => {
		console.log(err);
		dispatch({type: 'IMG_ADD_FAIL'});
	});
}

export function removeImg(dispatch, id, userId) {
	dispatch({type: 'IMG_REMOVE_PENDING'});
	axios({
		url: '/api/removeImg',
		params: {
			id: id,
			userId: userId
		}
	}).then(res => {
		dispatch({type: 'IMG_REMOVE_SUCCESS', payload: res.data});
	}).catch(err => {
		console.log(err);
		dispatch({type: 'IMG_REMOVE_FAIL'});
	});
}