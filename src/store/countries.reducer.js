const intialstate={
    countries:[]
}
function Countriesreducer(state=intialstate,action){
    if(action.type=="LOADCOUNRIES"){
        return {...state,countries:action.payload}
    }
    return state
}
export default Countriesreducer