# Generated by Django 4.2 on 2023-04-30 00:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedules', '0006_event_id_alter_event_subject_code'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='endRecur',
            field=models.CharField(default='2024-05-01T00:00:00', max_length=255),
        ),
        migrations.AddField(
            model_name='event',
            name='rrule',
            field=models.JSONField(default={'freq': 'weekly', 'interval': 1}),
        ),
        migrations.AddField(
            model_name='event',
            name='startRecur',
            field=models.CharField(default='2023-03-01T00:00:00', max_length=255),
        ),
        migrations.AlterField(
            model_name='event',
            name='id',
            field=models.UUIDField(primary_key=True, serialize=False),
        ),
    ]