/**
 * To use axios in a development
 * environment run:
 *
 * > adb reverse tcp:3333 tcp:3333
 *
 */
import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/henriquefiorini/SimpleStoreMobile',
});

export default api;
