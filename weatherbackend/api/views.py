from django.shortcuts import render
from .serializers import WeatherSerializer
from rest_framework.generics import ListAPIView
from .models import Weather


# Create your views here.
class WeatherList(ListAPIView):
    queryset = Weather.objects.all()
    serializer_class = WeatherSerializer
