from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from .views import SubjectViewSet

router = routers.DefaultRouter()
router.register(r'asignaturas', SubjectViewSet)

urlpatterns = [
    path('', include(router.urls)),

]

