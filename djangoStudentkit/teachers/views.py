from django.shortcuts import render
import statistics
from rest_framework import viewsets

from .models import KnowledgeArea, Teacher, tutoringHour
from .serializers import KnowledgeAreaSerializer, TeacherSerializer, TutoringHourSerializer


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

    def get_queryset(self):
        id = self.request.query_params.get('id')
        if id is not None:
            queryset = Teacher.objects.filter(id=id)
            return queryset
        else:
            return Teacher.objects.all()


class KnowledgeAreaViewSet(viewsets.ModelViewSet):
    queryset = KnowledgeArea.objects.all()
    serializer_class = KnowledgeAreaSerializer


class TutoringHourViewSet(viewsets.ModelViewSet):
    queryset = tutoringHour.objects.all()
    serializer_class = TutoringHourSerializer
