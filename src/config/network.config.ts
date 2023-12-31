export default {
  baseURL: import.meta.env.VITE_API_URL,
  contentType: "application/json;charset=UTF-8",
  accept: "application/json",
  errorNetworkCode: "ERR_NETWORK",
  messageDuration: 3000,
  timeout: 5000,
  okCode: 200,
  createdCode: 201,
  notContentCode: 204,
  movedPermanentlyCode: 301,
  badRequestCode: 400,
  unauthorizedCode: 401,
  forbiddenCode: 403,
  notFoundCode: 404,
  methodNotAllowCode: 405,
  requestTimeoutCode: 408,
  unprocessableEntityCode: 422,
  tooManyRequestsCode: 429,
  internalServerCode: 500,
  serviceUnavailableCode: 503,
};
