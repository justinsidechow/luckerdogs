from django.urls import re_path, include

users_urlpatterns = [
    re_path(r'^api/v1/', include('djoser.urls')),
    re_path(r'^api/v1/', include('djoser.urls.authtoken')),
]
