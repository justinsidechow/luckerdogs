from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.forms import Textarea

from .models import User

class UserAdminConfig(UserAdmin):
    model = User
    search_fields = ('email', 'user_name')
    list_filter = ('email', 'user_name', 'start_date', 'is_active', 'is_staff')
    ordering = ('-start_date',)
    list_display = ('id', 'email', 'user_name', 'start_date',
                    'is_active')

    fieldsets = (
        (None, {'fields': ('email', 'user_name', 'password', 'start_date')}),
        ('Permissions', {'fields': ('is_staff',
         'is_active', 'user_permissions', 'groups')}),
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

admin.site.register(User, UserAdminConfig)