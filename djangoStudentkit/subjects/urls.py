from django.urls import path, include
from django.contrib import admin
from rest_framework import routers

from .views import DegreeViewSet, LessonViewSet, SubjectTeacherViewSet, SubjectViewSet

router = routers.DefaultRouter()
router.register(r'subject', SubjectViewSet, basename="subjects")
router.register(r'degree', DegreeViewSet, basename='degrees')
router.register(r'lesson', LessonViewSet, basename='lessons')
router.register(r'subject_teacher', SubjectTeacherViewSet,
                basename='subject_teachers')
urlpatterns = [
    path('', include(router.urls)),

]
