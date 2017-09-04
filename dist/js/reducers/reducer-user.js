'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'IMG_ADD_SUCCESS':
            return action.payload.user;
            break;
        case 'IMG_REMOVE_SUCCESS':
            return action.payload.user;
            break;
    }
    return state;
};