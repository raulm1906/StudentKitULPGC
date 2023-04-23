from rest_framework import serializers
from .models import Teacher, Knowledgearea





class TeacherSerializer(serializers.Serializer):
    class Meta:
        model = Teacher
        fields = '__all__'

class KnowledgeAreaSerializer(serializers.Serializer):
    class Meta:
        model = Knowledgearea
        fields = '__all__'


        
