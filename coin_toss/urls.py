from os import name
from django.urls import path, include
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from .views import CoinTossList, CoinTossListDetailfilter

app_name = 'coin_toss_url'

router = DefaultRouter()
router.register('', CoinTossList, basename='user')
#urlpatterns = router.urls

urlpatterns = [
    path('search/', CoinTossListDetailfilter.as_view(), name='coin_toss_search'),
]

urlpatterns += router.urls


# urlpatterns = [
#     path('', CoinTossView.as_view(), name='CoinToss'),
#     path('<int:pk>/', CoinTossViewDetail.as_view(),
#          name='CoinTossDetailCreate'),
#     #path('api/', include(router.urls)),
# ]

# router = routers.DefaultRouter()#
#router.register(r'db_model', views.DBModelView, 'db_model')
#router.register(r'User', views.UserView, 'User')
#router.register(r'CoinToss', views.CoinTossView, basename='CoinToss')

# urlpatterns = [
#     path('', CoinTossView.as_view(), name='CoinToss'),
#     path('<int:pk>/', CoinTossViewDetail.as_view(),
#          name='CoinTossDetailCreate'),
#     #path('api/', include(router.urls)),
# ]
