from rest_framework import serializers
from .models import Article, Author, Category
from users.serializers import *

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['id', 'first_name', 'last_name', 'profile_picture_url']
        

class ArticleSerializer(serializers.ModelSerializer):
    created_at_date = serializers.DateField(read_only=True)
    authors = AuthorSerializer(many=True)

    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'image_url', 'category', 'content', 'authors', 'created_at', 'created_at_date', 
                  'updated_at', 'trending']

