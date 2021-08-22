from django.contrib import admin
from .models import luckerdogsFront

# Register your models here.

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(luckerdogsFront, TodoAdmin)
