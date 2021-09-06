from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import UserCreationForm, UserChangeForm
from .models import NewUser, DBModel, CoinToss
from django.forms import TextInput, Textarea

# Register your models here.

class UserAdminConfig(UserAdmin):
    model = NewUser
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
        NewUser.about: {'widget': Textarea(attrs={'rows': 10, 'cols': 40})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )
    

class DBModelAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')
    
class CoinTossAdmin(admin.ModelAdmin):
    list_display = ('heads', 'tails')

admin.site.register(NewUser, UserAdminConfig)
admin.site.register(CoinToss, CoinTossAdmin)
