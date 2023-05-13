from .models import User
from .serializers import UserSerializer
from rest_framework import generics
from django.shortcuts import redirect
from django.urls import reverse
from django.views.generic.base import View
from rest_framework.response import Response
from django.http import HttpResponse
from django.contrib.auth import get_user_model


User = get_user_model()

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

'''
Hay que solucionar que la url de la vista no es captada con el token
'''
class ActivateAccountView(View):
    def get(self, request, *args, **kwargs):
            try:
                #user = User.objects.get(activation_token=kwargs['token'])
                user = User.objects.get(activation_token=kwargs['activation_token'])
            except User.DoesNotExist:
                #return Response({'message': 'Invalid activation token.'}, status=400)
                return HttpResponse('Invalid activation token.', status=400)
            user.is_active = True
            user.activation_token = ''
            user.save()
            return redirect(reverse('login'))


