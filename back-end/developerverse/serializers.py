from rest_framework import serializers
from .models import Project, Website
from django.contrib.auth import get_user_model
from guardian.shortcuts import assign_perm

User = get_user_model() #indicates that we are using our custom User model

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ['id', 'user', 'name', 'repo_url', 'project_url', 'desc']
    
    def create(self, validated_data):
        project = Project.objects.create(**validated_data)
        project.save()
        user = User.objects.get(pk=validated_data["user"].id)
        assign_perm('developerverse.change_project', user, project)
        assign_perm('developerverse.delete_project', user, project)
        return {
            "name": project.name,
            "project_id": project.id,
            "user": project.user.id
        }