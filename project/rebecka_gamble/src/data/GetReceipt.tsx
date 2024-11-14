export async function GetReceipt(orderId: string) {
  const apiKey: string | undefined = import.meta.env.VITE_API_KEY;
  const apiUrl: string = import.meta.env.VITE_API_URL;

  if (apiKey) {
    try {
      const response = await fetch(`${apiUrl}/receipts/${orderId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-zocom": apiKey,
        },
      });
      const result = await response.json();
      console.log("receipt result: ", result);
      return result.receipt;
    } catch (error) {
      console.error("Fetch receipt failed:", error);
      return { error: "Fetch failed" };
    }
  }
  return { error: "API key is missing" };
}
