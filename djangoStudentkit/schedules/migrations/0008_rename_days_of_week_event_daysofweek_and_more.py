# Generated by Django 4.2 on 2023-04-30 01:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedules', '0007_event_endrecur_event_rrule_event_startrecur_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='days_of_week',
            new_name='daysOfWeek',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='end_time',
            new_name='endTime',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='start_time',
            new_name='startTime',
        ),
        migrations.AlterField(
            model_name='event',
            name='subject_code',
            field=models.CharField(max_length=30),
        ),
    ]
