---
title: "Gift exchange problem and my solution"
tags: [Maths and Science]
---

It is common to exchange gifts in a Christmas party. Normally people would draw lots. But have anyone thought of a better method?

For _n_ participants who would like to exchange gifts in a party, we know there are _n!_ permutations of random orders of gifts. For some permutations, however, some participants get their own gifts instead of other's. In those cases, they are **_failed gift exchange cases_**. Failing to exchange gifts in a party breaks children's hearts.

For permutations of _n_ participants, we can work out that the combinations of _**failed gift exchange cases**_ is related to the number of participants, i.e.

#### [_a(n) = (n-1) * (a(n-1) + a(n-2))_](https://oeis.org/A002467)


|_n_|_a(n)_	|_n!_	|% of failed cases|
|---|---|---|---|
|1|1	|1	|1.0|
|2|1	|2	|0.5|
|3|4	|6	|0.6666666666666666|
|4|15	|24	|0.625|
|5|76	|120	|0.6333333333333333|
|6|455	|720	|0.6319444444444444|
|7|3186	|5040	|0.6321428571428571|
|8|25487	|40320	|0.6321180555555556|
|9|229384	|362880	|0.632120811287478|
|10|2293839	|3628800	|0.6321205357142857|
|11|25232230	         |39916800	         |0.6321205607663941|
|12|302786759	         |479001600	         |0.6321205586787184|
|13|3936227868	       |6227020800  	     |0.6321205588393088|
|14|55107190151	       |87178291200	       |0.6321205588278381|
|15|826607852266	     |1307674368000	     |0.6321205588286029|
|16|13225725636255	   |20922789888000	   |0.632120558828555 |
|17|224837335816336	   |355687428096000	   |0.6321205588285578|
|18|4047072044694047	 |6402373705728000	 |0.6321205588285577|
|19|76894368849186894	 |121645100408832000 |0.6321205588285577|
|20|1537887376983737879|2432902008176640000|0.6321205588285577|


On the other hand, we also can simulate this by assuming the probability of getting our own gifts as _1/n_. The probability of none of participants getting their own gifts is _(1 - 1/n)^n_. For n tends to infinity, we can get the probability of that is _1/e_ , or on contrary, the probability of **_failed gift exchange cases_** is _1 - 1/e_ , which is equivalent to _a(n) = (n-1) * (a(n-1) + a(n-2))_ when _n_ is large.

To reduce effort, and not letting anyone knows the result first to ensure total randomness, thus an algorithm is needed for exchanging gifts. 

The algorithm works like this: first all _n_ participants with their own gifts get a random seat in a circle (it has _(n-1)!_ combinations because of the circular arrangement). Then a random number from uniform distributed numbers from _1_ to _n-1_ is picked and participants can pass their gifts clockwise according the number drawn. As a result, only one draw lots for random seats and one pick for a random number is needed.

This method can prevent participants getting their own gifts at the end of the party, and to speed up the gift exchange session, and to make it funnier.


