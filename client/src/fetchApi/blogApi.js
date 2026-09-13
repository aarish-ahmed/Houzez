const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addBlogApi = async (formData) => {
  const response = await fetch(
    `${API_URL}/api/blog/add`,
    {
      method: "POST",
      body: formData,
    }
  );

  const text = await response.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch (error) {
    console.error("Backend returned non-JSON:", text);

    throw new Error(
      `Server returned invalid response: ${text.slice(0, 100)}`
    );
  }

  if (!response.ok) {
    throw new Error(data.message || "Failed to add blog");
  }

  return data;
};

export const getBlogsApi = async () => {
  const response = await fetch(`${API_URL}/api/blog`, {
    method: "GET",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch blogs");
  }

  return data;
};

export const getBlogBySlugApi = async (slug) => {
  const response = await fetch(
    `${API_URL}/api/blog/${slug}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch blog");
  }

  return data;
};