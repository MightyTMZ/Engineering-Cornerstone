# Generated by Django 4.2.7 on 2023-12-07 22:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reading_hub', '0013_remove_article_author_remove_article_category_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='author',
            new_name='authors',
        ),
    ]