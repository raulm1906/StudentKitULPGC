from django.db import models
from users.models import User
from config.settings.base import AUTH_USER_MODEL


# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=255)
    start_time = models.CharField(max_length=255)
    end_time = models.CharField(max_length=255)
    days_of_week = models.IntegerField(choices=(
        (1, 'Monday'),
        (2, 'Tuesday'),
        (3, 'Wednesday'),
        (4, 'Thursday'),
        (5, 'Friday'),
        (6, 'Saturday'),
        (7, 'Sunday'),
    ))

    class Meta:
        db_table = 'event'
    

class Schedule(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    events = models.ManyToManyField('Event')

    class Meta:
        db_table = 'schedule'
    

