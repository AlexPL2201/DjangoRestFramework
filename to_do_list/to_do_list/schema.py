import graphene
from graphene_django import DjangoObjectType

from user_app.models import User
from todo_app.models import Project, ToDoNote


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = "__all__"


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = "__all__"


class ToDoNoteType(DjangoObjectType):
    class Meta:
        model = ToDoNote
        fields = "__all__"


class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)
    all_notes = graphene.List(ToDoNoteType)
    all_projects = graphene.List(ProjectType)
    user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))
    projects_by_user = graphene.List(ProjectType, name=graphene.String(required=False))

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_all_notes(root, info):
        return ToDoNote.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_user_by_id(self, info, id):
        try:
            return User.objects.get(id=id)
        except User.DoesNotExist:
            return None

    def resolve_projects_by_user(self, info, name=None):
        projects = Project.objects.all()
        if name:
            projects = projects.filter(users=name)
        return projects


schema = graphene.Schema(query=Query)
