from django.contrib.auth.tests.test_context_processors import MockUser
from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, User


# Create your models here.
class MockrUser(models.Model):
    mockr_user = models.OneToOneField(User, primary_key=True)
    is_facebook_user = models.BooleanField(default=False)
    is_mockr = models.BooleanField(default=False)

    def __unicode__(self):
        return self.mockr_user.username

    @property
    def username(self):
        return self.mockr_user.username


class BabyName(models.Model):
    name = models.CharField(max_length=50)
    rank = models.IntegerField(default=0, blank=True, null=True)
    babynamer_user = models.ForeignKey(MockrUser, related_name='babynamer')

    def __unicode__(self):
        return self.name


class Mock(models.Model):
    mock_text = models.CharField(max_length=400)

    rhyming = models.BooleanField(default=False)
    baby_name = models.ForeignKey(BabyName, related_name='mocks')
    mockr_user = models.ForeignKey(MockrUser, related_name='mockruser')
    is_parents_favorite = models.BooleanField(default=False)

    def __unicode__(self):
        return ' '.join([self.mockr_user.mockr_user.username, " - ", self.mock_text])


class Favorite(models.Model):
    mocks = models.ForeignKey(Mock)
    favorite_user = models.ForeignKey(MockrUser)
    is_favorite = models.BooleanField(default=False)

    def __unicode__(self):
        return self.mocks.mock_text


class MockRating(models.Model):
    brutality = models.IntegerField(default=0)
    stupidity = models.IntegerField(default=0)
    funny = models.IntegerField(default=0)
    mock_rater_user = models.ForeignKey(MockrUser)
    mock = models.ForeignKey(Mock, related_name='ratings')

    @property
    def overall(self):
        return ((self.brutality + self.stupidity + self.funny) / 3.0 )












