from django.db import models
from users.models import Users


# Create your models here.

class Groups(models.Model):
    groupcode = models.IntegerField(db_column='groupCode', primary_key=True)  # Field name made lowercase.
    type = models.CharField(max_length=11)

    class Meta:
        db_table = 'GROUPS'


class Subjectschedules(models.Model):
    subjectcode = models.OneToOneField('subjects.Subject', models.DO_NOTHING, db_column='subjectCode', primary_key=True)  # Field name made lowercase. The composite primary key (subjectCode, groupCode) found, that is not supported. The first column is selected.
    groupcode = models.ForeignKey(Groups, models.DO_NOTHING, db_column='groupCode')  # Field name made lowercase.
    schedulepath = models.CharField(db_column='schedulePath', unique=True, max_length=1023, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'SUBJECTSCHEDULES'
        unique_together = (('subjectcode', 'groupcode'),)


class Userschedules(models.Model):
    code = models.AutoField(primary_key=True)  # The composite primary key (code, id) found, that is not supported. The first column is selected.
    id = models.IntegerField()
    schedulepath = models.CharField(db_column='schedulePath', unique=True, max_length=1023)  # Field name made lowercase.

    class Meta:
        db_table = 'USERSCHEDULES'
        unique_together = (('code', 'id'),)

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

    def __str__(self):
        return self.title
    

class Schedule(models.Model):
    userId = models.ForeignKey(Users, on_delete=models.CASCADE)
    events = models.ManyToManyField('Event')

    def __str__(self):
        return f"Schedule for {self.user.username}"
    

