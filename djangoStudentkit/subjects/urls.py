from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from .views import DegreeViewSet, SubjectViewSet

router = routers.DefaultRouter()
router.register(r'subject', SubjectViewSet, basename="asignaturas")
router.register(r'degree', DegreeViewSet, basename='degrees')

urlpatterns = [
    path('', include(router.urls)),

]

