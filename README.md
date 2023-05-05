
Weather Widget
This is a weather widget that displays the temperature, visibility, feels like, and humidity of a given location using the OpenWeather API. The widget is built using React and has a Django backend to store API calls.

Features:
- Displays the current temperature, visibility, feels like, and humidity of a given location.
- Stores API calls in a Django backend for later retrieval.
- Built using React for a modern and responsive user interface.
- Uses the OpenWeather API to retrieve weather data.
- Uses the Django REST Framework to create a RESTful API.
Installation:

To install the project, follow these steps:

- Clone the repository to your local machine.
- Install the required dependencies by running pip install -r requirements.txt from the root directory of the project.
- Set up your API keys in the weatherapp/settings.py file. You can get your API key from OpenWeather API.
- Navigate to the weatherapp directory and run python manage.py migrate to create the database tables.
- Run the server by running python manage.py runserver from the weatherapp directory.

Usage:
Once the server is running, you can access the weather widget by visiting http://localhost:8000/ in your web browser. Enter a location in the search box to display the current temperature, visibility, feels like, and humidity for that location. The widget will also store API calls in the Django backend for later retrieval.

Running Django and React Separately:
If you prefer to run Django and React separately, follow these steps:

- To run the Django server, navigate to the weatherapp directory and run python manage.py runserver.
- To run the React app, navigate to the root directory of the project and run npm start.

Note that running Django and React separately may cause issues with cross-origin requests. If you encounter any issues, try running Django and React concurrently using the instructions in the "Installation" section above.