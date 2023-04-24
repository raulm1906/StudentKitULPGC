from django.db import router
from django.urls import include, path
from django.contrib import admin
from rest_framework import routers

from .views import ScheduleViewSet


router = routers.DefaultRouter()
router.register(r'schedule', ScheduleViewSet, basename="schedules")

urlpatterns = [
    path('', include(router.urls)),
]

