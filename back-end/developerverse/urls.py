from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.ProjectList.as_view(), name='project_list'),
    path('projects/<int:pk>', views.ProjectDetail.as_view(), name='project_detail')
]