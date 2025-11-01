import { useState } from 'react'
import { menuOptions } from '../data/menuOptions'
import './MealSelector.css'

const mealTypeLabels = {
  desayuno: '☕ Desayuno',
  almuerzo: '🥪 Almuerzo',
  comida: '🍽️ Comida',
  cena: '🌙 Cena'
}

function MealSelector({ mealType, onSelect, onClose, currentMeal }) {
  const [searchTerm, setSearchTerm] = useState('')

  const options = menuOptions[mealType] || []

  const filteredOptions = options.filter(option =>
    option.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="meal-selector-overlay" onClick={onClose}>
      <div className="meal-selector" onClick={(e) => e.stopPropagation()}>
        <div className="selector-header">
          <h2>{mealTypeLabels[mealType]}</h2>
          <button className="btn-close" onClick={onClose}>✕</button>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>

        <div className="options-grid">
          {filteredOptions.map(option => (
            <div
              key={option.id}
              className={`meal-card ${currentMeal?.id === option.id ? 'selected' : ''}`}
              onClick={() => onSelect(option)}
            >
              <h3>{option.nombre}</h3>
              <div className="meal-ingredients">
                {option.ingredientes.map((ing, idx) => {
                  if (typeof ing === 'string') {
                    return <span key={idx} className="ingredient-tag">{ing}</span>
                  }

                  const cantidadText = ing.cantidad !== null ? `${ing.cantidad}` : ''
                  const unidadText = ing.unidad !== null ? ing.unidad : ''
                  const fullText = cantidadText && unidadText
                    ? `${ing.nombre} (${cantidadText}${unidadText})`
                    : ing.nombre

                  return <span key={idx} className="ingredient-tag">{fullText}</span>
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredOptions.length === 0 && (
          <div className="no-results">
            No se encontraron opciones para "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  )
}

export default MealSelector
