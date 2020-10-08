from django.shortcuts import render
from ..models import User

def create_user(request):
    return HttpResponse("This is the create user page")
