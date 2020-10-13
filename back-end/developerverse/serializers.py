from rest_framework import serializers
from .models import Project, Website
from django.contrib.auth import get_user_model

User = get_user_model() #indicates that we are using our custom User model

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ['id', 'user', 'name', 'repo_url', 'project_url', 'desc']

class WebsiteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Website
        fields = ['id', 'user', 'web_name', 'web_url']