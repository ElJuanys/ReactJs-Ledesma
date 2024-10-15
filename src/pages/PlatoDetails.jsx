// src/components/WineDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importar useNavigate
import url from '../config/fetchInfo';

const PlatoDetails = () => {
  const { platoId } = useParams(); 
  const platoIdLong = Number(platoId); 
  const [selectedDish, setSelectedDish] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (platoIdLong) {
      fetch(`${url}/traerPlato?id=${platoIdLong}`) 
        .then(response => response.json())
        .then(data => setSelectedDish(data));
    }
  }, [platoIdLong]);

  const backToTheBasics = () => {
    navigate(`/`); 
  };

  return (
    <div>
      <h2>Detalles del Plato:</h2>
      {selectedDish && (
        <div className="detail" >
          <div className="detail-content">
            <h3>{selectedDish.nombre}</h3>            
            <p><strong>Descripción:</strong> {selectedDish.descripcion}</p>            
            <p><strong>Categoria:</strong> {selectedDish.categoria}</p>                        
            <p><strong>Precio:</strong> ${selectedDish.precio.toLocaleString('es-AR')}</p>
            <span className="cerrar" onClick={backToTheBasics}>&times;VOLVER</span> {/* Cambiar aquí */}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatoDetails;