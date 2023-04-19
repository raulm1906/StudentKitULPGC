from django.db import models
from subjects.models import Subject

# Create your models here.

class Knowledgearea(models.Model):
    knowledgearea = models.CharField(db_column='knowledgeArea', unique=True, max_length=255)  # Field name made lowercase.

    class Meta:
        db_table = 'KNOWLEDGEAREA'


class Teacher(models.Model):
    name = models.CharField(unique=True, max_length=255)
    knowledgearea = models.ForeignKey(Knowledgearea, models.DO_NOTHING, db_column='KNOWLEDGEAREA', blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(unique=True, max_length=255)
    phonenumber = models.CharField(db_column='phoneNumber', unique=True, max_length=255, blank=True, null=True)  # Field name made lowercase.
    office = models.CharField(max_length=255, blank=True, null=True)
    schedulepath = models.CharField(db_column='schedulePath', unique=True, max_length=1023, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'TEACHERS'


class Teaching(models.Model):
    teacherid = models.OneToOneField(Teacher, models.DO_NOTHING, db_column='teacherId', primary_key=True)  # Field name made lowercase. The composite primary key (teacherId, subjectCode) found, that is not supported. The first column is selected.
    subjectcode = models.ForeignKey(Subject, models.DO_NOTHING, db_column='subjectCode')  # Field name made lowercase.

    class Meta:
        db_table = 'TEACHING'
        unique_together = (('teacherid', 'subjectcode'),)

