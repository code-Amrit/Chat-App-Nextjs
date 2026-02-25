
const getBaseUrl = () => {
    if (typeof window === "undefined") {
      return process.env.API_URL;
    }
    return process.env.NEXT_PUBLIC_API_URL;
  };
  
  async function handleResponse<T>(res: Response): Promise<T> {
    if (!res.ok) {
      let message = "API request failed";
      try {
        const err = await res.json();
        message = err.message || message;
      } catch {}
      throw new Error(message);
    }
    return res.json();
  }
  
  export async function httpGet<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const res = await fetch(`${getBaseUrl()}${endpoint}`, {
      credentials: "include",
      ...options,
    });
  
    return handleResponse<T>(res);
  }
  
  export async function httpPost<T>(
    endpoint: string,
    body: unknown,
    options?: RequestInit
  ): Promise<T> {
    const res = await fetch(`${getBaseUrl()}${endpoint}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(body),
      ...options,
    });
  
    return handleResponse<T>(res);
  }