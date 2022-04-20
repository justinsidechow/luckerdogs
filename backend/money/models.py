from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.


class money(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    money = models.IntegerField(default=0)
