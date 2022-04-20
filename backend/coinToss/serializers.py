from rest_framework import serializers
from coinToss.models import coinToss


class coinTossSerializer(serializers.ModelSerializer):

    class Meta:
        model = coinToss
        read_only_fields = (
            "id",
            "created_at",
            "created_by",
            "trueHeads",
            "trueTails",
            "falseHeads",
            "falseTails",
        )
        fields = (
            "id",
            "created_at",
            "created_by",
            "coinTossChoice",
            "trueHeads",
            "trueTails",
            "falseHeads",
            "falseTails",
        )
