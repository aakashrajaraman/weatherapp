from django.db import models

# Create your models here.
class Weather(models.Model):
    location = models.CharField(max_length=100)
    temp = models.FloatField()
    description = models.CharField(max_length=100)
    feels_like = models.FloatField()
    humidity = models.IntegerField()
    visibility = models.FloatField()
