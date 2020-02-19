import http from './http';

const idList = process.env.VUE_APP_CHARACTERS;

export function loadResource(search) {
  const endpoint = search ? 'character' : `character/${idList}`;
  return http.get(endpoint, { params: { name: search } }).then((response) => response.data.results || response.data);
}
