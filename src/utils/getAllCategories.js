export const getAllCategories = async () => {
    const res = await fetch(
      "http://localhost:3000/categories"
    );
  
    return res.json();
  };
  