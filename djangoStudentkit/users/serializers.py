from .models import User
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
import smtplib
from email.message import EmailMessage
from django.urls import reverse
from django.conf import settings
import uuid

User = get_user_model()

def enviar_correo_confirmacion(usuario_email, activation_token):
    user = User.objects.get(email=usuario_email)
    activation_link = f'{settings.ACTIVATION_URL}/{activation_token}'
    msg = EmailMessage()
    msg['Subject'] = 'Confirmacion de registro'
    msg['From'] = 'ulpgcstudentkit@outlook.es'
    msg['To'] = usuario_email
    msg.set_content(f'Hola {user.get_username()},\nPor favor, haga clic en el siguiente enlace para activar su cuenta:\n{activation_link}\nGracias por registrarse en nuestro sitio web.')

    with smtplib.SMTP('smtp.office365.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login(settings.EMAIL_HOST_USER, settings.EMAIL_HOST_PASSWORD)
        smtp.send_message(msg)

class UserSerializer(serializers.ModelSerializer):

    activation_token = serializers.UUIDField(read_only=True)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password', 'date_joined', 'activation_token', 'is_staff', 'is_active']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        password = validated_data.pop('password')
        activation_token = uuid.uuid4()
        user.activation_token = activation_token
        user.save()
        enviar_correo_confirmacion(validated_data['email'], str(activation_token))
        return user
    
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)
        if 'password' in validated_data:
            user.set_password(password)
            user.save()
        return user  
    
    
class LoginSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['email', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
