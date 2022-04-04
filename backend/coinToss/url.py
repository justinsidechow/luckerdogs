from django.urls import path, include
from rest_framework.routers import DefaultRouter
from coinToss.views import coinTossViewSet

router = DefaultRouter()
router.register("cointoss", coinTossViewSet, basename="notes")
coinToss_urlpatterns = [path("api/v1/", include(router.urls))]
