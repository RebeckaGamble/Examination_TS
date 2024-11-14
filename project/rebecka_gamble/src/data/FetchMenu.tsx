export async function FetchMenu() {
  const apiKey: string | undefined = import.meta.env.VITE_API_KEY;
  const apiUrl: string = import.meta.env.VITE_API_URL;

  if (apiKey) {
    try {
      const response = await fetch(`${apiUrl}/menu`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-zocom": apiKey,
        },
      });
      const result = await response.json();
    //   console.log("menu result: ", result);
      return result.items;
    } catch (error) {
      console.error("Fetch menu failed:", error);
      return { error: "Fetch failed" };
    }
  }
  return { error: "API key is missing" };
}
