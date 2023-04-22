from rest_framework import serializers
from .models import Subject, Degree


class DegreeSerializer(serializers.ModelSerializer):
    # degree = serializers.StringRelatedField()
    class Meta:
        model = Degree
        fields = ['degree']


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['code', 'name', 'degree', 'credits',
                  'year', 'linkpd', 'subject_type', 'semester']
