from django.shortcuts import render
from rest_framework import viewsets
from .serializers import luckerdogsFrontSerializer
from .models import luckerdogsFront

# Create your views here.

class luckerdogsView(viewsets.ModelViewSet):
    serializer_class = luckerdogsFrontSerializer
    queryset = luckerdogsFront.objects.all()