# Generated by Django 4.2 on 2023-04-26 11:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('subjects', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('start_time', models.CharField(max_length=255)),
                ('end_time', models.CharField(max_length=255)),
                ('days_of_week', models.IntegerField(choices=[(1, 'Monday'), (2, 'Tuesday'), (3, 'Wednesday'), (4, 'Thursday'), (5, 'Friday'), (6, 'Saturday'), (7, 'Sunday')])),
            ],
        ),
        migrations.CreateModel(
            name='Groups',
            fields=[
                ('groupcode', models.IntegerField(db_column='groupCode', primary_key=True, serialize=False)),
                ('type', models.CharField(max_length=11)),
            ],
            options={
                'db_table': 'groups',
            },
        ),
        migrations.CreateModel(
            name='Userschedules',
            fields=[
                ('code', models.AutoField(primary_key=True, serialize=False)),
                ('id', models.IntegerField()),
            ],
            options={
                'db_table': 'userschedules',
                'unique_together': {('code', 'id')},
            },
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('events', models.ManyToManyField(to='schedules.event')),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Subjectschedules',
            fields=[
                ('subjectcode', models.OneToOneField(db_column='subjectCode', on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='subjects.subject')),
                ('schedulepath', models.CharField(blank=True, db_column='schedulePath', max_length=1023, null=True, unique=True)),
                ('groupcode', models.ForeignKey(db_column='groupCode', on_delete=django.db.models.deletion.DO_NOTHING, to='schedules.groups')),
            ],
            options={
                'db_table': 'SUBJECTSCHEDULES',
                'unique_together': {('subjectcode', 'groupcode')},
            },
        ),
    ]
