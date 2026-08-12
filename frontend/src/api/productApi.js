import fallbackProducts from "../data/products";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8080";

export async function getProducts() {

  try {

    const response = await fetch(
      `${API_URL}/api/products`
    );

    if (!response.ok) {
      throw new Error(
        "Could not load products"
      );
    }

    const data =
      await response.json();

    if (!data.length) {
      throw new Error(
        "No backend products found"
      );
    }

    return {
      products: data,
      demoMode: false
    };

  } catch (error) {

    console.log(
      "Backend unavailable. Using local products."
    );

    return {
      products: fallbackProducts,
      demoMode: true
    };
  }
}


export async function getProductById(id) {

  try {

    const response = await fetch(
      `${API_URL}/api/products/${id}`
    );

    if (!response.ok) {
      throw new Error(
        "Product unavailable"
      );
    }

    const product =
      await response.json();

    return {
      product,
      demoMode: false
    };

  } catch (error) {

    const product =
      fallbackProducts.find(
        (item) =>
          item.id === Number(id)
      );

    return {
      product,
      demoMode: true
    };
  }
}