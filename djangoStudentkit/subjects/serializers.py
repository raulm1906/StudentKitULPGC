from rest_framework import serializers
from .models import Subject, Department


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['code', 'name', 'degree', 'credits', 'year', 'linkpd', 'subject_type', 'semester']
