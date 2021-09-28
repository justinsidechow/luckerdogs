from rest_framework import serializers
from .models import User, CoinToss


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_name', 'email')


class CoinTossSerializer(serializers.ModelSerializer):

    user_name = serializers.CharField(source='user.user_name', read_only=True)

    class Meta:
        model = CoinToss
        fields = ('user', 'user_name', 'heads_lucky', 'heads_unlucky',
                  'tails_lucky', 'tails_unlucky')
