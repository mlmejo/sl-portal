# Generated by Django 5.0 on 2023-12-29 01:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portal', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='volunteer',
            old_name='year_level',
            new_name='yr_level',
        ),
    ]