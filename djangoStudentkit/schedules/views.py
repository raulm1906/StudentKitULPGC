from django.shortcuts import render
from rest_framework import viewsets

from .models import Schedule, Event
from .serializers import EventSerializer, ScheduleSerializer

# Create your views here.

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer

    def get_queryset(self):
        id = self.request.query_params.get('id')
        if id is not None:
            queryset = Schedule.objects.filter(id=id)
            return queryset
        else:
            return Schedule.objects.all()

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_queryset(self):
        id = self.request.query_params.get('id')
        if id is not None:
            queryset = Schedule.objects.filter(id=id)
            return queryset
        else:
            return Schedule.objects.all()