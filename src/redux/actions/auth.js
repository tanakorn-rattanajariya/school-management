import { AUTH_REQUEST } from "./type";
export default {
  call: (api, doc, item, id, props) => ({
    type: AUTH_REQUEST,
    api,
    doc,
    item,
    id,
    props
  })
};
