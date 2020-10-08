from django.urls import path
from django.conf.urls import include


urlpatterns = [
    path('/users', include(urls.users))
]
