# Generated by Django 4.2.7 on 2023-12-07 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reading_hub', '0012_remove_author_user_author_first_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='author',
        ),
        migrations.RemoveField(
            model_name='article',
            name='category',
        ),
        migrations.AddField(
            model_name='article',
            name='author',
            field=models.ManyToManyField(to='reading_hub.author'),
        ),
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.ManyToManyField(to='reading_hub.category'),
        ),
    ]
