from django.urls import path, include
from rest_framework.routers import DefaultRouter
from money.views import moneyViewSet

router = DefaultRouter()
router.register("money", moneyViewSet, basename="money")
coinToss_urlpatterns = [path("api/v1/", include(router.urls))]
