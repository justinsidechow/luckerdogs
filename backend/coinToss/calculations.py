import random

# we're gonna use true random to randomize where the coin will
# actually land on. random.SystemRandom()

# a coin toss will always have a 50% chance for heads and 50% chance for tails
# because there are only two posibilities in this particular game

# on a small sample size (playing only a few games), the percentage in which
# the coins land will not be close to 50% due to the Law of Small Numbers
# where the smaller the sample size, the more extreme the outcome is
# compare to what the actual percentage of the given situation
# only when the sample size is larger is where the rate will reach toward
# its true percentage

# run the game a few time to see how luck you are at getting more than 50%
# run the game a million times and see your luck on both sides of the coin be
# nearly 50% heads and 50% tails


def randomized_coin_flip(choice):
    true_random = random.SystemRandom().randint(0, 1)

    # 0 = heads
    # 1 = tails

    # trueHeads = user guessed heads correctly
    # falseHeads = user guessed heads incorrectly
    # same explanation goes for tails too
    if choice == "heads" and true_random == 0:
        return "trueHeads"
    elif choice == "heads" and true_random == 1:
        return "falseHeads"
    elif choice == "tails" and true_random == 1:
        return "trueTails"
    elif choice == "tails" and true_random == 0:
        return "falseTails"
