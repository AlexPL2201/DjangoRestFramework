from django.shortcuts import render

# Create your views here.

from .models import User
from .serializers import UserModelSerializer, UserModelSerializerWithPermissions
from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet


class UserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.CreateModelMixin, GenericViewSet):
	queryset = User.objects.all()
	serializer_class = UserModelSerializer

# 127.0.0.1:8000/api/users/?version=0.2
	def get_serializer_class(self):
		if self.request.version == '0.2':
			return UserModelSerializerWithPermissions
		return UserModelSerializer

