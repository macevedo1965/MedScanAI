export async function POST(request) {
  try {
    const data = await request.json();
    console.log("data", data);
    // Aquí puedes procesar los datos recibidos

    return new Response(
      JSON.stringify({ message: "Datos recibidos correctamente", data }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error procesando la solicitud" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
