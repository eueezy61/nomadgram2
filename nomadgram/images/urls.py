from django.urls import path, re_path
from . import views


app_name = "images"
urlpatterns = [
    path(
        "", 
        view=views.Feed.as_view(), 
        name="feed"
    ),
    re_path(
        r'(?P<image_id>[0-9]+)/like/$', 
        view=views.LikeImage.as_view(),
        name='like_image'
    ),
    re_path(
        r'(?P<image_id>[0-9]+)/unlike/$', 
        view=views.UnLikeImage.as_view(),
        name='like_image'
    ),
    re_path(
        r'(?P<image_id>[0-9]+)/comments/$', 
        view=views.CommentOnImage.as_view(),
        name='comment_image'
    ),
    re_path(
        r'comments/(?P<comment_id>[0-9]+)/$', 
        view=views.Comment.as_view(),
        name='comment'
    ),
    re_path(
        r'search/$', 
        view=views.Search.as_view(),
        name='search'
    ),
]
