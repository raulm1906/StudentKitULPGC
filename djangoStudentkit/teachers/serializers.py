from rest_framework import serializers
from .models import Teacher, Knowledgearea


class KnowledgeAreaSerializer(serializers.Serializer):
    class Meta:
        model = Knowledgearea
        fields = ['id', 'name']



class TeacherSerializer(serializers.Serializer):
    knowledgeArea = KnowledgeAreaSerializer()
    class Meta:
        model = Teacher
        fields = ['name', 'knowledgearea', 'email', 'phonenumber', 'office']
        
