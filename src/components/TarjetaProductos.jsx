
export const TarjetaProductos = ({ caracteristica }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px', margin: '8px' }}>
      <h3>{caracteristica.Nombre}</h3>
      <h4 style={{ color: "#2f058b" }}>Precio: ${caracteristica.precio}</h4>
      <p><strong>Grupo:</strong> {caracteristica.grupo}</p>
      <p><strong>Cosecha:</strong> {caracteristica.cosecha}</p>
    </div>
  );
};