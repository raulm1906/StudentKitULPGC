from django.urls import path, include
from rest_framework import routers
from .views import KnowledgeAreaViewSet, TeacherViewSet, TutoringHourViewSet


router = routers.DefaultRouter()
router.register(r'teacher', TeacherViewSet, basename='teachers')
router.register(r'knowledge_area', KnowledgeAreaViewSet,
                basename='knowledgeArea')
router.register(r'tutoring_hour', TutoringHourViewSet,
                basename='tutoringHours')


urlpatterns = [
    path('', include(router.urls)),
]
