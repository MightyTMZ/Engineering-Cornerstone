# Generated by Django 4.2.7 on 2024-01-05 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tags', '0001_initial'),
        ('reading_hub', '0016_customer'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='tags',
            field=models.ManyToManyField(to='tags.tag'),
        ),
    ]