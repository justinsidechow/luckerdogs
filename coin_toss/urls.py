from os import name
from django.urls import path, include
from rest_framework import routers
from .views import CoinTossView, CoinTossViewDetail

app_name = 'coin_toss_url'

router = routers.DefaultRouter()
#router.register(r'db_model', views.DBModelView, 'db_model')
#router.register(r'User', views.UserView, 'User')
#router.register(r'CoinToss', views.CoinTossView, basename='CoinToss')

urlpatterns = [
    path('', CoinTossView.as_view(), name='CoinToss'),
    path('<int:pk>/', CoinTossViewDetail.as_view(),
         name='CoinTossDetailCreate'),
    #path('api/', include(router.urls)),
]
