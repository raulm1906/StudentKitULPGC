from django.shortcuts import render
import statistics
from rest_framework import viewsets

from .models import KnowledgeArea, Teacher, tutoringHour
from .serializers import KnowledgeAreaSerializer, TeacherSerializer, TutoringHourSerializer


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class KnowledgeAreaViewSet(viewsets.ModelViewSet):
    queryset = KnowledgeArea.objects.all()
    serializer_class = KnowledgeAreaSerializer


class TutoringHourViewSet(viewsets.ModelViewSet):
    queryset = tutoringHour.objects.all()
    serializer_class = TutoringHourSerializer
