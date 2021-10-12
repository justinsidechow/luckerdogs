from django.db import models
from django.utils.translation import gettext_lazy as _

from users.models import User

# Create your models here.
    
class CoinToss(models.Model):
    
    class CoinTossObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='heads_lucky')
        
    options = (
        ('user', 'User'),
        ('heads_lucky', 'Heads_unlucky'),
        ('heads_unlucky', 'Heads_unlucky'),
    )
    
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user_coin_toss", unique=True)
    user_name = models.CharField(max_length=150, default="")
    heads_lucky = models.PositiveIntegerField(default=0)
    heads_unlucky = models.PositiveIntegerField(default=0)
    tails_lucky = models.PositiveIntegerField(default=0)
    tails_unlucky = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ('-heads_lucky',)
