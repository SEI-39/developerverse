from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model, authenticate
from .serializers import UserSerializer
import json, os

User = get_user_model()

class Root(APIView):

    queryset = User.objects.none()

    def get(self, request):
        return Response({'success': True, 'user': request.user})

class Create(APIView):
    # This opens the view up, so anyone can make an account
    permission_classes = [AllowAny]
    queryset = User.objects.none()

    def post(self, request):
        body = json.loads(request.body)
        serializer = UserSerializer(data={**body})
        if serializer.is_valid(raise_exception=True):
            res = serializer.create(serializer.validated_data)
            return Response(res)

class Login(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        body = json.loads(request.body)
        serializer = UserSerializer(data={**body})
        res = serializer.validate_login(serializer.initial_data)
        return Response(res)

    queryset = User.objects.none()
