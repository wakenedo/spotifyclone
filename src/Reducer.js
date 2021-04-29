export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after finished development
    //Not getting playlists
    //token: 'BQAamo73ivlNks9Pf9x6IsaNRPbLxxHhql4Ir81UnMXpHrCO8BRreOVJjSwwWdP26a432otn52xbW1wgMWdTEEEeNMCXQN8BgHkOVWBq9f3SxNirlDxJZIBYmJhPOW0QCtn8lJB3TLloQZARqV_IoS7e-HdUi7TO0VtfNKUPTbfTfmBp'
};

const reducer = (state, action) => {
console.log(action);
// Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                };
            
            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists,
                };
            
                case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                }       
            
                default: return state;
    }


}

export default reducer;