from rest_framework import serializers
from .models import luckerdogsFront

class luckerdogsFrontSerializer(serializers.ModelSerializer):
    class Meta:
        model = luckerdogsFront
        fields = ('id', 'title', 'description', 'completed')