import { supermercado } from '../data/supermercado.js';
import { ProductCard } from './ProductCard';

export const ListaProductos = () => {
  return (
    <div>
      <h2>Inventario del Supermercado ({supermercado.length} productos)</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
        {supermercado.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};