from db_model.models import CoinToss, DBModel
from django.test import TestCase
from django.contrib.auth import get_user_model

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
        #self.assertEqual(user.first_name, 'firstname')
        self.assertFalse(user.is_superuser)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_active)

        with self.assertRaises(ValueError):
            db.objects.create_user(
                email='', user_name='a', password='password')
            
class Test_DB_Model(TestCase):
    
    def test_db_model(self):
        db_model = DBModel.objects.create(title="Title", description="Description", completed=True)
        self.assertEqual(db_model.title, "Title")
        self.assertEqual(db_model.description, "Description")
        self.assertEqual(db_model.completed, True)
        self.assertEqual(str(db_model), "Title")

class Test_Coin_Toss(TestCase):
    
    def test_coin_toss(self):
        coin_toss = CoinToss.objects.create(heads=1, tails=2)
        self.assertEqual(coin_toss.heads, 1)
        self.assertEqual(coin_toss.tails, 2)
        self.assertEqual(int(coin_toss), 1)