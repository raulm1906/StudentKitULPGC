from rest_framework import serializers
from .models import Lesson, Subject, Degree, SubjectTeacher
from teachers.serializers import TeacherSerializer

class DegreeSerializer(serializers.ModelSerializer):
    # degree = serializers.StringRelatedField()
    class Meta:
        model = Degree
        fields = ['degree']


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['id', 'classroom', 'group', 'day',
                  'start_time', 'ending_time', 'week', 'subject']


class SubjectTeacherSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer()

    class Meta:
        model = SubjectTeacher
        fields = ['subject', 'teacher', 'group']


class SubjectSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(many=True, read_only=True)
    teachers_in_subject = SubjectTeacherSerializer(many=True, read_only=True)

    class Meta:
        model = Subject
        fields = ['code', 'name', 'department', 'degree', 'credits',
                  'year', 'coordinator', 'linkpd', 'subject_type', 'semester', 'lessons', 'teachers_in_subject']