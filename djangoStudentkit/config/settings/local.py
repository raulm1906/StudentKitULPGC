from .base import *

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "OPTIONS": {
            "read_default_file": os.path.join(BASE_DIR, 'config/settings/my.cnf'),
        },
    }
}
REST_FRAMEWORK = {
        'DEFAULT_RENDERER_CLASSES': (
            'rest_framework.renderers.JSONRenderer',
        	'rest_framework.renderers.BrowsableAPIRenderer',
        ),
    }
