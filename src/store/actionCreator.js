import {CHANG_INPUT,ADD_ITEM,DEL_ITEM} from './actionTypes';

const changeInput = (value)=>({
    type:CHANG_INPUT,
    value,
})

const addItem = (value)=>({
    type:ADD_ITEM,
})

const delItem = (value)=>({
    type:DEL_ITEM,
    value
})

export {
    changeInput,
    addItem,
    delItem
}