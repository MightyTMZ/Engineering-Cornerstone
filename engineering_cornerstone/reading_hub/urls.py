from django.urls import path
from . import views
from .models import Article

urlpatterns = [
    path('articles/all/', views.ArticleList.as_view()),
    path('articles/<str:created_at>/<slug:slug>/', views.ArticleDetail.as_view(), name='article-detail'),
    path('articles/trending/', views.TrendingArticles.as_view()),
]