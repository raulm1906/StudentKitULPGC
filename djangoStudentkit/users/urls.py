from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from .views import UserList, UserDetail


urlpatterns = [
    #path('', include(router.urls)),
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
]

