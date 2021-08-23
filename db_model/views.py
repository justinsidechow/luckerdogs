from django.shortcuts import render
from rest_framework import viewsets
from .serializers import db_model_serializer
from .models import db_model

# Create your views here.

class db_model_view(viewsets.ModelViewSet):
    serializer_class = db_model_serializer
    queryset = db_model.objects.all()