from django.db import models

# Create your models here.

from user_app.models import User


class Project(models.Model):	# 2. Добавить модель Project. Это проект, для которого записаны TODO
	project_name = models.CharField(max_length=64)		# У него есть название
	repository_link = models.URLField(blank=True)	# может быть ссылка на репозиторий
	users = models.ManyToManyField(User)	# набор пользователей, которые работают с этим проектом


class ToDoNote(models.Model):	# 3. Добавить модель TODO. Это заметка
	project = models.ForeignKey(Project, on_delete=models.CASCADE) # У ToDo есть проект
	note = models.CharField(max_length=64)	# в котором сделана заметка
	note_text = models.TextField(blank=True)	# текст заметки
	created = models.DateTimeField(auto_now_add=True)	# дата создания
	updated = models.DateTimeField(auto_now_add=True)	# и обновления
	creator = models.ForeignKey(User, on_delete=models.CASCADE)	# пользователь, создавший заметку
	status = models.BooleanField(default=True)	# Содержится и признак — активно TODO или закрыт
