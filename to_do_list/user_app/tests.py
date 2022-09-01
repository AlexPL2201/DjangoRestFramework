import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
# from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import UserModelViewSet
from .models import User

class TestAuthorViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        view = UserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_get_project_detail(self):
        test_user = User.objects.create(email='tests@mail.ru')
        client = APIClient()
        response = client.get(f'/api/users/{test_user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

