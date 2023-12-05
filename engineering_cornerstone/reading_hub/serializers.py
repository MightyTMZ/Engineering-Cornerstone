from rest_framework import serializers
from .models import Article, Author, Category

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', "image_url", 'category', 'content', 'author', 'created_at', 'updated_at', 'trending']

