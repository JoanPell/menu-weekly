import { useState, useEffect } from 'react'
import './App.css'
import WeeklyPlanner from './components/WeeklyPlanner'
import PrintView from './components/PrintView'
import SplashScreen from './components/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [weeklyMenu, setWeeklyMenu] = useState(() => {
    const saved = localStorage.getItem('weeklyMenu')
    return saved ? JSON.parse(saved) : {
      lunes: { desayuno: null, almuerzo: null, comida: null, cena: null },
      martes: { desayuno: null, almuerzo: null, comida: null, cena: null },
      miercoles: { desayuno: null, almuerzo: null, comida: null, cena: null },
      jueves: { desayuno: null, almuerzo: null, comida: null, cena: null },
      viernes: { desayuno: null, almuerzo: null, comida: null, cena: null },
      sabado: { desayuno: null, almuerzo: null, comida: null, cena: null },
      domingo: { desayuno: null, almuerzo: null, comida: null, cena: null },
    }
  })

  const [showPrintView, setShowPrintView] = useState(false)

  useEffect(() => {
    localStorage.setItem('weeklyMenu', JSON.stringify(weeklyMenu))
  }, [weeklyMenu])

  const updateMeal = (day, mealType, meal) => {
    setWeeklyMenu(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: meal
      }
    }))
  }

  const clearMenu = () => {
    if (window.confirm('¿Estás seguro de que quieres borrar todo el menú?')) {
      const emptyMenu = {
        lunes: { desayuno: null, almuerzo: null, comida: null, cena: null },
        martes: { desayuno: null, almuerzo: null, comida: null, cena: null },
        miercoles: { desayuno: null, almuerzo: null, comida: null, cena: null },
        jueves: { desayuno: null, almuerzo: null, comida: null, cena: null },
        viernes: { desayuno: null, almuerzo: null, comida: null, cena: null },
        sabado: { desayuno: null, almuerzo: null, comida: null, cena: null },
        domingo: { desayuno: null, almuerzo: null, comida: null, cena: null },
      }
      setWeeklyMenu(emptyMenu)
      localStorage.setItem('weeklyMenu', JSON.stringify(emptyMenu))
    }
  }

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />
  }

  if (showPrintView) {
    return <PrintView weeklyMenu={weeklyMenu} onBack={() => setShowPrintView(false)} />
  }

  return (
    <div className="app">
      <WeeklyPlanner weeklyMenu={weeklyMenu} updateMeal={updateMeal} />

      <div className="bottom-actions">
        <button onClick={clearMenu} className="btn-clean">
          Clean
        </button>
        <button onClick={() => setShowPrintView(true)} className="btn-shopping">
          Shopping List
        </button>
      </div>
    </div>
  )
}

export default App
