from django.urls import path
from . import views

urlpatterns = [
    path('articles/all/', views.ArticleList.as_view()),
    path('articles/<int:pk>/', views.ArticleDetail.as_view()),  
    # we may need to change the url pattern above the future when the frontend retrieves it using their available data
    path('articles/trending/', views.TrendingArticles.as_view()),
]