export default function reducer(state={
  coinmap: [],
  fetching: false,
  fetched: false,
  error: null
}, action){
  switch(action.type){
    case 'FETCH_COINMAP':{
      return {...state, fetching: true}
    }
    case 'FETCH_COINMAP_FULFILLED':{
      return {...state, fetching: false, fetched: true, coinmap: action.payload}
    }
    case 'FETCH_COINMAP_REJECTED':{
      return {...state, fetching: false, error: action.payload}
    }
  }
  return state;
}
