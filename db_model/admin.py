from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CreateUserCreationForm, CreateUserChangeForm
from .models import CustomUser, DBModel, CoinToss

# Register your models here.

class CustomUserAdmin(UserAdmin):
    add_form = CreateUserCreationForm
    form = CreateUserChangeForm
    model = CustomUser
    list_display = ['email', 'username',]

class DBModelAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')
    
class CoinTossAdmin(admin.ModelAdmin):
    list_display = ('heads', 'tails')

# Register your models here.

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(CoinToss, CoinTossAdmin)
