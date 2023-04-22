from django.db import models


DAY_OF_WEEK_CHOICES = (
    (1, 'Monday'),
    (2, 'Tuesday'),
    (3, 'Wednesday'),
    (4, 'Thursday'),
    (5, 'Friday'),
)

# Create your models here.


class Degree(models.Model):
    degree = models.CharField(unique=True, max_length=255)

    class Meta:
        db_table = 'degree'


class Department(models.Model):
    department = models.CharField(unique=True, max_length=255)
    subjects = models.ManyToManyField('Subject', related_name='departments')

    class Meta:
        db_table = 'department'


class Subject(models.Model):
    code = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)

    degree = models.ForeignKey(
        'Degree',
        on_delete=models.DO_NOTHING,
        db_column='degree',
        related_name='subjects'
    )
    credits = models.PositiveSmallIntegerField()
    year = models.PositiveSmallIntegerField()
    linkpd = models.URLField(max_length=200, blank=True)
    subject_type = models.CharField(max_length=30)
    semester = models.CharField(max_length=30)
    teachers = models.ManyToManyField(
        'teachers.Teacher', through='SubjectTeacher')

    class Meta:
        db_table = 'subject'


class SubjectTeacher(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    teacher = models.ForeignKey("teachers.Teacher", on_delete=models.CASCADE)
    group = models.CharField(max_length=255)

    class Meta:
        db_table = 'subjectTeacher'


class Lesson(models.Model):
    classroom = models.CharField(max_length=255)
    group = models.PositiveSmallIntegerField()
    day = models.IntegerField(choices=DAY_OF_WEEK_CHOICES)
    start_time = models.TimeField()
    ending_time = models.TimeField()
    week = models.CharField(max_length=255)
    subject = models.ForeignKey(
        'Subject', on_delete=models.CASCADE, related_name='lessons')

    class Meta:
        db_table = 'lesson'
