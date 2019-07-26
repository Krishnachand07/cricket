import { FETCH } from '../actions/index'

export default function(state=[], action)// using array[] list for multiple cities...
{
    switch(action.type)
    {
        case FETCH :
        return[action.payload.data, ...state]; //ES6 version code. normal code: "return state[action.payload.data];"
    }
    return state;
}