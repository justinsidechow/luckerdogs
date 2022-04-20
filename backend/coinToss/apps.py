from django.apps import AppConfig


class CoinTossConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'coinToss'

    def ready(self):
        import coinToss.singals
