import Types from "../../actions/types";

const defaultState = {
    theme: "blue"
};
const themeReducer = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case Types.THEME_CHANGE:
            return {
                ...state,
                theme: action.theme
            };
        case Types.THEME_INIT:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default themeReducer;
