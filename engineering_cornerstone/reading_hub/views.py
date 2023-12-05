from django.shortcuts import render
from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer
from .permissions import *

class ArticleList(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ArticleSerializer


class ArticleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ArticleSerializer


class TrendingArticles(generics.ListCreateAPIView):
    queryset = Article.objects.filter(trending=True)[:3] # there is only room for 3 trending articles on the landing page 
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ArticleSerializer
