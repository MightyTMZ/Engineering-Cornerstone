from django.db import models
from users.models import CustomUser


class Category(models.Model):
    title = models.CharField(max_length=255, unique=True)
    
    def __str__(self):
        return self.title


class Author(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return self.user.first_name + " " + self.user.last_name
    

class Article(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(unique=True)
    image_url = models.CharField(max_length=2083, default="-")
    content = models.TextField()  # Store the article content as HTML or Markdown
    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    author = models.ForeignKey(Author, on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    trending = models.BooleanField(default=False)

    def __str__(self):
        return self.title + " " + self.slug

    
    class Meta:
        ordering = ['-created_at']

# url structure:
# engineeringcornerstone.com/median_form(e.g. article, blog, etc)/created_at_date/slug
# example url:
# https://www.engineeringcornerstone.com/article/2023-12-03/django-is-a-python-backend-framework