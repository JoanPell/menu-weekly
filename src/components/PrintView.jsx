import './PrintView.css'

const diasLabel = {
  lunes: 'Lunes',
  martes: 'Martes',
  miercoles: 'Miércoles',
  jueves: 'Jueves',
  viernes: 'Viernes',
  sabado: 'Sábado',
  domingo: 'Domingo'
}

function PrintView({ weeklyMenu, onBack }) {
  // Generar lista de la compra
  const generateShoppingList = () => {
    const ingredientMap = {}

    Object.values(weeklyMenu).forEach(day => {
      ['desayuno', 'almuerzo', 'comida', 'cena'].forEach(mealType => {
        const meal = day[mealType]
        if (meal && meal.ingredientes) {
          meal.ingredientes.forEach(ingrediente => {
            // Soporte para ambos formatos: string y objeto
            if (typeof ingrediente === 'string') {
              const key = ingrediente.toLowerCase()
              if (!ingredientMap[key]) {
                ingredientMap[key] = { nombre: ingrediente, cantidad: 0, unidad: 'veces' }
              }
              ingredientMap[key].cantidad += 1
            } else {
              const key = ingrediente.nombre.toLowerCase()
              if (!ingredientMap[key]) {
                ingredientMap[key] = {
                  nombre: ingrediente.nombre,
                  cantidad: 0,
                  unidad: ingrediente.unidad
                }
              }
              ingredientMap[key].cantidad += ingrediente.cantidad
            }
          })
        }
      })
    })

    return Object.values(ingredientMap)
      .sort((a, b) => a.nombre.localeCompare(b.nombre))
  }

  const shoppingList = generateShoppingList()

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="print-view">
      <div className="print-actions no-print">
        <button onClick={onBack} className="btn-secondary">
          ← Volver al Planificador
        </button>
        <button onClick={handlePrint} className="btn-primary">
          🖨️ Imprimir
        </button>
      </div>

      <div className="print-content">
        <h1 className="print-title">Menú Semanal</h1>

        <div className="weekly-table">
          <table>
            <thead>
              <tr>
                <th>Día</th>
                <th>☕ Desayuno</th>
                <th>🥪 Almuerzo</th>
                <th>🍽️ Comida</th>
                <th>🌙 Cena</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(diasLabel).map(day => (
                <tr key={day}>
                  <td className="day-cell">{diasLabel[day]}</td>
                  <td>{weeklyMenu[day].desayuno?.nombre || '-'}</td>
                  <td>{weeklyMenu[day].almuerzo?.nombre || '-'}</td>
                  <td>{weeklyMenu[day].comida?.nombre || '-'}</td>
                  <td>{weeklyMenu[day].cena?.nombre || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="shopping-list-section">
          <h2>🛒 Lista de la Compra</h2>

          {shoppingList.length > 0 ? (
            <div className="shopping-grid">
              {shoppingList.map((item, idx) => (
                <div key={idx} className="shopping-item">
                  <input type="checkbox" id={`item-${idx}`} />
                  <label htmlFor={`item-${idx}`}>
                    <span className="item-name">{item.nombre}</span>
                    <span className="quantity">
                      {item.cantidad} {item.unidad}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-message">
              No hay ningún menú planificado aún.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PrintView
