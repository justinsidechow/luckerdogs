from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import CoinToss

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

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