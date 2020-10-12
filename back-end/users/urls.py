from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path('create', views.Create.as_view()),
    path('login', views.Login.as_view())
]
