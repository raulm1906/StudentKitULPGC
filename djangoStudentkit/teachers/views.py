from django.shortcuts import render
from rest_framework import viewsets
from .models import Knowledgearea, Teacher, Teaching
from .serializers import KnowledgeAreaSerializer, TeacherSerializer

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class KnowledgeAreaViewSet(viewsets.ModelViewSet):
    queryset = Knowledgearea.objects.all()
    serializer_class = KnowledgeAreaSerializer
