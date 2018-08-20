from django.urls import path, re_path
from . import views


app_name = "notifications"
urlpatterns = [
    path(
        "", 
        view=views.Notifications.as_view(), 
        name="notifications"
    ),
]
