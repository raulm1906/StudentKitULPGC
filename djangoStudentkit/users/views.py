import jwt
from .models import User
from .serializers import UserSerializer
from rest_framework import generics
from django.shortcuts import redirect
from django.urls import reverse
from django.views.generic.base import View
from rest_framework.response import Response
from django.http import HttpResponse
from django.contrib.auth import get_user_model, authenticate
from rest_framework.authtoken.views import obtain_auth_token, APIView  
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from django.conf import settings

  

User = get_user_model()

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    #authentication_classes = [IsAuthenticated]
    #permission_classes = [IsAuthenticated]

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
class CustomLoginView(APIView):
    def post(self, request):
        email = request.data.get('username')
        password = request.data.get('password')

        # Realiza la autenticación del usuario (ejemplo: usando Django's authenticate)
        user = authenticate(request, email=email, password=password)

        if user is not None:
            token = jwt.encode({'user_id': user.id}, settings.SECRET_KEY, algorithm='HS256')
            Token.objects.get_or_create(user=user)

            return Response({'token': token, 'user': user.id})

        return Response({'error': 'Credenciales inválidas'}, status=400)
'''
