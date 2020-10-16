from django.urls import path, include
from . import views

urlpatterns = [
    path('profile', views.Profile.as_view()),
    path('create', views.Create.as_view()),
    path('login', views.Login.as_view()),
]
