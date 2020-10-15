from rest_framework import serializers
from .models import Project, Website
from django.contrib.auth import get_user_model

User = get_user_model() #indicates that we are using our custom User model

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ['id', 'user', 'name', 'repo_url', 'project_url', 'desc']

    def create(self, validated_data):
        project = Project.objects.create(**validated_data)
        project.save()
        return {
            "name": project.name,
            "project_id": project.id,
            "user": project.user.id
        }
