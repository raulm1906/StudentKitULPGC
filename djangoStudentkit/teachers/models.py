from django.db import models
from subjects.models import Subject

# Create your models here.

class Knowledgearea(models.Model):
    knowledgearea = models.CharField(db_column='knowledgeArea', unique=True, max_length=255)  # Field name made lowercase.

    class Meta:
        db_table = 'knowledgearea'


class Teacher(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name='Name')
    knowledge_area = models.CharField(unique=True, max_length=255, verbose_name='Knowledge Area')
    email = models.EmailField(max_length=255, unique=True, verbose_name='Email')
    phone_number = models.CharField(max_length=255, unique=True, null=True, blank=True, verbose_name='Phone Number')
    office = models.CharField(max_length=255, null=True, blank=True, verbose_name='Office')

    class Meta:
        db_table = 'teachers'


class Teaching(models.Model):
    teacherid = models.OneToOneField(Teacher, models.DO_NOTHING, db_column='teacherId', primary_key=True)  # Field name made lowercase. The composite primary key (teacherId, subjectCode) found, that is not supported. The first column is selected.
    subjectcode = models.ForeignKey(Subject, models.DO_NOTHING, db_column='subjectCode')  # Field name made lowercase.

    class Meta:
        db_table = 'TEACHING'
        unique_together = (('teacherid', 'subjectcode'),)
        verbose_name = 'Teacher'
        verbose_name_plural = 'Teachers'
