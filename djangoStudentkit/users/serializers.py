from .models import User, UserManager
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'date_joined']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

class UserManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserManager
        fields = []