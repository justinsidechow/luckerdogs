from django.contrib import admin
from .models import CoinToss

# Register your models here.

class CoinTossAdmin(admin.ModelAdmin):
    search_fields = ('user', 'heads_lucky', 'tails_lucky')
    list_filter = ('user', 'heads_lucky', 'heads_unlucky',
                   'tails_lucky', 'tails_unlucky')
    list_display = ('user', 'heads_lucky', 'heads_unlucky',
                    'tails_lucky', 'tails_unlucky')


admin.site.register(CoinToss, CoinTossAdmin)
