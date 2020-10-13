from rest_framework import serializers
from .models import Project, Website
from django.contrib.auth import get_user_model

User = get_user_model() #indicates that we are using our custom User model

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('id', 'user_id', 'name', 'repo_url', 'project_url', 'desc')

