from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.Root.as_view()),
    path('create', views.Create.as_view()),
    path('login', views.Login.as_view())
]
