# ArgenNet Backend

Backend para la aplicación de ecommerce ArgenNet, desarrollado con FastAPI y Pydantic.

## Requisitos

- Python 3.8+
- PostgreSQL (opcional, por defecto se usa SQLite)

## Instalación

1. Clonar el repositorio
2. Crear un entorno virtual:
   ```
   python -m venv venv
   ```
3. Activar el entorno virtual:
   - Windows:
     ```
     venv\Scripts\activate
     ```
   - Linux/Mac:
     ```
     source venv/bin/activate
     ```
4. Instalar las dependencias:
   ```
   pip install -r requirements.txt
   ```
5. Configurar las variables de entorno en el archivo `.env`

## Ejecución

Para ejecutar el servidor de desarrollo:

```
uvicorn main:app --reload
```

El servidor estará disponible en `http://localhost:8000`.

## Documentación de la API

La documentación de la API estará disponible en:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Estructura del Proyecto

```
backend/
├── app/
│   ├── models/         # Modelos de SQLAlchemy
│   ├── schemas/        # Esquemas de Pydantic
│   ├── routers/        # Routers de FastAPI
│   ├── utils/          # Utilidades
│   └── database/       # Configuración de la base de datos
├── main.py             # Punto de entrada de la aplicación
├── requirements.txt    # Dependencias
└── .env                # Variables de entorno
```

## Endpoints Principales

- `/api/users`: Gestión de usuarios
- `/api/products`: Gestión de productos
- `/api/categories`: Gestión de categorías
- `/api/cart`: Gestión del carrito de compras
- `/api/orders`: Gestión de órdenes 