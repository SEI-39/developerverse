from rest_framework import serializers
from .models import Project, Website, Comment
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
        return {
            "name": project.name,
            "project_id": project.id,
            "user": project.user.id
        }

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ['body', 'project', 'author']

    def create(self, validated_data):
        comment = Comment.objects.create(**validated_data)
        comment.save()
        return {
            "body": comment.body,
            "project": comment.project.id,
            "author": comment.author.id,
            "timestamp_created": comment.timestamp_created
        }
