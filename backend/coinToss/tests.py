from django.test import TestCase
import json
from types import SimpleNamespace
from rest_framework import status
from rest_framework.test import APITestCase
from django.core import mail
from users.tests import EmailVerificationTest


class PasswordResetTest(APITestCase):

    # endpoints needed
    coin_toss_url = "/api/v1/cointoss/"
    update_coin_toss_url = "/api/v1/cointoss/1/"
    delete_coin_toss_url = "/api/v1/token/login/"
    register_url = "/api/v1/users/"
    activate_url = "/api/v1/users/activation/"
    resend_verification_url = "/api/v1/users/resend_activation/"
    login_url = "/api/v1/token/login/"
    user_details_url = "/api/v1/users/"

    # user infofmation

    user_data_heads = {
        "coinTossChoice": "heads",
    }

    user_data_tails = {
        "coinTossChoice": "tails",
    }

    user_data = {
        "email": "test@example.com",
        "username": "test_user",
        "password": "verysecret"
    }

    login_data = {
        "username": "test_user",
        "password": "verysecret"
    }

    def test_add_get_update_coin_toss(self):

        EmailVerificationTest.test_register_with_email_verification(self)

        response = self.client.post(
            self.coin_toss_url, self.user_data_heads, format="json")
        # expected response
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        # expected one email to be send

        response = self.client.get(self.coin_toss_url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response = self.client.put(
            self.update_coin_toss_url, self.user_data_heads, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response = self.client.get(self.coin_toss_url, format="json")

        response_json = json.loads(json.dumps(response.json()))

        self.assertIn(response_json[0]["coinTossChoice"], [
                      "trueHeads", "falseHeads"])

        response = self.client.put(
            self.update_coin_toss_url, self.user_data_tails, format="json")

        response = self.client.get(self.coin_toss_url, format="json")

        response_json = json.loads(json.dumps(response.json()))

        self.assertIn(response_json[0]["coinTossChoice"], [
                      "trueTails", "falseTails"])
