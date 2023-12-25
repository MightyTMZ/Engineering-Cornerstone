from rest_framework.response import Response
from rest_framework import generics, filters, viewsets
from rest_framework.mixins import CreateModelMixin, ListModelMixin, DestroyModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.generics import RetrieveAPIView
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from django.views.generic import DetailView
from .models import *
from datetime import datetime
from .serializers import *
from .permissions import *


class ArticleList(generics.ListCreateAPIView):
    queryset = Article.objects.all().order_by('-created_at')
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ArticleSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'content', 'category__title', 'authors__first_name', 'authors__last_name']


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


class AdminOrAuthenticatedMixin:
    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [permissions.IsAdminUser]
        else:
            permission_classes = [permissions.IsAuthenticated]

        return [permission() for permission in permission_classes]

# Use the mixin in your CustomerViewSet
class CustomerViewSet(
    AdminOrAuthenticatedMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    ListModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
    GenericViewSet
):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    @action(detail=False, methods=['get'])
    def me(self, request):
        # Your logic to retrieve the current customer (logged-in user)
        current_customer = request.user.customer  # Assuming you have a one-to-one relationship between User and Customer

        serializer = self.get_serializer(current_customer)
        return Response(serializer.data)