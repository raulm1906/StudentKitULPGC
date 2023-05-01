from rest_framework import serializers

from .models import Schedule, Event

class EventSerializer(serializers.ModelSerializer):
    daysOfWeek = serializers.SerializerMethodField(read_only=False)
    startRecur = serializers.CharField(read_only=True)
    endRecur = serializers.CharField(read_only=True)
    rrule = serializers.JSONField(read_only=True)

    class Meta:
        model = Event
        fields = ['id', 'subject_code', 'title', 'startRecur', 'endRecur', 'rrule', 'startTime', 'endTime', 'daysOfWeek', 'schedule', 'days_of_week']

    def get_daysOfWeek(self, obj):
        return [obj.days_of_week]

class ScheduleSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True, read_only=True)
    class Meta:
        model = Schedule
        fields = ['userId', 'id', 'title', 'events']