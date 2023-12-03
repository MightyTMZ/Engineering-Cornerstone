from django.db import models
from users.models import CustomUser

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()  # Store the article content as HTML or Markdown
    author = models.ForeignKey(CustomUser, on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

