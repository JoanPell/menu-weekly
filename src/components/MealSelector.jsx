import { useState } from 'react'
import { menuOptions } from '../data/menuOptions'
import './MealSelector.css'

const mealTypeLabels = {
  desayuno: 'Breakfast',
  almuerzo: 'Lunch',
  comida: 'Snack',
  cena: 'Dinner'
}

function MealSelector({ mealType, onSelect, onClose, currentMeal }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedId, setExpandedId] = useState(null)

  const options = menuOptions[mealType] || []

  const filteredOptions = options.filter(option =>
    option.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const handleSelect = (option) => {
    onSelect(option)
    onClose()
  }

  return (
    <div className="meal-selector-overlay" onClick={onClose}>
      <div className="meal-selector" onClick={(e) => e.stopPropagation()}>
        <div className="selector-header">
          <h2>Select Recipe</h2>
          <button className="btn-close" onClick={onClose}>✕</button>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>

        <div className="recipes-list">
          {filteredOptions.map(option => {
            const isExpanded = expandedId === option.id
            const isSelected = currentMeal?.id === option.id

            return (
              <div
                key={option.id}
                className={`recipe-card ${isSelected ? 'selected' : ''} ${isExpanded ? 'expanded' : ''}`}
              >
                <div
                  className="recipe-card-header"
                  onClick={(e) => {
                    if (isExpanded) {
                      toggleExpand(option.id)
                    } else {
                      handleSelect(option)
                    }
                  }}
                >
                  <div className="recipe-info">
                    <h3>{option.nombre}</h3>
                    {isExpanded && (
                      <span className="ingredient-count">
                        {option.ingredientes.length} ingredients
                      </span>
                    )}
                  </div>
                  <button className="btn-expand" onClick={(e) => {
                    e.stopPropagation()
                    toggleExpand(option.id)
                  }}>
                    {isExpanded ? '▲' : '▼'}
                  </button>
                </div>

                {isExpanded && (
                  <div className="recipe-card-content" onClick={(e) => e.stopPropagation()}>
                    <div className="ingredients-list">
                      {option.ingredientes.map((ing, idx) => {
                        if (typeof ing === 'string') {
                          return (
                            <div key={idx} className="ingredient-item">
                              <span className="ingredient-name">{ing}</span>
                            </div>
                          )
                        }

                        return (
                          <div key={idx} className="ingredient-item">
                            <span className="ingredient-name">{ing.nombre}</span>
                            {ing.cantidad && (
                              <span className="ingredient-amount">
                                {ing.cantidad}{ing.unidad || ''}
                              </span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {filteredOptions.length === 0 && (
          <div className="no-results">
            No recipes found for "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  )
}

export default MealSelector
