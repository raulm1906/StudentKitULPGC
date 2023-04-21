from django.db import models
from subjects.models import Subject

# Create your models here.

class Teacher(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name='Name')
    knowledge_area = models.CharField(unique=True, max_length=255, verbose_name='Knowledge Area')
    email = models.EmailField(max_length=255, unique=True, verbose_name='Email')
    phone_number = models.CharField(max_length=255, unique=True, null=True, blank=True, verbose_name='Phone Number')
    office = models.CharField(max_length=255, null=True, blank=True, verbose_name='Office')

    class Meta:
        db_table = 'teachers'
        verbose_name = 'Teacher'
        verbose_name_plural = 'Teachers'
