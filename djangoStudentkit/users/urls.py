from django.urls import path, include
from django.contrib import admin
from .views import UserList, UserDetail, ActivateAccountView
from rest_framework.authtoken.views import obtain_auth_token  
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView




urlpatterns = [
    path('', UserList.as_view(), name='user-list'),
    path('<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('login/', TokenObtainPairView.as_view(), name='api_jwt_token_auth'),  
    path('token_refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('activate/<str:activation_token>/', ActivateAccountView.as_view(), name='activate')

]
 
