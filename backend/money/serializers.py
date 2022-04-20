from rest_framework import serializers
from money.models import money


class moneySerializer(serializers.ModelSerializer):

    class Meta:
        model = money
        read_only_fields = (
            "id",
            "created_at",
            "money",
        )
