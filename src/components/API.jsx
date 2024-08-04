const API_ENDPOINT = 'https://34.47.122.212:8080/gemini/chat';

const fetchData = async (endpoint, options) => {
  try {
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      console.error('HTTP error', response.status, response.statusText);
      throw new Error(`HTTP error status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const postData = async (data) => {
  return fetchData(`${API_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
