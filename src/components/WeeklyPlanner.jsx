import { useState } from 'react'
import MealSelector from './MealSelector'
import './WeeklyPlanner.css'

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
const diasLabel = {
  lunes: 'Lunes',
  martes: 'Martes',
  miercoles: 'Miércoles',
  jueves: 'Jueves',
  viernes: 'Viernes',
  sabado: 'Sábado',
  domingo: 'Domingo'
}

const mealTypes = [
  { key: 'desayuno', label: 'Desayuno', emoji: '☕' },
  { key: 'almuerzo', label: 'Almuerzo', emoji: '🥪' },
  { key: 'comida', label: 'Comida', emoji: '🍽️' },
  { key: 'cena', label: 'Cena', emoji: '🌙' }
]

function WeeklyPlanner({ weeklyMenu, updateMeal }) {
  const [selectedSlot, setSelectedSlot] = useState(null)

  const openSelector = (day, mealType) => {
    setSelectedSlot({ day, mealType })
  }

  const closeSelector = () => {
    setSelectedSlot(null)
  }

  const selectMeal = (meal) => {
    if (selectedSlot) {
      updateMeal(selectedSlot.day, selectedSlot.mealType, meal)
      closeSelector()
    }
  }

  const removeMeal = (day, mealType, e) => {
    e.stopPropagation()
    updateMeal(day, mealType, null)
  }

  return (
    <div className="weekly-planner">
      <div className="planner-grid">
        {dias.map(day => (
          <div key={day} className="day-column">
            <h2 className="day-header">{diasLabel[day]}</h2>

            {mealTypes.map(({ key, label, emoji }) => (
              <div
                key={key}
                className={`meal-slot ${weeklyMenu[day][key] ? 'filled' : 'empty'}`}
                onClick={() => openSelector(day, key)}
              >
                <div className="meal-slot-header">
                  <span className="meal-emoji">{emoji}</span>
                  <span className="meal-label">{label}</span>
                </div>

                {weeklyMenu[day][key] ? (
                  <div className="meal-content">
                    <p className="meal-name">{weeklyMenu[day][key].nombre}</p>
                    <button
                      className="btn-remove"
                      onClick={(e) => removeMeal(day, key, e)}
                      title="Eliminar"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="meal-placeholder">
                    <span>+ Seleccionar</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {selectedSlot && (
        <MealSelector
          mealType={selectedSlot.mealType}
          onSelect={selectMeal}
          onClose={closeSelector}
          currentMeal={weeklyMenu[selectedSlot.day][selectedSlot.mealType]}
        />
      )}
    </div>
  )
}

export default WeeklyPlanner
