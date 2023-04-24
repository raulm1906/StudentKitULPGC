from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import LessonSerializer, SubjectSerializer, DegreeSerializer, SubjectTeacherSerializer
from .models import Lesson, Subject, Degree, SubjectTeacher


class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

    def get_queryset(self):
        id = self.request.query_params.get('id')
        if id is not None:
            return Subject.objects.filter(code=id)
        return Subject.objects.all()


class DegreeViewSet(viewsets.ModelViewSet):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer


class SubjectTeacherViewSet(viewsets.ModelViewSet):
    queryset = SubjectTeacher.objects.all()
    serializer_class = SubjectTeacherSerializer


class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
