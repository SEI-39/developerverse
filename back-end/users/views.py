from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        return HttpResponse("This is the create user page")
