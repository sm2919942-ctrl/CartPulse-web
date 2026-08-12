const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8080";

export async function createOrder(orderData) {
  try {
    const response = await fetch(
      `${API_URL}/api/orders`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(orderData)
      }
    );

    if (!response.ok) {
      throw new Error("Order API failed");
    }

    const data = await response.json();

    return {
      order: data,
      demoMode: false
    };

  } catch (error) {

    console.log(
      "Backend unavailable. Saving order locally."
    );

    const existingOrders =
      JSON.parse(
        localStorage.getItem("cartpulseOrders")
      ) || [];

    const localOrder = {
      id: `CP${Date.now()}`,
      orderNumber: `CP${Date.now()}`,
      ...orderData,
      total: orderData.totalAmount,
      status: "Placed",
      date: new Date().toLocaleDateString("en-IN")
    };

    localStorage.setItem(
      "cartpulseOrders",
      JSON.stringify([
        localOrder,
        ...existingOrders
      ])
    );

    return {
      order: localOrder,
      demoMode: true
    };
  }
}