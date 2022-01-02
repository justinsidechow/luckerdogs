from django.urls import path, include

from . import views

urlpatterns = [
    path("csrf/", views.get_csrf, name="api-csrf"),
    path("login/", views.login_view, name="api-login"),
    path("logout/", views.logout_view, name="api-logout"),
    path("session/", views.SessionView.as_view(), name="api-session"),
    path("whoami/", views.WhoAmIView.as_view(), name="api-whoami"),
    path("coin-toss/", include("coin_toss.urls", namespace="coin_toss")),
    path("user/", include("users.urls", namespace="users")),
]
