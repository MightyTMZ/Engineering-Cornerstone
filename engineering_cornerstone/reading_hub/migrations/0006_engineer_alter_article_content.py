# Generated by Django 4.2.7 on 2023-12-05 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reading_hub', '0005_alter_article_options_article_trending'),
    ]

    operations = [
        migrations.CreateModel(
            name='Engineer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.AlterField(
            model_name='article',
            name='content',
            field=models.TextField(max_length=10000),
        ),
    ]