from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model, authenticate
from django.forms.models import model_to_dict
from rest_framework import status
from .serializers import UserSerializer
import json

User = get_user_model()

class Create(APIView):
    def post(self, request):
        body = json.loads(request.body)
        serializer = UserSerializer(data={**body})
        if serializer.is_valid():
            user = serializer.create(serializer.validated_data)
            token = Token.objects.create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.pk,
                'email': user.email
            })
        else:
            return Response(serializer.errors)

class Login(APIView):
    def get(self, request):
        body = json.loads(request.body)
        serializer = UserSerializer(data={**body})
        if user is not None:
            user = authenticate(**body)
            token = Token.objects.get(user=user)
            return Response({
                'token': token.key,
                'user_id': user.pk,
                'email': user.email
            })
        else:
            return Response(None, status=status.HTTP_401_UNAUTHORIZED)
