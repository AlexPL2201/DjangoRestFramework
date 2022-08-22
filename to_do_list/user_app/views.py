from django.shortcuts import render

# Create your views here.

from .models import User
from .serializers import UserModelSerializer
from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet


class UserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, GenericViewSet):
	queryset = User.objects.all()
	serializer_class = UserModelSerializer

