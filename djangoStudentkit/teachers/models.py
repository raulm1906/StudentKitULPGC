from django.db import models
from subjects.models import Subject

# Create your models here.


DAY_OF_WEEK_CHOICES = (
    (1, 'Monday'),
    (2, 'Tuesday'),
    (3, 'Wednesday'),
    (4, 'Thursday'),
    (5, 'Friday'),
)


class KnowledgeArea(models.Model):
    # Field name made lowercase.
    knowledge_area = models.CharField(unique=True, max_length=255)

    class Meta:
        db_table = 'knowledge_area'


class tutoringHour(models.Model):
    semester = models.CharField(max_length=30)
    day = models.IntegerField(choices=DAY_OF_WEEK_CHOICES)
    start_time = models.TimeField()
    ending_time = models.TimeField()
    teacher = models.ForeignKey(
        'Teacher', on_delete=models.CASCADE, related_name='tutoring_hours')

    class Meta:
        db_table = 'tutoring_hour'


class Teacher(models.Model):
    name = models.CharField(max_length=255, unique=True)
    knowledge_area = models.ForeignKey(
        'KnowledgeArea',
        on_delete=models.DO_NOTHING,
        db_column='knowledge_area',
        related_name='teachers'
    )
    email = models.EmailField(max_length=255, unique=True)
    phone_number = models.CharField(
        max_length=20, unique=True, null=True)
    office = models.CharField(max_length=255, null=True)

    class Meta:
        db_table = 'teacher'
