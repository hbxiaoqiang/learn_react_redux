import React from 'react';
import { connect } from 'react-redux';
import {changeInput,addItem,delItem} from './store/actionCreator'


function TodoList(props){
    const {inputValue,changeInputValue,handleClick,handleDel} = props;
    return (
        <div>
            <div>
                <input
                 value={inputValue}
                 onChange={changeInputValue}
                />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    props.list.map((item,index)=>{
                        return (
                            <li onClick={()=>{handleDel(index)}} key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        changeInputValue(e){
            dispatch(changeInput(e.target.value))
        },

        handleClick(){
            dispatch(addItem())
        },

        handleDel(index){
            dispatch(delItem(index))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
//TodoList通过connect 把store的数据映射到组件里