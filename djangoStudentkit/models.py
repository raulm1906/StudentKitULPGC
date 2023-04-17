# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remov` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Degree(models.Model):
    degree = models.CharField(unique=True, max_length=255)

    class Meta:
        db_table = 'DEGREE'


class Department(models.Model):
    department = models.CharField(unique=True, max_length=255)

    class Meta:
        db_table = 'DEPARTMENT'


class Groups(models.Model):
    groupcode = models.IntegerField(db_column='groupCode', primary_key=True)  # Field name made lowercase.
    type = models.CharField(max_length=11)

    class Meta:
        db_table = 'GROUPS'


class Knowledgearea(models.Model):
    knowledgearea = models.CharField(db_column='knowledgeArea', unique=True, max_length=255)  # Field name made lowercase.

    class Meta:
        db_table = 'KNOWLEDGEAREA'


class Subjectdepartments(models.Model):
    subjectcode = models.OneToOneField('Subjects', models.DO_NOTHING, db_column='subjectCode', primary_key=True)  # Field name made lowercase. The composite primary key (subjectCode, department) found, that is not supported. The first column is selected.
    department = models.ForeignKey(Department, models.DO_NOTHING, db_column='department')

    class Meta:
        db_table = 'SUBJECTDEPARTMENTS'
        unique_together = (('subjectcode', 'department'),)


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


class Subjectschedules(models.Model):
    subjectcode = models.OneToOneField(Subjects, models.DO_NOTHING, db_column='subjectCode', primary_key=True)  # Field name made lowercase. The composite primary key (subjectCode, groupCode) found, that is not supported. The first column is selected.
    groupcode = models.ForeignKey(Groups, models.DO_NOTHING, db_column='groupCode')  # Field name made lowercase.
    schedulepath = models.CharField(db_column='schedulePath', unique=True, max_length=1023, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'SUBJECTSCHEDULES'
        unique_together = (('subjectcode', 'groupcode'),)


class Teachers(models.Model):
    name = models.CharField(unique=True, max_length=255)
    knowledgearea = models.ForeignKey(Knowledgearea, models.DO_NOTHING, db_column='KNOWLEDGEAREA', blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(unique=True, max_length=255)
    phonenumber = models.CharField(db_column='phoneNumber', unique=True, max_length=255, blank=True, null=True)  # Field name made lowercase.
    office = models.CharField(max_length=255, blank=True, null=True)
    schedulepath = models.CharField(db_column='schedulePath', unique=True, max_length=1023, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'TEACHERS'


class Teaching(models.Model):
    teacherid = models.OneToOneField(Teachers, models.DO_NOTHING, db_column='teacherId', primary_key=True)  # Field name made lowercase. The composite primary key (teacherId, subjectCode) found, that is not supported. The first column is selected.
    subjectcode = models.ForeignKey(Subjects, models.DO_NOTHING, db_column='subjectCode')  # Field name made lowercase.

    class Meta:
        db_table = 'TEACHING'
        unique_together = (('teacherid', 'subjectcode'),)


class Users(models.Model):
    username = models.CharField(unique=True, max_length=255)
    email = models.CharField(unique=True, max_length=255)
    password = models.CharField(max_length=64)
    preferencespath = models.CharField(db_column='preferencesPath', unique=True, max_length=1023)  # Field name made lowercase.

    class Meta:
        db_table = 'USERS'


class Userschedules(models.Model):
    code = models.AutoField(primary_key=True)  # The composite primary key (code, id) found, that is not supported. The first column is selected.
    id = models.IntegerField()
    schedulepath = models.CharField(db_column='schedulePath', unique=True, max_length=1023)  # Field name made lowercase.

    class Meta:
        db_table = 'USERSCHEDULES'
        unique_together = (('code', 'id'),)
