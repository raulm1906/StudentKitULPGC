# Generated by Django 4.2 on 2023-04-21 10:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('subjects', '0004_subjectteacher_subject_teachers'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subject',
            name='teachers',
        ),
        migrations.DeleteModel(
            name='SubjectTeacher',
        ),
    ]
