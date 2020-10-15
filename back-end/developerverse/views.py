from rest_framework import generics
from rest_framework import permissions
from .models import Project, Website
from .serializers import ProjectSerializer
from django.contrib.auth import get_user_model
from guardian.shortcuts import assign_perm
from rest_framework.views import APIView
from rest_framework.response import Response
import json

User = get_user_model()

class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    # Even none Users are able to view a list of all the projects
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    # Only Users that are authenticated and have the the requisite permissions
    # defined in Django's standrard model permissions will be able to edit the
    # entry
    permission_classes = (permissions.DjangoModelPermissions, )

class ProjectCreate(generics.GenericAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        qs = Project.objects.filter(user_id=self.request.user)
        return qs

    def post(self, request):
        body = json.loads(request.body)
        serializer = ProjectSerializer(data={**body})
        if serializer.is_valid(raise_exception=True):
            res = serializer.create(serializer.validated_data)
            return Response(res)
