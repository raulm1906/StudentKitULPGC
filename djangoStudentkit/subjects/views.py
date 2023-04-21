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
