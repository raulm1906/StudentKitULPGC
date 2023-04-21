from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DegreeSerializer, SubjectSerializer
from .models import Degree, Subject


# Create your views here.

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class DegreeViewSet(viewsets.ModelViewSet):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer