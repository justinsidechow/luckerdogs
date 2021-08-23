from django.contrib import admin
from .models import db_model

# Register your models here.

class db_model_Admin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(db_model, db_model_Admin)
