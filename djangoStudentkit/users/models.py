from django.db import models

# Create your models here.

class Users(models.Model):
    username = models.CharField(unique=True, max_length=255)
    email = models.CharField(unique=True, max_length=255)
    password = models.CharField(max_length=64)
    preferencespath = models.CharField(db_column='preferencesPath', unique=True, max_length=1023)  # Field name made lowercase.

    class Meta:
        db_table = 'USERS'
