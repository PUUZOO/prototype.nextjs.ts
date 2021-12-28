// Get token on client side
const headersWithToken = () => {
  const myHeaders = {
    "Content-Type": "application/json",
    Authorization: "",
  };

  if (typeof window !== "undefined") {
    const urlSearchParams: any = window ? new URLSearchParams(window.location.search) : undefined;
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params) myHeaders["Authorization"] = `Bearer ${params.token}`;
  }
  return myHeaders;
};

export interface FetchetProps {
  url: string;
  body?: { [key: string]: string };
  options?: { [key: string]: string };
  headersCustom?: { [key: string]: string };
}

const fetcher = {
  get: async (url: string, options = {}, headersCustom = {}): Promise<any> => {
    const result = await fetch(url, {
      method: "GET",
      headers: { ...headersWithToken(), ...headersCustom },
      ...options,
    });
    return result;
  },
  post: async (url: string, body = {}, options = {}, headersCustom = {}): Promise<any> => {
    const result = await fetch(url, {
      method: "POST",
      headers: { ...headersWithToken(), ...headersCustom },
      body: JSON.stringify(body),
      ...options,
    });
    return result;
  },
};

export default fetcher;
