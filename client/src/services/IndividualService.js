import http from '../http-common';

const getAll = () => {
  return http.get("/individuals");
};
const get = id => {
  return http.get(`/individuals/${id}`);
};

const create = data => {
  return http.post("/individuals", data);
};

const update = (id, data) => {
  return http.put(`/individuals/${id}`, data);
};

const remove = id =>  {
  return http.delete(`/individuals/${id}`);
};

const removeAll = () =>{
  return http.delete(`/individuals`);
}

const findByFirstName = firstName => {
  // console.log("reached findByFirstName")
  return http.get(`/individuals?firstName=${firstName}`);
}


const findByName = (firstName, lastName) => {
  console.log("reached findByName memberService", firstName, lastName);
  return http.get(`/individuals?firstName=${firstName}&lastName=${lastName}`);
}

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByFirstName,
  findByName
}