from django.db import models
from subjects.models import Subject

# Create your models here.

class KnowledgeArea(models.Model):
    # Field name made lowercase.
    knowledge_area = models.CharField(unique=True, max_length=255)

    class Meta:
        db_table = 'knowledge_area'


class tutoringHour(models.Model):
    semester = models.CharField(max_length=30)
    monday = models.CharField(max_length=30)
    tuesday = models.CharField(max_length=30)
    wednesday = models.CharField(max_length=30)
    thursday = models.CharField(max_length=30)
    friday = models.CharField(max_length=30)
    day = models.CharField(max_length=30)
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
