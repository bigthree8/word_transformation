# word_transformation
https://discuss.codecademy.com/t/challenge-word-transformation/84306/5


Code Challenge #6: May 17, 2017
Every week, we feature the type of brain-teasing question that might be asked in a full-stack developer's job interview at places such as Google and Facebook.

This week's challenge was reportedly asked in interviews at Snap, Inc. (parent company of Snapchat):

Basic Difficulty

Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord.
You may assume:

Both beginWord and endWord are strings80 of equal length (that is, equal numbers of characters15).
beginWord and endWord are words with all lower-case characters (in ASCII26 hexadecimal, characters range from 61 to 7A)
Letters cannot be inserted or deleted, only substituted.
Only one letter can be changed at a time.
Each intermediate word must exist in the word list.
Your algorithm should be able to work with any dictionary, but for this challenge just use the one posted below. Either copy it word for word into an array, or save it into a text file and load it using File I/O.
Find out more about basic challenges.

Intermediate difficulty

beginWord and endWord may now be strings of different lengths
You may assume:

Your function can now delete and insert letters.
Find out more about intermediate challenges.

Hard Difficulty

Make your submission as efficient as possible.
Try adding a timing function to your code, and try out different approaches to the problem to find the quickest solution. Also, try to reduce the amount of space you use.
You may limit your function to check whether the edit distance between beginWord and endWord is within some threshold or maximum distance of interest, k.
Find out more about hard challenges and time complexity + Big O.

Scroll down and reply to this thread with your code to participate! Don't just submit your code, remember to explain your solution, too! If you want your entry to be considered under our "best code" assessment, you must include a link to your code running on repl.it57 and abide by our other simple rules.

Resources:

research edit distance83
The fine print:

Click the links to find out more about:

the rules & how to participate in challenges50
how challenges are used as job interview questions20
why Codecademy runs challenges20 (and why they are formatted this way)
more details about the challenges and why we think they are useful.
find previous challenges (and see the past winners) in our Challenge Index


    shortestTransformation("gate", "gate")
    >> 0

    shortestTransformation("jake", "jade")
    >> 1

    shortestTransformation("humid", "hemic")
    >> 2
    # humid -> humic -> hemic

    shortestTransformation("mist", "wary")
    >> 11
    # mist -> mitt -> mite -> mate -> maze -> faze -> fade -> wade -> wane -> want -> wart -> wary

    shortestTransformation("wait", "doll")
    >> 11
    # wait -> want -> wane -> wade -> fade -> faze -> maze -> male -> malt -> molt -> moll || dolt -> doll

    shortestTransformation("slug", "gate")
    >> -1
    # not possible
