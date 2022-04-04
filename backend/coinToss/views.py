from django.shortcuts import render
from rest_framework import viewsets
from coinToss.models import coinToss
from coinToss.serializers import coinTossSerializer


class coinTossViewSet(viewsets.ModelViewSet):

    serializer_class = coinTossSerializer
    queryset = coinToss.objects.all()

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)
