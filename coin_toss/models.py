from django.db import models
from django.utils.translation import gettext_lazy as _

from users.models import User

# Create your models here.
    
class CoinToss(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_coin_toss")
    heads_lucky = models.PositiveIntegerField(default=0)
    heads_unlucky = models.PositiveIntegerField(default=0)
    tails_lucky = models.PositiveIntegerField(default=0)
    tails_unlucky = models.PositiveIntegerField(default=0)