from django.urls import path
from django.views.decorators.cache import cache_page
from . import views

urlpatterns = [
    path("all/", cache_page(60 * 15)(views.TagList.as_view()), name="tag_list"),
]