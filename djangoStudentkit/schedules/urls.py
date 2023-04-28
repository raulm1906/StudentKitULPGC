from django.db import router
from django.urls import include, path
from django.contrib import admin
from rest_framework import routers

from .views import EventViewSet, ScheduleViewSet


router = routers.DefaultRouter()
router.register(r'schedule', ScheduleViewSet, basename="schedules")
router.register(r'event', EventViewSet, basename="events")

urlpatterns = [
    path('', include(router.urls)),
]

