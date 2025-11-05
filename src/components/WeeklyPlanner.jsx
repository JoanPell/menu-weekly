import { useState } from 'react'
import MealSelector from './MealSelector'
import './WeeklyPlanner.css'

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
const diasLabel = {
  lunes: 'Mon',
  martes: 'Tue',
  miercoles: 'Wed',
  jueves: 'Thu',
  viernes: 'Fri',
  sabado: 'Sat',
  domingo: 'Sun'
}

const mealTypes = [
  { key: 'desayuno', label: 'Breakfast' },
  { key: 'almuerzo', label: 'Lunch' },
  { key: 'comida', label: 'Snack' },
  { key: 'cena', label: 'Dinner' }
]

function WeeklyPlanner({ weeklyMenu, updateMeal }) {
  const [selectedDay, setSelectedDay] = useState('lunes')
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

  return (
    <div className="weekly-planner">
      {/* Pills de días */}
      <div className="days-pills">
        {dias.map(day => (
          <button
            key={day}
            className={`day-pill ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {diasLabel[day]}
          </button>
        ))}
      </div>

      {/* Cards de comidas para el día seleccionado */}
      <div className="meals-container">
        {mealTypes.map(({ key, label }) => {
          const meal = weeklyMenu[selectedDay][key]
          return (
            <div
              key={key}
              className={`meal-card ${meal ? 'has-meal' : ''}`}
            >
              <div className="meal-card-header">
                <span className="meal-label">{label}</span>
                <button
                  className="btn-edit"
                  onClick={() => openSelector(selectedDay, key)}
                  title="Editar comida"
                >
                  ✏️
                </button>
              </div>

              {meal ? (
                <div className="meal-name">{meal.nombre}</div>
              ) : (
                <div className="meal-placeholder">No meal selected</div>
              )}
            </div>
          )
        })}
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
