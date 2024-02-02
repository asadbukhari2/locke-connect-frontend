import { clearCookie, getCookie } from './common';

let trigger = false;
function handleResponse(response) {
  if (response.status === 401 && !trigger && getCookie(process.env.NEXT_PUBLIC_TOKEN)) {
    trigger = true;
    clearCookie(process.env.NEXT_PUBLIC_TOKEN);

    window.location.reload();
  }
  return response;
}
function get(url) {
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_TOKEN)}`,
  };
  const requestOptions = {
    method: 'GET',
    headers,
  };
  return fetch(url, requestOptions).then(res => handleResponse(res));
}

function post(url, body) {
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_TOKEN)}`,
  };

  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  };

  return fetch(url, requestOptions).then(res => handleResponse(res));
}

function upload(url, body) {
  const headers = {
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_TOKEN)}`,
  };

  const requestOptions = {
    method: 'POST',
    headers,
    body,
  };

  return fetch(url, requestOptions).then(res => handleResponse(res));
}

function put(url, body) {
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_TOKEN)}`,
  };
  const requestOptions = {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(res => handleResponse(res));
}

function _delete(url, body) {
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_TOKEN)}`,
  };
  const requestOptions = {
    method: 'DELETE',
    headers,
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(res => handleResponse(res));
}

function patch(url, body) {
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_TOKEN)}`,
  };
  const requestOptions = {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(res => handleResponse(res));
}

export const Fetch = {
  get,
  post,
  put,
  delete: _delete,
  patch,
  upload,
};
