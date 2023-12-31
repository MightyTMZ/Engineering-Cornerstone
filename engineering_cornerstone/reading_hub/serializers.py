from rest_framework import serializers
from .models import Article, Author, Category, Customer
from users.serializers import *
from tags.serializers import *

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['id', 'first_name', 'last_name', 'profile_picture_url']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']
        

class ArticleSerializer(serializers.ModelSerializer):
    created_at_date = serializers.DateField(read_only=True)
    category = CategorySerializer(many=True)
    authors = AuthorSerializer(many=True)
    tags = TagSerializer(many=True)

    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'image_url', 'category', 'content', "content_just_text", 'authors', 'created_at', 'created_at_date', 
                  'updated_at', 'trending', "tags"]


class CustomerSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='user.first_name', read_only=True)
    last_name = serializers.CharField(source='user.last_name', read_only=True)

    class Meta:
        model = Customer
        fields = ['id', 'user_id', 'first_name', 'last_name']