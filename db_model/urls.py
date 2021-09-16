from os import name
from django.urls import path, include
from rest_framework import routers
from .views import CoinTossView, UserView

app_name = 'db_model_url'

router = routers.DefaultRouter()
#router.register(r'db_model', views.DBModelView, 'db_model')
#router.register(r'User', views.UserView, 'User')
#router.register(r'CoinToss', views.CoinTossView, basename='CoinToss')

urlpatterns = [
    path('cointoss', CoinTossView.as_view(), name='CoinToss'),
    path('user', UserView.as_view(), name='User')
    #path('api/', include(router.urls)),
]