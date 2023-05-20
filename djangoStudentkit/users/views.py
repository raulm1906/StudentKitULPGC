from .models import User
from .serializers import UserSerializer
from rest_framework import generics
from django.shortcuts import redirect
from django.urls import reverse
from django.views.generic.base import View
from rest_framework.response import Response
from django.http import HttpResponse
from django.contrib.auth import get_user_model
from rest_framework.authtoken.views import obtain_auth_token  
from rest_framework.authtoken.models import Token



User = get_user_model()

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ActivateAccountView(View):
    def get(self, request, *args, **kwargs):
            try:
                user = User.objects.get(activation_token=kwargs['activation_token'])
            except User.DoesNotExist:
                #return Response({'message': 'Invalid activation token.'}, status=400)
                return HttpResponse('Token de confirmación inválido.', status=400)
            if not user.is_active:
                user.is_active = True
                user.activation_token = ''
                user.save()               
                #token = Token.objects.create(user=user)
                #return Response({'token': token.key})
                return redirect('http://localhost:3000/Login')
                #return redirect(reverse(obtain_auth_token))

            else:
                 return HttpResponse('La cuenta ya ha sido confirmada.', status=400)
            '''
            Aquí en vez de redirigir al login se podria redirigir directamnte a la página principal ya el usuario logeado
            o si no, no se si esta bien redirigir al obtain_auth_token porque solo se pueden hacer consultas de tipo post
            
            return redirect(reverse(obtain_auth_token))
            '''


