import {CHANG_INPUT,ADD_ITEM,DEL_ITEM} from './actionTypes';

const defaultState={
    inputValue:'hello',
    list:[]
}

export default (state=defaultState,action) =>{
    if(action.type === CHANG_INPUT){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue)
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DEL_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1)
        return newState;
    }
    return state;
}