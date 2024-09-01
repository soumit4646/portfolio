import { createClient } from "contentful";

const space_id = import.meta.env.VITE_SPACE_ID;
const api_token = import.meta.env.VITE_ACCESS_TOKEN;

const client = createClient({
  space: space_id,
  accessToken: api_token,
});

export default client;
