# Blockhouse Dashboard

This project consists of a Django backend and a Next.js frontend for the Blockhouse Dashboard.

## Setup and Running the Application

Clone the repository:
   ```
   git clone https://github.com/1leozhao/blockhouse-dashboard.git
   cd blockhouse-dashboard
   ```

### Prerequisites

- Python 3.8+
- Node.js 14+
- npm 6+

### Backend Setup

1. Create and activate a virtual environment:
   ```
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Install the required packages:
   ```
   cd backend
   pip install Django djangorestframework django-cors-headers psycopg2-binary
   ```

3. Run migrations:
   ```
   python manage.py migrate
   ```

4. Start the Django development server:
   ```
   python manage.py runserver
   ```

### Frontend Setup

   1. Navigate to the frontend directory
      ```
      cd frontend
      ```

   2. Install dependencies
      ```
      npm install
      ```
      
   3. Start the development server
      ```
      npm run dev
      ```
      
### Usage

1. Ensure both backend and frontend services are running.
2. Access the specified port. [localhost:8000](http://localhost:8000/)

### API Endpoints
- Candlestick Data: http://localhost:8000/api/candlestick-data/
- Line Chart Data: http://localhost:8000/api/line-chart-data/
- Bar Chart Data: http://localhost:8000/api/bar-chart-data/
- Pie Chart Data: http://localhost:8000/api/pie-chart-data/

### Libraries & Tools
- Backend:
--Django
--Django REST Framework
--django-cors-headers
--psycopg2-binary

- Frontend:
--React
--Next.js
--Chart.js
--react-chartjs-2

- Tools:
--pip
--npm
--Git

### Reflection

The Blockhouse Dashboard project represents a significant integration of modern web technologies, combining a Django backend with a Next.js frontend to create a dynamic and responsive user interface. Throughout the development process, I gained valuable experience in setting up RESTful APIs, managing state in React, and implementing responsive design principles. This project not only enhanced my technical skills but also reinforced the importance of clear documentation and collaboration in software development.
