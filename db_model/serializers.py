from rest_framework import serializers
from .models import db_model

class db_model_serializer(serializers.ModelSerializer):
    class Meta:
        model = db_model
        fields = ('id', 'title', 'description', 'completed')