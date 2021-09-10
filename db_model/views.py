from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializers import DBModelSerializer, UserSerializer, CoinTossSerializer
from .models import DBModel, User, CoinToss

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    pass

class CoinTossView(generics.ListAPIView):
    serializer_class = CoinTossSerializer
    queryset = CoinToss.objects.all()
    pass

class DBModelView(viewsets.ModelViewSet):
    serializer_class = DBModelSerializer
    queryset = DBModel.objects.all()
    pass