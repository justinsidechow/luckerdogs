from rest_framework import serializers
from .models import DBModel

class DBModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = DBModel
        fields = ('id', 'title', 'description', 'completed')