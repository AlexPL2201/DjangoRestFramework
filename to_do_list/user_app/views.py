from django.shortcuts import render

# Create your views here.

from rest_framework.viewsets import GenericViewSet
from .models import User
from .serializers import UserModelSerializer
from rest_framework.pagination import LimitOffsetPagination
from rest_framework import mixins


class UserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, GenericViewSet):
	queryset = User.objects.all()
	serializer_class = UserModelSerializer

