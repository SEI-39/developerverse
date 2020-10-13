from django.conf import settings
from django.db import models

class Project(models.Model):

    # Django's documentation advises against referencing the User model directly,
    # see following documentation for more information: 
    # https://docs.djangoproject.com/en/3.1/topics/auth/customizing/#referencing-the-user-model
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,)
    name = models.CharField(max_length=140)
    repo_url = models.URLField(max_length=480, blank=True) # allow for longer URLs
    project_url = models.URLField(max_length=480, blank=True)
    desc = models.TextField(max_length=3000, blank=True)

    def __str__(self):
        return self.name
 
class Website(models.Model):
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,)
    web_name = models.CharField(max_length=140)
    web_url = models.URLField(max_length=480, blank=True)

    def __str__(self):
        return self.web_name