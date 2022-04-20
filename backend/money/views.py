from django.shortcuts import render
from rest_framework import viewsets
from money.models import money
from money.serializers import moneySerializer


class moneyViewSet(viewsets.ModelViewSet):

    serializer_class = moneySerializer
    queryset = money.objects.all()

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)
