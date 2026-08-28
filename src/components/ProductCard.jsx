export const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px', margin: '8px' }}>
      <h3>{product.Nombre}</h3>
      <h4 style={{ color: "#E9967A" }}>Precio: ${product.precio}</h4>
      <p><strong>Grupo:</strong> {product.grupo}</p>
      <p><strong>Cosecha:</strong> {product.cosecha}</p>
    </div>
  );
};