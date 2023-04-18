from django.db import models

# Create your models here.

class Degree(models.Model):
    degree = models.CharField(unique=True, max_length=255)

    class Meta:
        db_table = 'DEGREE'

class Department(models.Model):
    department = models.CharField(unique=True, max_length=255)

    class Meta:
        db_table = 'DEPARTMENT'

class Subjects(models.Model):
    code = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    degree = models.ForeignKey(Degree, models.DO_NOTHING, db_column='degree')
    credits = models.CharField(max_length=2)
    year = models.CharField(max_length=1)
    linkpd = models.CharField(db_column='linkPD', max_length=1023)  # Field name made lowercase.
    type = models.CharField(max_length=14)
    semester = models.CharField(max_length=7)

    class Meta:
        db_table = 'SUBJECTS'

class Subjectdepartments(models.Model):
    subjectcode = models.OneToOneField('Subjects', models.DO_NOTHING, db_column='subjectCode', primary_key=True)  # Field name made lowercase. The composite primary key (subjectCode, department) found, that is not supported. The first column is selected.
    department = models.ForeignKey(Department, models.DO_NOTHING, db_column='department')

    class Meta:
        db_table = 'SUBJECTDEPARTMENTS'
        unique_together = (('subjectcode', 'department'),)
