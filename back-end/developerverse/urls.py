from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.ProjectList.as_view(), name='project_list'),
    path('projects/create', views.ProjectCreate.as_view(), name='project_create'),
    path('projects/<int:pk>', views.ProjectDetail.as_view(), name='project_detail'),
]