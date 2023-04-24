from django.shortcuts import render
from rest_framework import viewsets

from .models import KnowledgeArea, Teacher, tutoringHour
from .serializers import KnowledgeAreaSerializer, TeacherSerializer, TutoringHourSerializer


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

    def get_queryset(self):
        id = self.request.query_params.get('id')
        semester = self.request.query_params.get('semester')
        if id is not None:
            queryset = Teacher.objects.filter(id=id)
            if semester is not None:
                queryset = queryset.filter(tutoring_hours__semester=semester)
            return queryset
        else:
            return Teacher.objects.all()


class KnowledgeAreaViewSet(viewsets.ModelViewSet):
    queryset = KnowledgeArea.objects.all()
    serializer_class = KnowledgeAreaSerializer


class TutoringHourViewSet(viewsets.ModelViewSet):
    queryset = tutoringHour.objects.all()
    serializer_class = TutoringHourSerializer
