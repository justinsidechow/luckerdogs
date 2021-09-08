from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializers import DBModelSerializer
from .models import DBModel

# Create your views here.

class DBModelView(viewsets.ModelViewSet):
    serializer_class = DBModelSerializer
    queryset = DBModel.objects.all()