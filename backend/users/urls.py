from os import name
from django.urls import path, include
from rest_framework import routers
from .views import UserView
from .views import CustomUserCreate, BlacklistTokenUpdateView

app_name = "users"

urlpatterns = [
    path("create/", CustomUserCreate.as_view(), name="create_user"),
]
