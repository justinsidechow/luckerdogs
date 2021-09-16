from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import UserCreationForm, UserChangeForm
from .models import User, CoinToss
from django.forms import TextInput, Textarea

# Register your models here.

class UserAdminConfig(UserAdmin):
    model = User
    search_fields = ('email', 'user_name')
    list_filter = ('email', 'user_name', 'start_date', 'is_active', 'is_staff')
    ordering = ('-start_date',)
    list_display = ('email', 'user_name', 'start_date',
                    'is_active')
    
    fieldsets = (
        (None, {'fields': ('email', 'user_name', 'password', 'start_date')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal', {'fields': ('about',)}),
    )
    formfield_overrides = {
        User.about: {'widget': Textarea(attrs={'rows': 10, 'cols': 40})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )
    
class CoinTossAdmin(admin.ModelAdmin):
    search_fields = ('user', 'heads_lucky', 'tails_lucky')
    list_filter = ('user', 'heads_lucky', 'heads_unlucky', 'tails_lucky', 'tails_unlucky')
    list_display = ('user', 'heads_lucky', 'heads_unlucky', 'tails_lucky', 'tails_unlucky')

admin.site.register(User, UserAdminConfig)
admin.site.register(CoinToss, CoinTossAdmin)
