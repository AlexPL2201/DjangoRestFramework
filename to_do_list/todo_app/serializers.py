from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from rest_framework.relations import StringRelatedField

from .models import Project, ToDoNote


class ProjectModelSerializer(ModelSerializer):
	class Meta:
		model = Project
		fields = '__all__'


class ToDoNoteModelSerializer(ModelSerializer):
	class Meta:
		model = ToDoNote
		fields = '__all__'
