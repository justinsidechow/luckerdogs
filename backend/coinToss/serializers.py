from rest_framework import serializers
from coinToss.models import coinToss


class coinTossSerializer(serializers.ModelSerializer):

    class Meta:
        model = coinToss
        read_only_fields = (
            "id",
            "created_at",
            "created_by",
        )
        fields = (
            "id",
            "created_at",
            "created_by",
            "heads",
            "tails",
            "trueHeads",
            "trueTails",
        )
