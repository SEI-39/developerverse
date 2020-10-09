from django.shortcuts import render
from django.conf import settings

def create_user(request):
    return HttpResponse("This is the create user page")
