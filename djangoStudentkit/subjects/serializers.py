from rest_framework import serializers
from .models import Subject, Degree, Department

class DegreeSerializer(serializers.Serializer):
    #degree = serializers.StringRelatedField()
    class Meta:
        model = Degree
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

    def create(self, validated_data):
        return Subject.objects.create(**validated_data)

