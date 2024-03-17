export const getAllCategories = async () => {
    const res = await fetch(
      "http://localhost:3000/duas"
    );
  
    return res.json();
  };
  