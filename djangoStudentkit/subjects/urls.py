from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from .views import SubjectViewSet, DegreeViewSet
#from .views import SubjectViewSet, DegreeViewSet

router = routers.DefaultRouter()
router.register(r'asignaturas/', SubjectViewSet, basename="asignaturas")
router.register(r'degree/', DegreeViewSet, basename="degree")



urlpatterns = [
    path('', include(router.urls)),

]

