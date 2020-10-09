from django.shortcuts import render
from django.conf.settings import AUTH_USER_MODEL as User

def create_user(request):
    return HttpResponse("This is the create user page")
