from os import name
from django.urls import path, include
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from .views import CoinTossList, CoinTossDetail, CoinTossListDetailfilter, CreateCoinToss, AdminCoinTossDetail, EditCoinToss, DeleteCoinToss

app_name = 'coin_toss_url'

router = DefaultRouter()
router.register('', CoinTossList, basename='user')
#urlpatterns = router.urls

urlpatterns = [
    #path('<str:pk>/', CoinTossDetail.as_view(), name='coin_toss_detail'),
    path('search/', CoinTossListDetailfilter.as_view(), name='coin_toss_search'),
    path('admin/create/', CreateCoinToss.as_view(), name='create_coin_toss'),
    path('admin/edit/coin-toss-detail/<int:pk>/', AdminCoinTossDetail.as_view(), name='admin_coin_toss_detail'),
    path('admin/edit/<int:pk>/', EditCoinToss.as_view(), name='edit_coin_toss'),
    path('admin/delete/<int:pk>/', DeleteCoinToss.as_view(), name='delete_coin_toss'),
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
