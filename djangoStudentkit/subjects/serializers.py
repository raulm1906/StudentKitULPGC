from rest_framework import serializers
from .models import Subject, Degree


class DegreeSerializer(serializers.Serializer):
    # degree = serializers.StringRelatedField()
    class Meta:
        model = Degree
        fields = '__all__'


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['code', 'name', 'degree', 'credits',
                  'year', 'linkpd', 'subject_type', 'semester']
