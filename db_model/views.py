from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializers import UserSerializer, CoinTossSerializer
from .models import User, CoinToss

# Create your views here.

class UserView(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    pass

class CoinTossView(generics.ListCreateAPIView):
    serializer_class = CoinTossSerializer
    queryset = CoinToss.objects.all()
    pass
