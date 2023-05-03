from django.urls import path, include
from django.contrib import admin
from .views import UserList, UserDetail
from rest_framework.authtoken.views import obtain_auth_token  




urlpatterns = [
    path('', UserList.as_view(), name='user-list'),
    path('<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('login/', obtain_auth_token, name='api_token_auth'),  

    
]

