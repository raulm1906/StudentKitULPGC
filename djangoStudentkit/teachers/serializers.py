from rest_framework import serializers
from .models import KnowledgeArea, Teacher, tutoringHour


class KnowledgeAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnowledgeArea
        fields = ['id', 'knowledge_area']


class TutoringHourSerializer(serializers.ModelSerializer):
    class Meta:
        model = tutoringHour
        fields = ['id', 'semester', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']


class TeacherSerializer(serializers.ModelSerializer):
    tutoring_hours = TutoringHourSerializer(many=True, read_only=True)

    class Meta:
        model = Teacher
        fields = ['id', 'name', 'knowledge_area',
                  'email', 'phone_number', 'office', 'tutoring_hours']
