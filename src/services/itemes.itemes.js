"use server";

export const getItems = async (params = {}) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    // Use relative URL for server-side requests
    const baseUrl = typeof window === 'undefined' 
      ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
      : '';
    const url = `${baseUrl}/api/items${queryString ? `?${queryString}` : ''}`;
    
    const res = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch items');
    }
    
    const data = await res.json();
    return data; // This is already an array
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
};

export const getSingleItem = async (id) => {
  try {
    // Use relative URL for server-side requests
    const baseUrl = typeof window === 'undefined' 
      ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
      : '';
    const res = await fetch(`${baseUrl}/api/items/${id}`, {
      next: {
        revalidate: 60,
      },
    });
    
    if (!res.ok) {
      console.error(`API Error: ${res.status} - ${res.statusText}`);
      throw new Error(`Failed to fetch item: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching item:', error);
    return null;
  }
};
