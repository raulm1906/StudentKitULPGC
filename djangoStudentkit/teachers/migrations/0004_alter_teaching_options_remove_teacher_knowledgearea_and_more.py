# Generated by Django 4.2 on 2023-04-22 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teachers', '0003_alter_knowledgearea_table_alter_teacher_table'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='teaching',
            options={'verbose_name': 'Teacher', 'verbose_name_plural': 'Teachers'},
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='knowledgearea',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='phonenumber',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='schedulepath',
        ),
        migrations.AddField(
            model_name='teacher',
            name='knowledge_area',
            field=models.CharField(default='', max_length=255, unique=True, verbose_name='Knowledge Area'),
        ),
        migrations.AddField(
            model_name='teacher',
            name='phone_number',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True, verbose_name='Phone Number'),
        ),
        migrations.AlterField(
            model_name='teacher',
            name='email',
            field=models.EmailField(max_length=255, unique=True, verbose_name='Email'),
        ),
        migrations.AlterField(
            model_name='teacher',
            name='name',
            field=models.CharField(max_length=255, unique=True, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='teacher',
            name='office',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Office'),
        ),
    ]
