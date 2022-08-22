from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
	firstname = models.CharField(max_length=32, verbose_name='Имя')
	lastname = models.CharField(max_length=32, verbose_name='Фамилия')
	email = models.EmailField(max_length=254, unique=True, verbose_name='Электронная почта')