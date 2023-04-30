from rest_framework import serializers

from .models import Schedule, Event

class EventSerializer(serializers.ModelSerializer):
    daysOfWeek = serializers.SerializerMethodField(read_only=False)

    class Meta:
        model = Event
        fields = ['id', 'subject_code', 'title', 'startRecur', 'endRecur', 'rrule', 'startTime', 'endTime', 'daysOfWeek']

    def get_daysOfWeek(self, obj):
        return [obj.daysOfWeek]

class ScheduleSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True, read_only=True)
    class Meta:
        model = Schedule
        fields = ['userId', 'id', 'title', 'events']