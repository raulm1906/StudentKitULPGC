# Generated by Django 4.2 on 2023-04-26 11:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('teachers', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Degree',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('degree', models.CharField(max_length=255, unique=True)),
            ],
            options={
                'db_table': 'degree',
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('code', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('department', models.CharField(max_length=255)),
                ('credits', models.PositiveSmallIntegerField()),
                ('year', models.PositiveSmallIntegerField()),
                ('linkpd', models.URLField(blank=True)),
                ('subject_type', models.CharField(max_length=30)),
                ('semester', models.CharField(max_length=30)),
                ('degree', models.ForeignKey(db_column='degree', on_delete=django.db.models.deletion.DO_NOTHING, related_name='subjects', to='subjects.degree')),
            ],
            options={
                'db_table': 'subject',
            },
        ),
        migrations.CreateModel(
            name='SubjectTeacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group', models.CharField(max_length=255)),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='teachers_in_subject', to='subjects.subject')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subjects_of_teacher', to='teachers.teacher')),
            ],
            options={
                'db_table': 'subject_teacher',
            },
        ),
        migrations.AddField(
            model_name='subject',
            name='teachers',
            field=models.ManyToManyField(through='subjects.SubjectTeacher', to='teachers.teacher'),
        ),
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('classroom', models.CharField(max_length=255)),
                ('group', models.PositiveSmallIntegerField()),
                ('day', models.IntegerField(choices=[(1, 'Monday'), (2, 'Tuesday'), (3, 'Wednesday'), (4, 'Thursday'), (5, 'Friday')])),
                ('start_time', models.TimeField()),
                ('ending_time', models.TimeField()),
                ('week', models.CharField(max_length=255)),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lessons', to='subjects.subject')),
            ],
            options={
                'db_table': 'lesson',
            },
        ),
    ]
