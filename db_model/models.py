from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    pass

    def __str__(self):
        return self.username

class DBModel(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
    
class CoinToss(models.Model):
    #user = models.ForeignKey(User, on_delete=models.CASCADE)
    heads = models.PositiveIntegerField(default=0)
    tails = models.PositiveIntegerField(default=0)
    
    def _str_(self):
        return self.heads