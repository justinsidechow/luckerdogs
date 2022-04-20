from rest_framework import viewsets
from coinToss.models import coinToss
from coinToss.serializers import coinTossSerializer
from requests import request
from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework import status


class coinTossViewSet(viewsets.ModelViewSet):

    serializer_class = coinTossSerializer
    queryset = coinToss.objects.all()

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)
