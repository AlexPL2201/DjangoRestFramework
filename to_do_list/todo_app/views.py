from django.shortcuts import render

# Create your views here.
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet
from .models import Project, ToDoNote
from .serializers import ProjectModelSerializer, ToDoNoteModelSerializer
from .filters import ToDoNoteFilter


class ProjectLimitOffsetPagination(LimitOffsetPagination):
	default_limit = 10


class ProjectModelViewSet(ModelViewSet):
	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
	queryset = Project.objects.all()
	serializer_class = ProjectModelSerializer
	permission_classes = [permissions.IsAuthenticated]
	pagination_class = ProjectLimitOffsetPagination

	#http://127.0.0.1:8000/api/projects/?project_name=2 - фильтр по имени
	def get_queryset(self):
		queryset = Project.objects.all()
		name = self.request.query_params.get('project_name', None)
		if name:
			queryset = queryset.filter(project_name__contains=name)
		return queryset
	
	
class ToDoNoteLimitOffsetPagination(LimitOffsetPagination):
	default_limit = 20


class ToDoNoteModelViewSet(ModelViewSet):
	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
	queryset = ToDoNote.objects.all()
	filterset_class = ToDoNoteFilter
	serializer_class = ToDoNoteModelSerializer
	pagination_class = ToDoNoteLimitOffsetPagination


	def destroy(self, request, *args, **kwargs):
		try:
			instance = self.get_object()
			instance.status = False
			instance.save()
		except:
			return Response(status=status.HTTP_404_NOT_FOUND)
		else:
			return Response(status=status.HTTP_204_NO_CONTENT)
