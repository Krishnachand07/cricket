export const addText =(add)=>{
    console.log(add.team);
    return{
        type : "ADD_TEXT",
        payload : add
    }
};