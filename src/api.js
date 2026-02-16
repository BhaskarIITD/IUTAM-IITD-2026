const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// 1. Internal helper function to handle the Fetch logic
async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Parse JSON response
  let data;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  // 2. Handle Errors (mimic Axios error structure)
  if (!response.ok) {
    const error = new Error(data?.message || "Request failed");
    // Attach the response data to the error object so Login.jsx can read 'err.response.data.message'
    error.response = {
      data: data,
      status: response.status,
    };
    throw error;
  }

  // 3. Return object with 'data' key (mimic Axios response structure)
  // This is crucial because Login.jsx does: response.data.token
  return { data };
}

// 4. Create the 'api' object that Login.jsx expects
const api = {
  get: (endpoint) => apiFetch(endpoint, { method: "GET" }),
  
  post: (endpoint, body) => 
    apiFetch(endpoint, { method: "POST", body: JSON.stringify(body) }),
    
  put: (endpoint, body) => 
    apiFetch(endpoint, { method: "PUT", body: JSON.stringify(body) }),
    
  delete: (endpoint) => apiFetch(endpoint, { method: "DELETE" }),
};

export default api;