//API
const all = "all";
const get = "get";
const post = "post";
const put = "put";
const del = "del";
const clear = "clear";
const API = [all, get, post, put, del, clear];
//TYPES
const success = "success";
const fail = "fail";
const TYPE = [success, fail];
const self = "self";
const services = [self];
function createCRUDE(base) {
  return API.reduce((acc, type) => {
    acc[type] = createType(`${base}_${type}`);
    return acc;
  }, {});
}
function createType(base) {
  return TYPE.reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

//AUTH
function createDoc(base) {
  return services.reduce((acc, type) => {
    acc[type] = createCRUDE(`${base}_${type}`);
    return acc;
  }, {});
}
function createAPI(base) {
  return ["auth", "account"].reduce((acc, type) => {
    acc[type] = createDoc(`${base}_${type}`);
    return acc;
  }, {});
}
const api = createAPI("api");
const AUTH_REQUEST = "AUTH_REQUEST";
export { all, get, post, put, del, clear, AUTH_REQUEST, api };
