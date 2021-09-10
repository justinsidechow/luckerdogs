from rest_framework import serializers
from .models import DBModel, User, CoinToss

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_name', 'email')
        
class CoinTossSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoinToss
        fields = ('user', 'heads_lucky', 'heads_unlucky', 'tails_lucky', 'tails_unlucky')        

class DBModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = DBModel
        fields = ('id', 'title', 'description', 'completed')