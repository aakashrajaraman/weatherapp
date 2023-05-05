from django.urls import path
from api import views
from .views import WeatherList

urlpatterns = [
    path("weather/", WeatherList.as_view()),
]