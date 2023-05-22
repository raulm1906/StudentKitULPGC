from django.db import models
from users.models import User
from config.settings.base import AUTH_USER_MODEL


# Create your models here.


class Event(models.Model):
    id = models.UUIDField(primary_key=True)
    title = models.CharField(max_length=255)
    subject_code = models.CharField(max_length=30)
    startTime = models.CharField(max_length=255)
    endTime = models.CharField(max_length=255)
    days_of_week = models.IntegerField(choices=(
        (1, 'Monday'),
        (2, 'Tuesday'),
        (3, 'Wednesday'),
        (4, 'Thursday'),
        (5, 'Friday'),
        (6, 'Saturday'),
        (7, 'Sunday'),
    ))
    schedule = models.ForeignKey('Schedule', on_delete=models.CASCADE, related_name='events')
    startRecur = models.CharField(max_length=255, default= "2023-03-01T00:00:00")
    endRecur = models.CharField(max_length=255, default="2024-05-01T00:00:00")
    rrule = models.JSONField(default=dict(freq='weekly', interval=1))
    backgroundColor = models.CharField(max_length=255, default="#FEAD57")
    color = models.CharField(max_length=255, default="#FEAD57")

    class Meta:
        db_table = 'event'
    

class Schedule(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)

    class Meta:
        db_table = 'schedule'
    

