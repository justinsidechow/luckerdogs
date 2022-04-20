import random

# we're gonna use true random to randomize where the coin will
# actually land on. random.SystemRandom()


def randomized_coin_flip(choice):
    true_random = random.SystemRandom().randint(0, 1)

    # 0 = heads
    # 1 = tails

    # trueHeads = user guessed heads correctly
    # falseHeads = user guessed heads incorrectly
    if choice == "heads" and true_random == 0:
        return "trueHeads"
    elif choice == "heads" and true_random == 1:
        return "falseHeads"
    elif choice == "tails" and true_random == 1:
        return "trueTails"
    elif choice == "tails" and true_random == 0:
        return "falseTails"
