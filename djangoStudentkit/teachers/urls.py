from django.urls import path, include
from rest_framework import routers
from .views import TeacherViewSet, KnowledgeAreaViewSet



router = routers.DefaultRouter()
router.register(r'teachers', TeacherViewSet)
router.register(r'knowledgeArea', KnowledgeAreaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]