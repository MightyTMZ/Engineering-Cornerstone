from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import RetrieveAPIView
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


class ArticleDetail(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_object(self):
        created_at_date = self.kwargs['created_at_date']
        slug = self.kwargs['slug']

        # Use __date to compare the date part only
        return get_object_or_404(Article, created_at__date=created_at_date, slug=slug)


class TrendingArticles(generics.ListCreateAPIView):
    queryset = Article.objects.filter(trending=True) # [:3] 
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ArticleSerializer


class TrendingArticlesLatest(generics.ListCreateAPIView):
    queryset = Article.objects.filter(trending=True)[:3] 
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ArticleSerializer



