export default function (state = null, action) {
    switch (action.type) {
        case 'IMG_ADD_SUCCESS':
            return action.payload.user;
            break;
        case 'IMG_REMOVE_SUCCESS':
            return action.payload.user;
            break;
    }
    return state;
}