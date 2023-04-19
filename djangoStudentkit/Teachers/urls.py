from django.urls import path, include
from rest_framework import routers
from .views import KnowledgeAreaViewSet, TeacherViewSet



router = routers.DefaultRouter()
router.register(r'areas', KnowledgeAreaViewSet)
router.register(r'caca', TeacherViewSet)

urlpatterns = [
    path('', include(router.urls)),
]