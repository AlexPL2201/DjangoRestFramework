from django_filters.rest_framework import FilterSet, CharFilter, DateTimeFromToRangeFilter
from .models import ToDoNote

# http://127.0.0.1:8000/api/notes/?note=&project=&created_after=&created_before=2022-08-12+11%3A00%3A00
class ToDoNoteFilter(FilterSet):
	note = CharFilter(lookup_expr='contains')
	created = DateTimeFromToRangeFilter()

	class Meta:
		model = ToDoNote
		fields = ['note', 'project', 'created']