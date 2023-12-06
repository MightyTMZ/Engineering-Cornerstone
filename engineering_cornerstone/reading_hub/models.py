from django.db import models
from users.models import CustomUser
from django.utils.text import slugify


class Category(models.Model):
    title = models.CharField(max_length=255, unique=True)
    
    def __str__(self):
        return self.title


class Author(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return self.user.first_name + " " + self.user.last_name


"""class Engineer(models.Model):
    pass"""
    

class Article(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(default="-", editable=False, max_length=250)
    image_url = models.CharField(max_length=2083, default="-")
    content = models.TextField(max_length=10000)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    author = models.ForeignKey(Author, on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    trending = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.title} - by {self.author} - Trending {self.trending} - {self.created_at}"

    def save(self, *args, **kwargs):
        # Update the slug using the title when the article is saved
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def get_article_url(self):
        # Construct the URL using created_at and slugified title
        return f'/{self.created_at.date()}/{self.slug}/'


# url structure:
# engineeringcornerstone.com/median_form(e.g. article, blog, etc)/created_at_date/slug
# example url:
# https://www.engineeringcornerstone.com/article/2023-12-03/django-is-a-python-backend-framework