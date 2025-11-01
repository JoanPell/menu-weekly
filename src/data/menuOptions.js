// Aquí defines tus opciones de menú
// Estructura: { nombre: 'ingrediente', cantidad: número, unidad: 'g/ml/ud/c.s.' }
// c.s. = cantidad suficiente (para especias, sal, etc.)

export const menuOptions = {
  desayuno: [
    {
      id: 'd1',
      nombre: 'Pan keto con huevos revueltos, espinacas y aguacate',
      ingredientes: [
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' },
        { nombre: 'Huevos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Espinacas', cantidad: 30, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'd2',
      nombre: 'Huevos revueltos con parmesano y espinacas',
      ingredientes: [
        { nombre: 'Huevos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Queso parmesano', cantidad: 10, unidad: 'g' },
        { nombre: 'Espinacas', cantidad: 30, unidad: 'g' },
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'd3',
      nombre: 'Tostada keto con salmón ahumado y aguacate',
      ingredientes: [
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' },
        { nombre: 'Salmón ahumado', cantidad: 40, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' },
        { nombre: 'Espinacas', cantidad: 30, unidad: 'g' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'd4',
      nombre: 'Tostada keto de pavo, queso fresco y tomate',
      ingredientes: [
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' },
        { nombre: 'Fiambre de pavo', cantidad: 2, unidad: 'lonchas' },
        { nombre: 'Queso fresco sin lactosa', cantidad: 50, unidad: 'g' },
        { nombre: 'Tomate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'd5',
      nombre: 'Tortilla de espinacas con feta y semillas',
      ingredientes: [
        { nombre: 'Huevos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Espinacas', cantidad: 30, unidad: 'g' },
        { nombre: 'Queso feta', cantidad: 20, unidad: 'g' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' },
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' }
      ]
    },
    {
      id: 'd6',
      nombre: 'Tostada keto con salmón, aguacate y tomate',
      ingredientes: [
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' },
        { nombre: 'Salmón ahumado', cantidad: 50, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' },
        { nombre: 'Tomate', cantidad: 1, unidad: 'ud' }
      ]
    },
    {
      id: 'd7',
      nombre: 'Tostada keto con tomate y jamón serrano',
      ingredientes: [
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' },
        { nombre: 'Tomate', cantidad: 1, unidad: 'ud' },
        { nombre: 'Jamón serrano', cantidad: 50, unidad: 'g' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'd8',
      nombre: 'Tostada keto con huevo poché y espinacas',
      ingredientes: [
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' },
        { nombre: 'Huevo poché', cantidad: 2, unidad: 'ud' },
        { nombre: 'Espinacas', cantidad: 10, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'd9',
      nombre: 'Tortilla de espinacas y tomate con aguacate',
      ingredientes: [
        { nombre: 'Huevos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Espinacas', cantidad: 30, unidad: 'g' },
        { nombre: 'Tomate', cantidad: 50, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'd10',
      nombre: 'Frittata de calabacín con parmesano',
      ingredientes: [
        { nombre: 'Huevo', cantidad: 2, unidad: 'ud' },
        { nombre: 'Calabacín', cantidad: null, unidad: 'g' },
        { nombre: 'Queso parmesano', cantidad: 10, unidad: 'g' },
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'd11',
      nombre: 'Huevos revueltos con espinacas y tomate',
      ingredientes: [
        { nombre: 'Huevos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Espinacas', cantidad: 30, unidad: 'g' },
        { nombre: 'Tomate', cantidad: 1, unidad: 'ud' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' },
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' }
      ]
    },
    {
      id: 'd12',
      nombre: 'Tostada keto de pavo, aguacate y queso crema',
      ingredientes: [
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' },
        { nombre: 'Fiambre de pavo', cantidad: 40, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' },
        { nombre: 'Queso crema sin lactosa', cantidad: 10, unidad: 'g' },
        { nombre: 'Espinacas', cantidad: 30, unidad: 'g' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'd13',
      nombre: 'Huevos revueltos con aguacate y espinacas',
      ingredientes: [
        { nombre: 'Huevos revueltos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' },
        { nombre: 'Espinacas', cantidad: 10, unidad: 'g' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' },
        { nombre: 'Pan keto', cantidad: 60, unidad: 'g' }
      ]
    },
    {
      id: 'd14',
      nombre: 'Salmón ahumado con queso crema y pan keto',
      ingredientes: [
        { nombre: 'Salmón ahumado', cantidad: 40, unidad: 'g' },
        { nombre: 'Queso crema sin lactosa', cantidad: 10, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' },
        { nombre: 'Eneldo fresco', cantidad: null, unidad: null },
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' }
      ]
    },
    {
      id: 'd15',
      nombre: 'Flautas de huevo con jamón y mozzarella',
      ingredientes: [
        { nombre: 'Huevo', cantidad: 2, unidad: 'ud' },
        { nombre: 'Jamón', cantidad: 40, unidad: 'g' },
        { nombre: 'Queso mozzarella sin lactosa', cantidad: 20, unidad: 'g' },
        { nombre: 'Mayonesa', cantidad: 10, unidad: 'g' }
      ]
    },
    {
      id: 'd16',
      nombre: 'Bacon con huevo, aguacate y tomate',
      ingredientes: [
        { nombre: 'Bacon', cantidad: 30, unidad: 'g' },
        { nombre: 'Huevo a la plancha', cantidad: 1, unidad: 'ud' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' },
        { nombre: 'Tomate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Pan keto', cantidad: 30, unidad: 'g' }
      ]
    },
    {
      id: 'd17',
      nombre: 'Gofres salados sabor pizza',
      ingredientes: [
        { nombre: 'Queso mozzarella rallado', cantidad: 20, unidad: 'g' },
        { nombre: 'Queso crema', cantidad: 20, unidad: 'g' },
        { nombre: 'Huevo', cantidad: 1, unidad: 'ud' },
        { nombre: 'Harina de almendra', cantidad: 20, unidad: 'g' },
        { nombre: 'Pepperoni', cantidad: 20, unidad: 'g' }
      ]
    }
  ],
  
 almuerzo:  [
  {
    id: 'a1',
    nombre: 'Yogur con fruta y frutos secos / chocolate 85%',
    ingredientes: [
      { nombre: 'Yogur natural sin lactosa o Alpro coco', cantidad: 125, unidad: 'g' },
      { nombre: 'Fruta permitida', cantidad: 60, unidad: 'g' },
      { nombre: 'Frutos secos tostados o crema de frutos secos', cantidad: 15, unidad: 'g' },
      { nombre: 'Chocolate 85%', cantidad: 10, unidad: 'g' } // 1-2 onzas (10-20g); pongo 10g base
    ]
  },
  {
    id: 'a2',
    nombre: 'Pudding de chía con bebida vegetal y frutos rojos',
    ingredientes: [
      { nombre: 'Semillas de chía', cantidad: 2, unidad: 'cucharadas' },
      { nombre: 'Bebida de coco / almendras / leche sin lactosa', cantidad: 150, unidad: 'ml' },
      { nombre: 'Coco rallado', cantidad: 1, unidad: 'cucharada' },
      { nombre: 'Frutos rojos', cantidad: 30, unidad: 'g' },
      { nombre: 'Crema de almendras o cacahuete', cantidad: 15, unidad: 'g' } // (1 cda)
    ]
  },
  {
    id: 'a3',
    nombre: 'Rollitos de fiambre con queso crema o aguacate',
    ingredientes: [
      { nombre: 'Fiambre de pavo / pollo / salmón ahumado / jamón ibérico', cantidad: 2, unidad: 'lonchas' },
      { nombre: 'Queso crema', cantidad: 2, unidad: 'cucharadas' },
      { nombre: 'Aguacate pisado', cantidad: 0.25, unidad: 'ud' }
    ]
  },
  {
    id: 'a4',
    nombre: 'Crudités con dip',
    ingredientes: [
      { nombre: 'Palitos de zanahoria / calabacín / apio', cantidad: null, unidad: null },
      { nombre: 'Queso crema sin lactosa o hummus', cantidad: 2, unidad: 'cucharadas' },
      { nombre: 'Babaganoush o guacamole', cantidad: 4, unidad: 'cucharadas' }
    ]
  },
  {
    id: 'a5',
    nombre: 'Tomates cherry con queso y hierbas',
    ingredientes: [
      { nombre: 'Tomates cherry', cantidad: 6, unidad: 'ud' },
      { nombre: 'Mozzarella sin lactosa / queso feta / queso fresco sin lactosa (bolitas)', cantidad: 40, unidad: 'g' },
      { nombre: 'Albahaca u orégano', cantidad: null, unidad: null }
    ]
  },
  {
    id: 'a6',
    nombre: 'Postre keto (ocasional)',
    ingredientes: [
      { nombre: 'Postre keto (1 ración)', cantidad: 70, unidad: 'g' }
    ]
    // Nota mental para la UI: “de vez en cuando (3 veces a la semana máx)”
  },
  {
    id: 'a7',
    nombre: 'Tostada de pan keto con proteína',
    ingredientes: [
      { nombre: 'Pan keto', cantidad: 30, unidad: 'g' },
      { nombre: 'Fiambre de pavo', cantidad: 2, unidad: 'lonchas' },
      { nombre: 'Caballa en lata', cantidad: 1, unidad: 'lata' },
      { nombre: 'Huevo cocido o a la plancha', cantidad: 2, unidad: 'ud' },
      { nombre: 'Tomate', cantidad: 1, unidad: 'ud' },
      { nombre: 'Espinacas', cantidad: 1, unidad: 'puñado' }
    ]
  }
],

  comida: [
    {
      id: 'c1',
      nombre: 'Hamburguesas de solomillo de atún con espinacas y nueces',
      ingredientes: [
        { nombre: 'Atún (solomillo)', cantidad: 100, unidad: 'g' },
        { nombre: 'Yema de huevo', cantidad: 1, unidad: 'ud' },
        { nombre: 'Espinacas', cantidad: 80, unidad: 'g' },
        { nombre: 'Nueces', cantidad: 10, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'c2',
      nombre: 'Pollo salteado con vegetales y salsa de soja',
      ingredientes: [
        { nombre: 'Pollo', cantidad: 180, unidad: 'g' },
        { nombre: 'Vegetales al gusto', cantidad: 150, unidad: 'g' },
        { nombre: 'Semillas de sésamo', cantidad: 5, unidad: 'g' },
        { nombre: 'Salsa de soja', cantidad: null, unidad: 'ml' }
      ]
    },
    {
      id: 'c3',
      nombre: 'Boquerones a la plancha con vegetales',
      ingredientes: [
        { nombre: 'Boquerones', cantidad: 200, unidad: 'g' },
        { nombre: 'Vegetales al gusto', cantidad: 150, unidad: 'g' },
        { nombre: 'Aceitunas', cantidad: 20, unidad: 'g' }
      ]
    },
    {
      id: 'c4',
      nombre: 'Muslos de pollo con berenjena al horno y almendras',
      ingredientes: [
        { nombre: 'Muslos de pollo', cantidad: 200, unidad: 'g' },
        { nombre: 'Berenjena al horno', cantidad: 100, unidad: 'g' },
        { nombre: 'Queso gratinado', cantidad: 20, unidad: 'g' },
        { nombre: 'Almendras laminadas', cantidad: 20, unidad: 'g' }
      ]
    },
    {
      id: 'c5',
      nombre: 'Potaje de garbanzos con huevo duro y verduras',
      ingredientes: [
        { nombre: 'Garbanzos cocidos', cantidad: 150, unidad: 'g' },
        { nombre: 'Huevo duro', cantidad: 2, unidad: 'ud' },
        { nombre: 'Verduras guiso (zanahoria, tomate, calabacín, cebolla, ajo)', cantidad: 120, unidad: 'g' },
        { nombre: 'Caldo', cantidad: 250, unidad: 'ml' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'g' },
        { nombre: 'Pimentón y comino', cantidad: null, unidad: null }
      ]
    },
    {
      id: 'c6',
      nombre: 'Guiso de caballa con calabaza y espinacas',
      ingredientes: [
        { nombre: 'Caballa fresca', cantidad: 200, unidad: 'g' },
        { nombre: 'Calabaza', cantidad: 150, unidad: 'g' },
        { nombre: 'Espinacas', cantidad: 50, unidad: 'g' },
        { nombre: 'Zanahoria', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Especias', cantidad: null, unidad: 'al gusto' }
      ]
    },
    {
      id: 'c7',
      nombre: 'Conejo en salsa de mostaza con berenjena rebozada',
      ingredientes: [
        { nombre: 'Conejo', cantidad: 200, unidad: 'g' },
        { nombre: 'Mostaza', cantidad: 10, unidad: 'g' },
        { nombre: 'Berenjena rebozada', cantidad: 150, unidad: 'g' }
      ]
    },
    {
      id: 'c8',
      nombre: 'Hamburguesa de merluza con verduras',
      ingredientes: [
        { nombre: 'Merluza', cantidad: 180, unidad: 'g' },
        { nombre: 'Calabacín', cantidad: 50, unidad: 'g' },
        { nombre: 'Queso tierno sin lactosa', cantidad: 15, unidad: 'g' },
        { nombre: 'Espinacas', cantidad: null, unidad: 'g' },
        { nombre: 'Tomate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Pepinillos', cantidad: 15, unidad: 'g' },
        { nombre: 'Pan keto / trigo sarraceno', cantidad: 80, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'c9',
      nombre: 'Muslos de pollo con berenjena y calabacín rebozados',
      ingredientes: [
        { nombre: 'Muslos de pollo', cantidad: 200, unidad: 'g' },
        { nombre: 'Berenjena y calabacín rebozados', cantidad: 150, unidad: 'g' }
      ]
    },
    {
      id: 'c10',
      nombre: 'Solomillo de pavo en salsa de alcachofas',
      ingredientes: [
        { nombre: 'Solomillo de pavo', cantidad: null, unidad: 'g' },
        { nombre: 'Alcachofas (salsa)', cantidad: 40, unidad: 'g' },
        { nombre: 'Calabacín', cantidad: 70, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' },
        { nombre: 'Aceitunas', cantidad: 10, unidad: 'g' }
      ]
    },
    {
      id: 'c11',
      nombre: 'Potaje de lentejas con costilla',
      ingredientes: [
        { nombre: 'Lentejas cocidas', cantidad: 150, unidad: 'g' },
        { nombre: 'Costilla', cantidad: 3, unidad: 'piezas' },
        { nombre: 'Verduras guiso (zanahoria, tomate, calabacín, cebolla, ajo)', cantidad: 120, unidad: 'g' },
        { nombre: 'Caldo', cantidad: 250, unidad: 'ml' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'g' },
        { nombre: 'Pimentón y comino', cantidad: null, unidad: null }
      ]
    },
    {
      id: 'c12',
      nombre: 'Boloñesa de pollo con espaguetis de calabacín',
      ingredientes: [
        { nombre: 'Pollo', cantidad: 180, unidad: 'g' },
        { nombre: 'Espaguetis de calabacín', cantidad: 150, unidad: 'g' },
        { nombre: 'Zanahoria', cantidad: null, unidad: 'g' },
        { nombre: 'Espinacas', cantidad: null, unidad: 'g' },
        { nombre: 'Calabacín', cantidad: 100, unidad: 'g' },
        { nombre: 'Tomate triturado', cantidad: 100, unidad: 'g' }
      ]
    },
    {
      id: 'c13',
      nombre: 'Guiso de sepia con judías verdes y verduras',
      ingredientes: [
        { nombre: 'Sepia', cantidad: 200, unidad: 'g' },
        { nombre: 'Judías verdes, zanahoria, cebolla, calabacín', cantidad: 150, unidad: 'g' }
      ]
    },
    {
      id: 'c14',
      nombre: 'Pescado azul con aguacate y sésamo',
      ingredientes: [
        { nombre: 'Pescado azul', cantidad: 200, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Cebolla morada', cantidad: null, unidad: 'g' },
        { nombre: 'Tomate', cantidad: 100, unidad: 'g' },
        { nombre: 'Salsa de soja', cantidad: 5, unidad: 'ml' },
        { nombre: 'Sésamo', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'c15',
      nombre: 'Pescado blanco con pesto y calabacín',
      ingredientes: [
        { nombre: 'Pescado blanco', cantidad: 200, unidad: 'g' },
        { nombre: 'Salsa pesto y limón', cantidad: null, unidad: null },
        { nombre: 'Calabacín', cantidad: 150, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' },
        { nombre: 'Piñones', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'c16',
      nombre: 'Salmón con salsa de mostaza y eneldo',
      ingredientes: [
        { nombre: 'Salmón', cantidad: 200, unidad: 'g' },
        { nombre: 'Mostaza y eneldo', cantidad: null, unidad: null },
        { nombre: 'Champiñones', cantidad: null, unidad: 'g' },
        { nombre: 'Espárragos', cantidad: 150, unidad: 'g' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'c17',
      nombre: 'Pescado blanco con judías verdes y zanahoria',
      ingredientes: [
        { nombre: 'Pescado blanco', cantidad: 200, unidad: 'g' },
        { nombre: 'Judías verdes y zanahoria', cantidad: 150, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'c18',
      nombre: 'Tortilla de atún con aguacate y ensalada',
      ingredientes: [
        { nombre: 'Huevos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Atún', cantidad: 1, unidad: 'lata' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' },
        { nombre: 'Espinacas y zanahoria (ensalada)', cantidad: 150, unidad: 'g' }
      ]
    },
    {
      id: 'c19',
      nombre: 'Ensalada de huevo duro y pollo',
      ingredientes: [
        { nombre: 'Huevo duro', cantidad: 2, unidad: 'ud' },
        { nombre: 'Fiambre de pollo loncheado', cantidad: 50, unidad: 'g' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' },
        { nombre: 'Espinacas', cantidad: null, unidad: 'g' },
        { nombre: 'Zanahoria', cantidad: null, unidad: 'g' },
        { nombre: 'Zumo de limón', cantidad: null, unidad: 'ml' }
      ]
    },
    {
      id: 'c20',
      nombre: 'Pollo con col, zanahoria y aguacate',
      ingredientes: [
        { nombre: 'Pollo', cantidad: 180, unidad: 'g' },
        { nombre: 'Col, zanahoria y lechuga', cantidad: 120, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Salsa de soja', cantidad: null, unidad: 'ml' }
      ]
    },
    {
      id: 'c21',
      nombre: 'Conejo asado con ensalada de zanahoria y tomate',
      ingredientes: [
        { nombre: 'Conejo', cantidad: 200, unidad: 'g' },
        { nombre: 'Zanahoria y tomate', cantidad: 150, unidad: 'g' },
        { nombre: 'Nueces', cantidad: 20, unidad: 'g' },
        { nombre: 'Mostaza', cantidad: 5, unidad: 'g' },
        { nombre: 'Limón', cantidad: null, unidad: 'al gusto' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'c22',
      nombre: 'Espaguetis de calabacín con pavo y feta',
      ingredientes: [
        { nombre: 'Espaguetis de calabacín', cantidad: 150, unidad: 'g' },
        { nombre: 'Pavo', cantidad: 180, unidad: 'g' },
        { nombre: 'Tomates cherry', cantidad: 80, unidad: 'g' },
        { nombre: 'Queso feta', cantidad: 30, unidad: 'g' },
        { nombre: 'Yogur natural / coco', cantidad: null, unidad: 'g' },
        { nombre: 'Menta', cantidad: null, unidad: null },
        { nombre: 'Frutos secos', cantidad: 10, unidad: 'g' }
      ]
    },
    {
      id: 'c23',
      nombre: 'Potaje de garbanzos con pollo',
      ingredientes: [
        { nombre: 'Garbanzos cocidos', cantidad: 150, unidad: 'g' },
        { nombre: 'Pollo', cantidad: 100, unidad: 'g' },
        { nombre: 'Verduras guiso (zanahoria, tomate, calabacín, cebolla, ajo)', cantidad: 120, unidad: 'g' },
        { nombre: 'Caldo', cantidad: 250, unidad: 'ml' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'g' },
        { nombre: 'Pimentón y comino', cantidad: null, unidad: null }
      ]
    },
    {
      id: 'c24',
      nombre: 'Pollo al horno con calabaza y alcachofas',
      ingredientes: [
        { nombre: 'Pollo', cantidad: 180, unidad: 'g' },
        { nombre: 'Romero', cantidad: null, unidad: null },
        { nombre: 'Limón', cantidad: null, unidad: null },
        { nombre: 'Calabaza, cebolla y alcachofas', cantidad: 150, unidad: 'g' }
      ]
    },
    {
      id: 'c25',
      nombre: 'Espaguetis de calabacín con boloñesa de pollo',
      ingredientes: [
        { nombre: 'Espaguetis de calabacín', cantidad: 150, unidad: 'g' },
        { nombre: 'Carne picada de pollo', cantidad: 200, unidad: 'g' },
        { nombre: 'Tomate triturado', cantidad: 100, unidad: 'g' },
        { nombre: 'Cebolla', cantidad: 40, unidad: 'g' },
        { nombre: 'Verduras (cebolla + zanahoria)', cantidad: 80, unidad: 'g' },
        { nombre: 'Queso parmesano', cantidad: 30, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'c26',
      nombre: 'Pescado blanco con judías verdes y aceitunas',
      ingredientes: [
        { nombre: 'Pescado blanco', cantidad: 200, unidad: 'g' },
        { nombre: 'Judías verdes', cantidad: 50, unidad: 'g' },
        { nombre: 'Aceitunas', cantidad: 20, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'c27',
      nombre: 'Sardinas o pescado azul a la plancha con crema de zanahoria y jengibre',
      ingredientes: [
        { nombre: 'Pescado azul / sardinas', cantidad: 200, unidad: 'g' },
        { nombre: 'Crema de zanahoria, naranja y jengibre', cantidad: 1, unidad: 'plato sopero' }
      ]
    },
    {
      id: 'c28',
      nombre: 'Boquerones a la parrilla con calabacín y cebolla',
      ingredientes: [
        { nombre: 'Boquerones', cantidad: 200, unidad: 'g' },
        { nombre: 'Calabacín y cebolla pequeña', cantidad: 150, unidad: 'g' },
        { nombre: 'Piñones', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'c29',
      nombre: 'Ensalada de camarones con aguacate y feta',
      ingredientes: [
        { nombre: 'Camarones', cantidad: 200, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Espinacas', cantidad: null, unidad: 'g' },
        { nombre: 'Tomates cherry', cantidad: 100, unidad: 'g' },
        { nombre: 'Queso feta', cantidad: 30, unidad: 'g' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'c30',
      nombre: 'Filete de pescado blanco con berenjena rebozada',
      ingredientes: [
        { nombre: 'Pescado blanco', cantidad: 200, unidad: 'g' },
        { nombre: 'Berenjena rebozada', cantidad: 150, unidad: 'g' }
      ]
    },
    {
      id: 'c31',
      nombre: 'Tartar de gambas con aguacate y verduras',
      ingredientes: [
        { nombre: 'Gambas', cantidad: 180, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Zanahoria', cantidad: null, unidad: 'g' },
        { nombre: 'Cebolla morada', cantidad: 60, unidad: 'g' },
        { nombre: 'Salsa de soja', cantidad: null, unidad: 'ml' }
      ]
    },
    {
      id: 'c32',
      nombre: 'Risotto de coliflor con pollo y alcachofas',
      ingredientes: [
        { nombre: 'Arroz de coliflor', cantidad: 150, unidad: 'g' },
        { nombre: 'Pollo', cantidad: 180, unidad: 'g' },
        { nombre: 'Alcachofas', cantidad: null, unidad: 'g' },
        { nombre: 'Cebolla', cantidad: 100, unidad: 'g' },
        { nombre: 'Queso parmesano', cantidad: 20, unidad: 'g' }
      ]
    },
    {
      id: 'c33',
      nombre: 'Potaje de garbanzos con bacalao',
      ingredientes: [
        { nombre: 'Garbanzos cocidos', cantidad: 100, unidad: 'g' },
        { nombre: 'Bacalao', cantidad: 180, unidad: 'g' },
        { nombre: 'Zanahoria, cebolla, calabacín', cantidad: 150, unidad: 'g' },
        { nombre: 'Especias', cantidad: null, unidad: 'al gusto' }
      ]
    },
    {
      id: 'c34',
      nombre: 'Alitas de pollo con calabacín, coliflor y salsa de queso azul',
      ingredientes: [
        { nombre: 'Alitas de pollo', cantidad: 200, unidad: 'g' },
        { nombre: 'Palitos de calabacín', cantidad: 50, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Coliflor', cantidad: 100, unidad: 'g' },
        { nombre: 'Salsa de queso azul', cantidad: 20, unidad: 'g' }
      ]
    },
    {
      id: 'c35',
      nombre: 'Pollo a la pimienta con verduras',
      ingredientes: [
        { nombre: 'Pollo', cantidad: 180, unidad: 'g' },
        { nombre: 'Salsa de mantequilla', cantidad: 20, unidad: 'g' },
        { nombre: 'Espárragos y zanahoria', cantidad: 150, unidad: 'g' },
        { nombre: 'Aceitunas', cantidad: 20, unidad: 'g' }
      ]
    },
    {
      id: 'c36',
      nombre: 'Guiso de calamares con judías verdes',
      ingredientes: [
        { nombre: 'Calamares', cantidad: 180, unidad: 'g' },
        { nombre: 'Judías verdes', cantidad: 50, unidad: 'g' },
        { nombre: 'Cebolla y zanahoria', cantidad: 100, unidad: 'g' }
      ]
    },
    {
      id: 'c37',
      nombre: 'Judías verdes con jamón y huevo duro',
      ingredientes: [
        { nombre: 'Judías verdes', cantidad: 150, unidad: 'g' },
        { nombre: 'Jamón', cantidad: 50, unidad: 'g' },
        { nombre: 'Huevo duro', cantidad: 1, unidad: 'ud' },
        { nombre: 'Cebolla', cantidad: 40, unidad: 'g' }
      ]
    }
  ],

  cena: [
    {
      id: 'ce1',
      nombre: 'Tortilla de judías verdes con pavo y aguacate',
      ingredientes: [
        { nombre: 'Huevos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Judías verdes', cantidad: 100, unidad: 'g' },
        { nombre: 'Pavo', cantidad: 2, unidad: 'lonchas' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' }
      ]
    },
    {
      id: 'ce2',
      nombre: 'Pescado blanco con berenjena rebozada y piñones',
      ingredientes: [
        { nombre: 'Pescado blanco', cantidad: 200, unidad: 'g' },
        { nombre: 'Berenjena rebozada', cantidad: 150, unidad: 'g' },
        { nombre: 'Piñones', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'ce3',
      nombre: 'Gambas al ajillo con espinacas y champiñones',
      ingredientes: [
        { nombre: 'Gambas', cantidad: 200, unidad: 'g' },
        { nombre: 'Espinacas', cantidad: 30, unidad: 'g' },
        { nombre: 'Champiñones', cantidad: 40, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' },
        { nombre: 'Piñones', cantidad: 5, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'ce4',
      nombre: 'Tortilla de berenjena y calabacín con queso',
      ingredientes: [
        { nombre: 'Huevos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Berenjena y calabacín', cantidad: 150, unidad: 'g' },
        { nombre: 'Queso sin lactosa', cantidad: 20, unidad: 'g' }
      ]
    },
    {
      id: 'ce5',
      nombre: 'Tortilla de espinacas con queso y perejil',
      ingredientes: [
        { nombre: 'Huevos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Espinacas', cantidad: 50, unidad: 'g' },
        { nombre: 'Queso sin lactosa', cantidad: 20, unidad: 'g' },
        { nombre: 'Perejil fresco', cantidad: null, unidad: null }
      ]
    },
    {
      id: 'ce6',
      nombre: 'Espaguetis de calabacín con gambas al limón',
      ingredientes: [
        { nombre: 'Calabacín en tiras', cantidad: 200, unidad: 'g' },
        { nombre: 'Gambas', cantidad: 200, unidad: 'g' },
        { nombre: 'Limón', cantidad: null, unidad: null },
        { nombre: 'Perejil fresco', cantidad: null, unidad: null },
        { nombre: 'Piñones', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'ce7',
      nombre: 'Calamares con judías verdes',
      ingredientes: [
        { nombre: 'Calamares', cantidad: 200, unidad: 'g' },
        { nombre: 'Judías verdes', cantidad: 150, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'ce8',
      nombre: 'Pescado blanco con pesto y calabacín',
      ingredientes: [
        { nombre: 'Pescado blanco', cantidad: 200, unidad: 'g' },
        { nombre: 'Salsa pesto y limón', cantidad: null, unidad: null },
        { nombre: 'Calabacín', cantidad: 150, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' },
        { nombre: 'Piñones', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'ce9',
      nombre: 'Pescado blanco con judías verdes y zanahoria',
      ingredientes: [
        { nombre: 'Pescado blanco', cantidad: 200, unidad: 'g' },
        { nombre: 'Judías verdes y zanahoria', cantidad: 150, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'ce10',
      nombre: 'Tortilla de atún con aguacate y espinacas',
      ingredientes: [
        { nombre: 'Huevos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Atún', cantidad: 1, unidad: 'lata' },
        { nombre: 'Aguacate', cantidad: 0.25, unidad: 'ud' },
        { nombre: 'Espinacas y zanahoria (ensalada)', cantidad: 150, unidad: 'g' }
      ]
    },
    {
      id: 'ce11',
      nombre: 'Ensalada de huevo duro con pollo y aguacate',
      ingredientes: [
        { nombre: 'Huevo duro', cantidad: 2, unidad: 'ud' },
        { nombre: 'Fiambre de pollo loncheado', cantidad: 50, unidad: 'g' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' },
        { nombre: 'Espinacas', cantidad: null, unidad: 'g' },
        { nombre: 'Zanahoria', cantidad: null, unidad: 'g' },
        { nombre: 'Zumo de limón', cantidad: null, unidad: 'ml' }
      ]
    },
    {
      id: 'ce12',
      nombre: 'Pollo con col, zanahoria y aguacate',
      ingredientes: [
        { nombre: 'Pollo', cantidad: 180, unidad: 'g' },
        { nombre: 'Col, zanahoria y lechuga', cantidad: 120, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Salsa de soja', cantidad: null, unidad: 'ml' }
      ]
    },
    {
      id: 'ce13',
      nombre: 'Conejo asado con ensalada de zanahoria y tomate',
      ingredientes: [
        { nombre: 'Conejo', cantidad: 200, unidad: 'g' },
        { nombre: 'Zanahoria y tomate', cantidad: 150, unidad: 'g' },
        { nombre: 'Nueces', cantidad: 20, unidad: 'g' },
        { nombre: 'Mostaza', cantidad: 5, unidad: 'g' },
        { nombre: 'Limón', cantidad: null, unidad: 'al gusto' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'ce14',
      nombre: 'Espaguetis de calabacín con pavo y feta',
      ingredientes: [
        { nombre: 'Espaguetis de calabacín', cantidad: 150, unidad: 'g' },
        { nombre: 'Pavo', cantidad: 180, unidad: 'g' },
        { nombre: 'Tomates cherry', cantidad: 80, unidad: 'g' },
        { nombre: 'Queso feta', cantidad: 30, unidad: 'g' },
        { nombre: 'Yogur natural / coco', cantidad: null, unidad: 'g' },
        { nombre: 'Menta', cantidad: null, unidad: null },
        { nombre: 'Frutos secos', cantidad: 10, unidad: 'g' }
      ]
    },
    {
      id: 'ce15',
      nombre: 'Potaje de garbanzos con pollo',
      ingredientes: [
        { nombre: 'Garbanzos cocidos', cantidad: 150, unidad: 'g' },
        { nombre: 'Pollo', cantidad: 100, unidad: 'g' },
        { nombre: 'Verduras guiso (zanahoria, tomate, calabacín, cebolla, ajo)', cantidad: 120, unidad: 'g' },
        { nombre: 'Caldo', cantidad: 250, unidad: 'ml' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'g' },
        { nombre: 'Pimentón y comino', cantidad: null, unidad: null }
      ]
    },
    {
      id: 'ce16',
      nombre: 'Pollo al horno con calabaza y alcachofas',
      ingredientes: [
        { nombre: 'Pollo', cantidad: 180, unidad: 'g' },
        { nombre: 'Romero', cantidad: null, unidad: null },
        { nombre: 'Limón', cantidad: null, unidad: null },
        { nombre: 'Calabaza, cebolla y alcachofas', cantidad: 150, unidad: 'g' }
      ]
    },
    {
      id: 'ce17',
      nombre: 'Espaguetis de calabacín con boloñesa de pollo',
      ingredientes: [
        { nombre: 'Espaguetis de calabacín', cantidad: 150, unidad: 'g' },
        { nombre: 'Carne picada de pollo', cantidad: 200, unidad: 'g' },
        { nombre: 'Tomate triturado', cantidad: 100, unidad: 'g' },
        { nombre: 'Cebolla', cantidad: 40, unidad: 'g' },
        { nombre: 'Verduras (cebolla + zanahoria)', cantidad: 80, unidad: 'g' },
        { nombre: 'Queso parmesano', cantidad: 30, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'ce18',
      nombre: 'Sardinas o pescado azul a la plancha con crema de zanahoria y jengibre',
      ingredientes: [
        { nombre: 'Pescado azul / sardinas', cantidad: 200, unidad: 'g' },
        { nombre: 'Crema de zanahoria, naranja y jengibre', cantidad: 1, unidad: 'plato sopero' }
      ]
    },
    {
      id: 'ce19',
      nombre: 'Boquerones a la parrilla con calabacín y cebolla',
      ingredientes: [
        { nombre: 'Boquerones', cantidad: 200, unidad: 'g' },
        { nombre: 'Calabacín y cebolla pequeña', cantidad: 150, unidad: 'g' },
        { nombre: 'Piñones', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'ce20',
      nombre: 'Ensalada de camarones con aguacate y feta',
      ingredientes: [
        { nombre: 'Camarones', cantidad: 200, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Espinacas', cantidad: null, unidad: 'g' },
        { nombre: 'Tomates cherry', cantidad: 100, unidad: 'g' },
        { nombre: 'Queso feta', cantidad: 30, unidad: 'g' },
        { nombre: 'Semillas', cantidad: 5, unidad: 'g' }
      ]
    },
    {
      id: 'ce21',
      nombre: 'Filete de pescado blanco con berenjena rebozada',
      ingredientes: [
        { nombre: 'Pescado blanco', cantidad: 200, unidad: 'g' },
        { nombre: 'Berenjena rebozada', cantidad: 150, unidad: 'g' }
      ]
    },
    {
      id: 'ce22',
      nombre: 'Tartar de gambas con aguacate y verduras',
      ingredientes: [
        { nombre: 'Gambas', cantidad: 180, unidad: 'g' },
        { nombre: 'Aguacate', cantidad: 0.5, unidad: 'ud' },
        { nombre: 'Zanahoria', cantidad: null, unidad: 'g' },
        { nombre: 'Cebolla morada', cantidad: 60, unidad: 'g' },
        { nombre: 'Salsa de soja', cantidad: null, unidad: 'ml' }
      ]
    },
    {
      id: 'ce23',
      nombre: 'Risotto de coliflor con pollo y alcachofas',
      ingredientes: [
        { nombre: 'Arroz de coliflor', cantidad: 150, unidad: 'g' },
        { nombre: 'Pollo', cantidad: 180, unidad: 'g' },
        { nombre: 'Alcachofas', cantidad: null, unidad: 'g' },
        { nombre: 'Cebolla', cantidad: 100, unidad: 'g' },
        { nombre: 'Queso parmesano', cantidad: 20, unidad: 'g' }
      ]
    },
    {
      id: 'ce24',
      nombre: 'Pescado blanco con judías verdes y parmesano',
      ingredientes: [
        { nombre: 'Pescado blanco', cantidad: 200, unidad: 'g' },
        { nombre: 'Judías verdes', cantidad: 150, unidad: 'g' },
        { nombre: 'Zanahoria', cantidad: 50, unidad: 'g' },
        { nombre: 'Queso parmesano', cantidad: 25, unidad: 'g' }
      ]
    },
    {
      id: 'ce25',
      nombre: 'Pollo al limón con berenjena y alcachofas',
      ingredientes: [
        { nombre: 'Pollo', cantidad: 180, unidad: 'g' },
        { nombre: 'Limón', cantidad: null, unidad: null },
        { nombre: 'Berenjena', cantidad: null, unidad: 'g' },
        { nombre: 'Alcachofas', cantidad: null, unidad: 'g' }
      ]
    },
    {
      id: 'ce26',
      nombre: 'Solomillo de atún con champiñones y nueces',
      ingredientes: [
        { nombre: 'Atún (solomillo)', cantidad: 180, unidad: 'g' },
        { nombre: 'Champiñones', cantidad: 100, unidad: 'g' },
        { nombre: 'Nueces', cantidad: 10, unidad: 'g' },
        { nombre: 'Aceite de oliva', cantidad: 5, unidad: 'ml' }
      ]
    },
    {
      id: 'ce27',
      nombre: 'Tortilla de judías verdes con queso',
      ingredientes: [
        { nombre: 'Huevos', cantidad: 2, unidad: 'ud' },
        { nombre: 'Judías verdes', cantidad: 100, unidad: 'g' },
        { nombre: 'Queso sin lactosa', cantidad: 20, unidad: 'g' }
      ]
    }
  ]
};
