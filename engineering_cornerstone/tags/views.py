from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework import filters
from .models import Tag, TaggedItem
from .serializers import TagSerializer
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page



@method_decorator(cache_page(60 * 15, key_prefix='tag_list_cache'), name='get')
class TagList(ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['label']
    authentication_classes = []
    permission_classes = []