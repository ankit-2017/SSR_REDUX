import axios from 'axios'

export const FETCH_USER = 'fetch_user'

export const FetchUser = () => async dispatch => {
    const res = await axios.get('http://react-ssr-api.herokuapp.com/users')

    dispatch({
        type: FETCH_USER,
        payload: res
    })
}