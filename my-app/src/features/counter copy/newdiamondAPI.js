/* eslint-disable no-template-curly-in-string */
import axios from 'axios'


const MY_SERVER='http://127.0.0.1:5000/'

export async function  getdimond () {
  console.log("GET DIAMOND ")
  return await axios.get(MY_SERVER).then(res => ({data:res.data} ));
}
export async function adddimond(data) {
  console.log(data)
  console.log("hjhjhj")
    return new Promise ( axios.post(MY_SERVER+'add',data)
    .then(res=>(console.log({data:res.data}))));
}
export async function updimond(diamond_id, data) {
  console.log('Updating diamond with id', diamond_id);
  return axios.put(`${MY_SERVER}update/${diamond_id}`, data)
    .then(res => console.log({data: res.data}))
    .catch(error => console.error(error));
};






