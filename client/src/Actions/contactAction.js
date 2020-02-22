import {GET_CONTACT} from "./type";
import axios from 'axios';

export const getcontact = () => dispatch => {
    return axios.get("/get_contact")
    .then(res => res.data)
    .then(data => dispatch({
        type: GET_CONTACT,
        payload: data
        })
      )
      .catch(err => console.log(err))
  };

export const addcontact =newcontact => dispatch => {
return axios.post("/new_contact",newcontact)
.then(()=> dispatch(getcontact()))
.catch(err => console.log(err))

};
export const deletecontact = id => dispatch=>{
  return axios.delete(`/delete_contact/${id}`)
  .then(()=>dispatch(getcontact()))
  .catch(err => console.log(err))
};


export const editcontact = (id,editcontact) => dispatch => {
    return axios.put(`/update_contact/${id}`,editcontact)
.then(() => dispatch(editcontact()))
.catch(err => console.log(err))
  };