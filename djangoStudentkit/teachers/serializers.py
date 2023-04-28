from rest_framework import serializers

from .models import DAY_OF_WEEK_CHOICES
from .models import KnowledgeArea, Teacher, tutoringHour


class KnowledgeAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnowledgeArea
        fields = ['id', 'knowledge_area']


class TutoringHourSerializer(serializers.ModelSerializer):

    day = serializers.ChoiceField(choices=DAY_OF_WEEK_CHOICES)
    start_time = serializers.TimeField(format='%H:%M')
    ending_time = serializers.TimeField(format='%H:%M')

    class Meta:
        model = tutoringHour
        fields = ['id', 'semester', 'day', 'start_time', 'ending_time', 'teacher']


class TeacherSerializer(serializers.ModelSerializer):
    tutoring_hours = serializers.SerializerMethodField()

    class Meta:
        model = Teacher
        fields = ['id', 'name', 'knowledge_area',
                  'email', 'phone_number', 'office', 'tutoring_hours']
        
    def get_tutoring_hours(self, obj):
        semesters = {
            "1er. semestre": {},
            "2do. semestre": {}
        }
        tutoring_hours = obj.tutoring_hours.all()
        for semester in semesters:
            for day in DAY_OF_WEEK_CHOICES:
                semesters[semester][day[1]] = "---"
            semester_hours = tutoring_hours.filter(semester=semester)
            for hour in semester_hours:
                day_str = dict(DAY_OF_WEEK_CHOICES)[hour.day]
                start_time = hour.start_time.strftime("%H:%M")
                ending_time = hour.ending_time.strftime("%H:%M")
                semesters[semester][day_str] = f'{start_time} - {ending_time}'
           
        return [semesters]    
