from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path('create', views.create_user),
    path('auth', include('rest_framework.urls', namespace='rest_framwork'))
]
