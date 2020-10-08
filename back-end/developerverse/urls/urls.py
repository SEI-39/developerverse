from django.urls import path
from django.conf.urls import include
from . import users

urlpatterns = [
    path('users/', include(users))
]
