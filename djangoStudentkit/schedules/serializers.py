from rest_framework import serializers

from .models import Schedule, Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'subject_code', 'title', 'start_time', 'end_time', 'days_of_week', 'schedule']

class ScheduleSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True, read_only=True)
    class Meta:
        model = Schedule
        fields = ['userId', 'id', 'title', 'events']