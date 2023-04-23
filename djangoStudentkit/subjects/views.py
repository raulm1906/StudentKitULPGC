import statistics
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import SubjectSerializer, DegreeSerializer
from .models import Subject, Degree


# Create your views here.

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class DegreeViewSet(viewsets.ModelViewSet):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        degree = serializer.save()
        headers = self.get_success_headers(serializer.data)
        return Response(self.get_serializer(degree).data, status=statistics.HTTP_201_CREATED, headers=headers)
