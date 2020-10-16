from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Project, Website, Comment
from .serializers import ProjectSerializer, CommentSerializer
from .permissions import IsCreatorOrReadOnly
import json

User = get_user_model()

class ProjectList(generics.ListAPIView):
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
    permission_classes = [IsCreatorOrReadOnly]

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

class CommentList(generics.ListAPIView):
    queryset = Comment.objects.all()

    def get(self, request, pk):
        comments = Comment.objects.filter(id=pk)
        return Response(comments)

class CommentCreate(generics.GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def post(self, request, pk):
        body = json.loads(request.body)
        serializer = CommentSerializer(data={**body})
        if serializer.is_valid(raise_exception=True):
            res = serializer.create(serializer.validated_data)
            return Response(res)

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    permission_classes = [IsCreatorOrReadOnly]
