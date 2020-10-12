from django.conf import settings
from django.db import models

class Website(models.Model):
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,)
    web_name = models.CharField(max_length=140)
    web_url = models.URLField(max_length=480, blank=True)

    def __str__(self):
        return self.web_name