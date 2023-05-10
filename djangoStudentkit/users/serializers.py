from .models import User
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
import smtplib
from email.message import EmailMessage

User = get_user_model()

def enviar_correo_confirmacion(usuario_email):
    msg = EmailMessage()
    msg['Subject'] = 'Confirmacion de registro'
    msg['From'] = 'ulpgcstudentkit@outlook.es'
    msg['To'] = usuario_email
    msg.set_content('Gracias por registrarte en nuestro sitio web.')

    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login('ulpgcstudentkit@outlook.es', 'KANAK45.9')
        smtp.send_message(msg)

class UserSerializer(serializers.ModelSerializer):


    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password', 'date_joined']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        password = validated_data.pop('password')
        enviar_correo_confirmacion(validated_data['email'])
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
