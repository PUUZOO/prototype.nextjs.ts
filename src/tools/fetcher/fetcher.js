let headers = { accept: "application/json" };

export default {
  get: async (url, options, headersCustom) =>
    fetch(url, {
      method: "GET",
      headers: { ...headers, ...headersCustom },
      ...options,
    }),
  post: async (url, options, headersCustom) =>
    fetch(url, {
      method: "POST",
      headers: { ...headers, ...headersCustom },
      ...options,
    }),
};
