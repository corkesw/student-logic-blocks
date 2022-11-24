Tests

Example test - 1

1. Wrong data format as an input. Input should be a string not an Array.
   Needs to read the instructions and check data types.

2. Not enough tests, what about uppercase/lowercases, what about none matching string, multiple letters in the string?

Example test - 2

1. Great testing, could add one or two more to test a none matching string and/or upper/lower cases but really solid imho.

Example test - 3

1. Too many test, tests 2,3,4,5 could be one test with more expect blocks. They are testing the same behaviour so no need for seperate tests.

2. I like the testing for more than one character in the string. However I might argue that there only needs to be one test for it.
   Even have multiple expect cases but one test. The behavious is 1 or more. so Two tests for two behaviours. Not bad though.

3. Great to see a test for mismatching characters

Solutions

Example Solution - 1

1. Nice and simple way to solve it

2. Triggered by using j and not i in the for loop!

3. nothing about lower case or invalid characters though

Example Solution - 2

1. A forEach and a switch statement? What more could you ask for!

2. Nice, i like it very much - nothing about lower case or invalid characters though

Example Solution - 3

1. I like the approach, similar to how I would approach it.

2. not sure why we are pushing an empty array on line 7 though?

3. nothing about lower case - not a huge issue as everything else is sound

Example Soultion - 4

1. CodeWars eat your heart out!

2. It's clever, but readability and is where this solution falls short.

3. I kinda love it, but wouldn't want to see it out in the wild!
