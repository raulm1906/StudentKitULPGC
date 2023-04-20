from rest_framework import serializers
from .models import Subject, Degree, Department

class DegreeSerializer(serializers.Serializer):
    class Meta:
        model = Degree
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['code', 'name', 'degree', 'credits', 'year', 'linkpd', 'subject_type', 'semester']