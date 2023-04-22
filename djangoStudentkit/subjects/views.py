from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import LessonSerializer, SubjectSerializer, DegreeSerializer
from .models import Lesson, Subject, Degree


class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer


class DegreeViewSet(viewsets.ModelViewSet):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer


class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
