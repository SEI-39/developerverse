from django.urls import path

from ..views import users

urlpatterns = [
    path('create', users.create_user)
]
