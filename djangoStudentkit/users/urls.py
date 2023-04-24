from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from .views import UserViewSet

router = routers.DefaultRouter()
router.register(r'usuario', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

