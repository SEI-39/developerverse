from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)

    # By default, the unique identifier of each user
    # is the username, this sets it to email instead
    USERNAME_FIELD = 'email'

    # This takes away the default required fields,
    # Now the only required fields are the unique identifier (email)
    # and password
    REQUIRED_FIELDS = []
