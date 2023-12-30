from django.conf import settings
from django.db import models
from django.dispatch import receiver

from rest_framework.authtoken.models import Token

# Create your models here.


class Volunteer(models.Model):
    class YearLevels(models.TextChoices):
        FIRST_YEAR = 'First Year', 'First Year'
        SECOND_YEAR = 'Second Year', 'Second Year'
        THIRD_YEAR = 'Third Year', 'Third Year'
        FOURTH_YEAR = 'Fourth Year', 'Fourth Year'

    name = models.CharField(max_length=50)
    course = models.CharField(max_length=20)
    yr_level = models.CharField(
        max_length=20,
        choices=YearLevels.choices
    )
    email = models.EmailField(max_length=256)
    status = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)


@receiver(models.signals.post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
