from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
import json


class Create(APIView):
    def post(self, request):
        body = json.loads(request.body)
        serializer = UserSerializer(data={**body})
        if serializer.is_valid(raise_exception=True):
            res = serializer.create(serializer.validated_data)
            return Response(res)

class Login(APIView):
    def get(self, request):
        body = json.loads(request.body)
        serializer = UserSerializer(data={**body})
        res = serializer.validate_login(serializer.initial_data)
        return Response(res)

class Root(APIView):
    def get(self, request):
        return Response({'success': True, 'user': request.user})
