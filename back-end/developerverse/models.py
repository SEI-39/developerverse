from django.db import models
from users.models import User


# Create your models here.

class Project(models.Model):

    name = models.CharField(max_length=140)
    repo_url = models.URLField(max_length=480)
    project_url = models.URLField(max_length=480)
    desc = models.TextField(max_length=500)

    def __str__(self):
        return self.name