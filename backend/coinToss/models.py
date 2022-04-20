from requests import request
from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class coinToss(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    # heads/tails stands for the coin position the user choosed
    coinTossChoice = models.CharField(default="", max_length=10)

    # trueHeads = user guessed heads correctly
    trueHeads = models.PositiveIntegerField(default=0)
    trueTails = models.PositiveIntegerField(default=0)

    # falseHeads = user guessed heads incorrectly
    falseHeads = models.PositiveIntegerField(default=0)
    falseTails = models.PositiveIntegerField(default=0)
