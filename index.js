export default function reduxResetReducers(reducers, resetType = 'RESET_STATE'){
    const newReducers = {};

    Object.keys(reducers).forEach(function(key){
        const reducer = reducers[key];
        newReducers[key] = (state, action) => {
            if (action.type === resetType) {
                return reducer(undefined, {});
            }
            return reducer(state, action);
        }
    });

    return newReducers;
}