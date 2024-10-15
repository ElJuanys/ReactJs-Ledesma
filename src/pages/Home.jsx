//src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import url from '../config/fetchInfo';
import '../css/style.css';
import { useNavigate } from 'react-router-dom'; // Cambiar useHistory a useNavigate

function Home() {
  const [platos, setPlatos] = useState([]);
  const navigate = useNavigate(); // Hook para redirigir a otra ruta
  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = () => {
    fetch(`${url}/traerPlatos`)
      .then(response => response.json())
      .then(data => {
        setPlatos(data);
      });
  };

  const handleMouseOver = (event) => {
    const row = event.currentTarget;
    row.classList.add('hovered');
  };

  const handleMouseOut = (event) => {
    const row = event.currentTarget;
    row.classList.remove('hovered');
  };

  const handleDishClick = (platoId) => {
    navigate(`/platoDetails/${platoId}`);
  };
  return (
    <div>
      <h1>Seleccione su plato para ver mas detalles</h1>
      <table>
        <thead>
          <tr>
            <th className="column-header">Nombre</th>
            <th className="column-header">Descripción</th>            
            <th className="column-header">Categoría</th>
            <th className="column-header">Precio</th>
          </tr>
        </thead>
        <tbody>
          {platos.map((dishJSX) => (
            <tr
              key={dishJSX.id}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleDishClick(dishJSX.id)}
              style={{ cursor: 'pointer' }}
            >
              <td className="celdas alineacion-izq">{dishJSX.nombre}</td>
              <td className="celdas">{dishJSX.descripcion}</td>              
              <td className="celdas">{dishJSX.categoria}</td>
              <td className="celdas bolder">${dishJSX.precio.toLocaleString('es-AR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;