from rest_framework import serializers
from .models import Project, Website
from django.contrib.auth import get_user_model

User = get_user_model() #indicates that we are using our custom User model

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ['id', 'user', 'name', 'repo_url', 'project_url', 'desc']

    def get_queryset(self):
        user = self.context['request'].user
        queryset = super(ProjectCreate, self).get_queryset()
        if not request or not queryset:
                return None
        return queryset.filter(user=user)
