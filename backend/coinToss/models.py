from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class coinToss(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    # heads/tails stands for how many times they got that coin toss
    heads = models.PositiveIntegerField(default=0)
    tails = models.PositiveIntegerField(default=0)
    # trueHeads/trueTails stands for how many times they got that coin toss
    # right when they guessed, can calculate "total" luck factor with this
    trueHeads = models.PositiveIntegerField(default=0)
    trueTails = models.PositiveIntegerField(default=0)
