from rest_framework import serializers
from .models import Article, Author, Category
from users.serializers import *

class AuthorSerializer(serializers.Serializer):
    class Meta:
        model = Author
        fields = ['id', 'first_name', 'last_name', 'profile_picture_url']
        

class ArticleSerializer(serializers.ModelSerializer):
    created_at_date = serializers.DateField(read_only=True)
    #last_updated_date = serializers.DateField(source="updated_at.date", read_only=True)
    authors = AuthorSerializer(many=True)

    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'image_url', 'category', 'content', 'author', 'created_at', 'created_at_date', 
                  'updated_at', 'trending']
