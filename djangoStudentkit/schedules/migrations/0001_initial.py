# Generated by Django 4.2 on 2023-05-04 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('subject_code', models.CharField(max_length=30)),
                ('startTime', models.CharField(max_length=255)),
                ('endTime', models.CharField(max_length=255)),
                ('days_of_week', models.IntegerField(choices=[(1, 'Monday'), (2, 'Tuesday'), (3, 'Wednesday'), (4, 'Thursday'), (5, 'Friday'), (6, 'Saturday'), (7, 'Sunday')])),
                ('startRecur', models.CharField(default='2023-03-01T00:00:00', max_length=255)),
                ('endRecur', models.CharField(default='2024-05-01T00:00:00', max_length=255)),
                ('rrule', models.JSONField(default={'freq': 'weekly', 'interval': 1})),
                ('backgroundColor', models.CharField(default='#FEAD57', max_length=255)),
                ('color', models.CharField(default='#FEAD57', max_length=255)),
            ],
            options={
                'db_table': 'event',
            },
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'schedule',
            },
        ),
    ]
