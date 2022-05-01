from django.dispatch import receiver
from django.db.models.signals import post_save
from coinToss.models import coinToss
from coinToss.calculations import randomized_coin_flip


# updates the answer of the randomized coin toss answer into the database model
# saves after the PUT is called, or first GET
@receiver(post_save, sender=coinToss)
def coin_toss_result(sender, instance, created, **kwargs):

    if instance.coinTossChoice == "heads" or instance.coinTossChoice == "tails":

        coin_flip_answer = randomized_coin_flip(instance.coinTossChoice)
        instance.coinTossChoice = coin_flip_answer

        if instance.coinTossChoice == "trueHeads":
            instance.trueHeads += 1
        elif instance.coinTossChoice == "falseHeads":
            instance.falseHeads += 1
        elif instance.coinTossChoice == "trueTails":
            instance.trueTails += 1
        elif instance.coinTossChoice == "falseTails":
            instance.falseTails += 1

        instance.save()
