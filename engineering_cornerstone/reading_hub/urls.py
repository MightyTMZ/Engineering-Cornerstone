from django.urls import path
from . import views

urlpatterns = [
    path('articles/all/', views.ArticleList.as_view()),
    path('articles/<str:created_at_date>/<slug:slug>/', views.ArticleDetail.as_view(), name='article-detail'),
    path('articles/trending/', views.TrendingArticles.as_view()),
    path('customers/all/', views.CustomerViewSet.as_view({'get': 'list'}), name='customer-list'),
    path('customers/<int:pk>/', views.CustomerViewSet.as_view({'get': 'retrieve'}), name='customer-detail'),
    path('customers/me/', views.CustomerViewSet.as_view({'get': 'me'}), name='customer-me'),
]
