from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed
from .models import ExpiringToken


class ExpiringTokenAuthentication(TokenAuthentication):
    def authenticate_credentials(self, key):
        try:
            token = ExpiringToken.objects.get(key=key)
        except ExpiringToken.DoesNotExist:
            raise AuthenticationFailed('Token inválido')

        if token.is_expired:
            raise AuthenticationFailed('Token expirado')

        return (token.user, token)
