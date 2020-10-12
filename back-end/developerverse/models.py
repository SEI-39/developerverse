from django.conf import settings
from django.db import models

# Create your models here.

class Project(models.Model):

    # We cannot directly use 
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    name = models.CharField(
        max_length=140
    )
    repo_url = models.URLField(
        max_length=480, blank=True
    ) # allow for longer URLs
    project_url = models.URLField(
        max_length=480, 
        blank=True
    )
    desc = models.TextField(
        max_length=500, 
        blank=True
    ) # User can use about 80 words for description

    def __str__(self):
        return self.name