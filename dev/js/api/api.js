import Images from './../models/images.js';
import Users from './../models/users.js';

function send(user, cb) {
	Images.find((err, data) => {
		if(err) console.log(err);
		cb({
			user: user,
			images: data
		});
	});
}

export function addImg(query, cb) {
	Users.findOne({'twitter.id': query.userId}, (err, data) => {
		if(err) console.log(err);
		data.imgIds.push(query.id);
		data.save(err => {
			if(err) console.log(err);
			var newImg = new Images({
				id: query.id,
				user: data.twitter.username,
				userId: data.twitter.id,
				title: query.title,
				url: query.url,
				date: new Date()
			});
			newImg.save(err => {
				if(err) console.log(err);
				send(data, cb);
			});
		});
	});
}

export function removeImg(query, cb) {
	Users.findOne({'twitter.id': query.userId}, (err,data) => {
		if(err) console.log(err);
		data.imgIds = data.imgIds.filter(e => e !== query.imgId);
		data.save(err => {
			if(err) console.log(err);
			Images.findOneAndRemove({id: query.id}, err => {
				if(err) console.log(err);
				send(data, cb);
			});
		});
	});
}
/*
export function findUser(query, cb) {
	Users.findOne({'twitter.id': query.userId}, (err,data) => {
		if(err) console.log(err);
		cb(data);
	});
}*/