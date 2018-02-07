import axios from 'axios';

export function fetchCoinmap(){
  return function(dispatch){
    //Local Function
    const ax = axios.create({
      baseURL: 'http://localhost:8080/data'
    })
    ax.get('coinmap.json')
      .then((response) => {
        dispatch({type: 'FETCH_COINMAP_FULFILLED', payload:response.data});
      })
      .catch((err) =>{
        dispatch({type: 'FETCH_COINMAP_REJECTED', payload:err});
      })
    // Live Function

    // axios.get('https://coinmap.org/api/v1/venues/')
    //   .then((response) => {
    //     dispatch({type: 'FETCH_COINMAP_FULFILLED', payload:response.data});
    //   })
    //   .catch((err) =>{
    //     dispatch({type: 'FETCH_COINMAP_REJECTED', payload:err});
    //   })
  }
}
