# Generated by Django 4.2.7 on 2023-12-06 23:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reading_hub', '0010_article_created_at_date_article_updated_at_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='created_at_date',
        ),
        migrations.RemoveField(
            model_name='article',
            name='updated_at_date',
        ),
    ]