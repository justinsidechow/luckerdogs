from django.http import response
from django.test import TestCase
from django.contrib.auth import get_user_model
from db_model.models import CoinToss, User

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

class UserAccountTests(TestCase):

    def test_new_superuser(self):
        db = get_user_model()
        super_user = db.objects.create_superuser(
            'testuser@super.com', 'username', 'password')
        self.assertEqual(super_user.email, 'testuser@super.com')
        self.assertEqual(super_user.user_name, 'username')
        #self.assertEqual(super_user.first_name, 'firstname')
        self.assertTrue(super_user.is_superuser)
        self.assertTrue(super_user.is_staff)
        self.assertTrue(super_user.is_active)
        self.assertEqual(str(super_user), "username")

        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email='testuser@super.com', user_name='username1', password='password', is_superuser=False)

        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email='testuser@super.com', user_name='username1', password='password', is_staff=False)

        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email='', user_name='username1', password='password', is_superuser=True)

    def test_new_user(self):
        db = get_user_model()
        user = db.objects.create_user(
            'testuser@user.com', 'username', 'password')
        self.assertEqual(user.email, 'testuser@user.com')
        self.assertEqual(user.user_name, 'username')
        self.assertFalse(user.is_superuser)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_active)

        with self.assertRaises(ValueError):
            db.objects.create_user(
                email='', user_name='a', password='password')

class TestCoinToss(TestCase):
    
    def test_coin_toss(self):
        
        db = get_user_model()
        test_user = db.objects.create_user(
            'luckerdog@luckerdog.com', 'luckerdog', 'luckypassword')
        
        coin_toss = CoinToss.objects.create(user=test_user, heads_lucky=1, heads_unlucky=2, tails_lucky=3, tails_unlucky=4)
        self.assertEqual(coin_toss.heads_lucky, 1)
        self.assertEqual(coin_toss.heads_unlucky, 2)
        self.assertEqual(coin_toss.tails_lucky, 3)
        self.assertEqual(coin_toss.tails_unlucky, 4)

class TestCoinTossAPI(APITestCase):
    
    def test_view_post(self):
        url = reverse('db_model_url:CoinToss')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK) 
        pass
        
    def test_create_post(self):
        
        db = get_user_model()
        user = db.objects.create_user(
            'testuser@user.com', 'username', 'password')
        
        data = {"user": user.id, "heads_lucky": "1", "heads_unlucky": "2",
                "tails_lucky": "3", "tails_unlucky": "4"}
        url = reverse('db_model_url:CoinToss')
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED) 
        pass