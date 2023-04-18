from rest_framework import serializers
from .models import Contact, Subject

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'surname', 'email']


class SubjectSerializer(serializers.Serializer):
    class Meta:
        model = Subject
        fields = ['id', ]

class Teacher(serializers.Serializer):
    class Meta:
        model = Teacher
        