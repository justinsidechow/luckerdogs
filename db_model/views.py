from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAdminUser, DjangoModelPermissions, IsAuthenticatedOrReadOnly, IsAuthenticated
from .serializers import UserSerializer, CoinTossSerializer
from .models import User, CoinToss

# Create your views here.


class CoinTossUserWritePermission(BasePermission):
    message = 'Editing posts is restricted to the author only.'

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        print(obj.user, request.user)

        return obj.user == request.user


class UserView(generics.ListCreateAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = UserSerializer
    queryset = User.objects.all()
    pass


class CoinTossView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CoinTossSerializer
    queryset = CoinToss.objects.all()
    pass


class CoinTossViewDetail(generics.RetrieveUpdateDestroyAPIView, CoinTossUserWritePermission):
    permission_classes = [CoinTossUserWritePermission]
    serializer_class = CoinTossSerializer
    queryset = CoinToss.objects.all()
    pass
