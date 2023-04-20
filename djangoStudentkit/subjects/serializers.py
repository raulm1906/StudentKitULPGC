from rest_framework import serializers
from .models import Subject, Degree, Department

class DegreeSerializer(serializers.Serializer):
    #degree = serializers.StringRelatedField()
    class Meta:
        model = Degree
        fields = '__all__'

class SubjectSerializer(serializers.Serializer):
    #code = serializers
    #departments = serializers.StringRelatedField(many=True)
    #degree = DegreeSerializer()
    class Meta:
        model = Subject
        fields = ['asignatura']

    def create(self, validated_data):
        return Subject.objects.create(**validated_data)

