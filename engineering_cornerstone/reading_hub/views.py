from django.shortcuts import render
from rest_framework import generics
from django.shortcuts import get_object_or_404
from django.views.generic import DetailView
from .models import Article
from datetime import datetime
from .serializers import ArticleSerializer
from .permissions import *

class ArticleList(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ArticleSerializer


class ArticleDetail(DetailView):
    model = Article

    def get_object(self, queryset=None):
        # Retrieve the article based on the created_date and title_slug
        created_date = self.kwargs['created_date']
        title_slug = self.kwargs['title_slug']

        # Convert created_date to the format "yyyy-mm-dd"
        formatted_date = datetime.strptime(created_date, '%Y%m%d').strftime('%Y-%m-%d')

        return get_object_or_404(Article, created_at__startswith=formatted_date, slug=title_slug)


class TrendingArticles(generics.ListCreateAPIView):
    queryset = Article.objects.filter(trending=True) # [:3] 
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ArticleSerializer
