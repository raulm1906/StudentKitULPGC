from django.shortcuts import render
import statistics
from rest_framework import viewsets
from .models import Teacher, Knowledgearea
from .serializers import TeacherSerializer, KnowledgeAreaSerializer
from rest_framework.response import Response

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    def create(self, request, *args, **kwargs):
       
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        degree = serializer.save()
        print('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') 
        headers = self.get_success_headers(serializer.data)
        return Response(self.get_serializer(degree).data, status=statistics.HTTP_201_CREATED, headers=headers)

class KnowledgeAreaViewSet(viewsets.ModelViewSet):
    queryset = Knowledgearea.objects.all()
    serializer_class = KnowledgeAreaSerializer
