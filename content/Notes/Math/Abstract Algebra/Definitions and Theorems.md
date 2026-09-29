#math 

## Binary Operation
A binary operation $*$ on a set $S$ is a function s.t. $\forall a,b \in S$ we have that $a * b \in S$. In other words, $S$ is closed under $*$. We write $(S, *)$ to indicate a **binary structure**, which is just a set and some binary operation.

For example, $(\mathbb Z, +)$ is a binary structure but $(\mathbb N, -)$ is not because we can get negative numbers. Moreover, $(\mathbb{R}, \div)$ is not a binary structure because of division by 0.

## Associative
A binary operation $*$ on S is associative if $\forall a,b,c \in S$ we have that $(a*b)*c = a*(b*c)$. For example, $(\mathbb Z, -)$ is not associative as $(1-2)--3\neq 1-(2--3)$.

## Identity
A binary structure $(S, *)$ has an identity element $e \in S$ if $\forall s \in S$, we have that: $e*s = s*e = s$. This is technically a two sided identity.

## Inverse
An element $s \in S$ is said to have an inverse w.r.t $*$ if there exists $t\in S$ s.t. $s*t=t*s=e$

## Group
A group consists of a set $G$ and a binary operation $*$ such that:
1. $*$ is associative
2. $G$ contains an identity element
3. Every element of $G$ has an inverse in $G$.

For example, $(\mathbb Z, \times)$ is not a group because not every element has a multiplicative inverse, ie we cant multiple 2 by another integer to get 1. Also, $(\mathbb Q, -)$ is not a group because it is not associative. Also, $(\mathbb Z - \{ 0 \}, +)$ is not a group because it has no identity. Something like $(\mathbb Q - \{ 0 \}, \times)$ is a group though because it is associative, it contains 1 which is the multiplicative identity, and every element has an inverse. 

## Abelian
We say that a group $(G, *)$ is abelian if $\forall a,b \in G$ $a*b = b*a$. Namely, $G$ is abelian if it commutes / order does not matter. 

## Direct Product
For two sets $A, B$ the direct product of $A,B$ is defined $A \times B = \{ (a, b):a\in A, b \in B \}$. Namely, it is just the set of all **ordered** pairs. Operations on $A \times B$ are done component wise, for example:
1. $(a_{1}, b_{1})(a_{2}, b_{2})=(a_{1}a_{2}, b_{1}b_{2})$
2. $(a_{1},b_{1})+(a_{2}, b_{2} )=(a_{1}+a_{2}, b_{1}+b_{2})$
3. The identity of $A\times B$ is just $(e_{A}, e_{B})$, same with the inverse.

## Modular Arithmetic
Let $a,b,n \in \mathbb Z, n \geq 1$. Then $n|(a-b)\iff a \equiv b\pmod{n}$. Modular arithmetic has the following properties, if $a \equiv c \pmod{n}$ and $b \equiv d \pmod{n}$ then:
1. $ab \equiv cd \pmod{n}$
2. $a+b\equiv c+d \pmod{n}$
3. $a-b \equiv c -d \pmod{n}$

For example, we can prove that $\forall x,y,z \in \mathbb Z$ if $\gcd(x, y)=1$ then there are no solutions to $x^2+y^2=3z^2$. Namely, because if there are solutions then $x^2 + y^2 \equiv 0 \pmod{3}$. But, $x,y$ can only be congruent to either $0,1,2$ mod 3. If $x$ is congruent to 1 then $x^2$ is congruent to $1^2$, if $x$ is congruent to 2 then $x^2$ is congruent to 4 mod 3 which is also 1. The same applies for y. Hence, this only holds if $x,y$ are both congruent to 0 mod 3. But this implies they are both divisible by 3, and this is contradiction because we assumed they were coprime.

Note: if $n \in \mathbb N$ then congruence mod $n$ is an equivalence relation on $\mathbb Z$.

Note: we denote the set of integers mod $n$ as $\mathbb Z / n \mathbb Z$.

## Equivalence Class
Given an equivalence relation $\sim$ on some set $S$, the equivalence class of $x \in S$ is:
$$
[x]=\{ y \in S : x\sim y\}
$$

For example, the set of all integers congruent to $m$ mod $n$ creates an equivalence class.

## Monoid
A monoid is a **binary structure** $(M, *)$ where $*$ is associative and $M$ has an identity. **But not every element has an inverse**.

## Semigroup
A semigroup is a binary structure $(S,*)$ where $*$ is associative. But there is no identity or inverse.

## Left Identity
Given a binary structure $(G, *)$, a left identity $\ell \in G$ is an element s.t. $\ell * g = g$ that holds $\forall g \in G.$

## Right Identity
Given a binary structure $(G, *)$ a right identity $r \in G$ is an element s.t. $\forall g \in G$ we have that $g * r = g$. Eg, $(\mathbb Z, -)$ has a right identity but no left identity. If an element is both a right and a left identity then we call it **the identity**.

## Left Inverse
Given the standard B.S with identity $e$, a left inverse of an element $g \in G$ is some $h \in G$  s.t. $h * g = e$.

## Right Inverse
Given the standard B.S with identity $e$, a right inverse of an element $g \in G$ is some $j \in G$ s.t.
$g * j =e$. If an element is both a left and right inverse then we call it **the inverse**.

## Unit Group
Given a monoid $S$ the unit group of $S$ is defined $S^{\times}=\{ x\in S: \exists y \in S, xy=yx=e \}$. Namely, the unit group of a monoid is the set of all elements with an inverse under that binary operation.

For example, $(\mathbb{R}, \times)$ is a monoid, as $0$ does not have an inverse, but $\mathbb{R}^{\times}=\mathbb{R}-{\{ 0 \}}$.

## Unit Groups of Mod Numbers
Given some natural $n$, the unit group of numbers mod $n$ is as follows:
$$
(\mathbb Z / n \mathbb Z)^{\times}= \{ a\in Z/n\mathbb Z : \gcd(a, n) =1 \}
$$
Namely, the set of numbers mod $n$ with a multiplicative inverse are just the numbers mod $n$ that are coprime with $n$. For example, $(\mathbb Z / 10 \mathbb Z)^{\times}=\{ 1,3,7,9 \}$ where $1$ is the identity element under multiplication. So, the inverse of 1 is 1, the inverse of 3 is 7, the inverse of 7 is 3, and the inverse of 9 is 9.

## Euler's Totient Function
The number of elements in $(\mathbb Z / n \mathbb Z)^{\times}$ (it's order) is given by the Euler Totient Function $\Phi(n)$ which is defined for the prime factorization of $n$ where $n=p_{1}^{\alpha_{1}}\cdots p_{k}^{\alpha_{k}}$ s.t. $p_{1},p_{2},\cdots,p_{k}$ are distinct primes and $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{k}$ are natural numbers. The function is defined as follows:
$$
\Phi = p_{1}^{\alpha_{1}-1}(p_{1}-1)p_{2}^{\alpha_{2}-1}(p_{2}-1)\cdots p_{k}^{\alpha_{k}-1}(p_{k}-1)
$$

## Order
The order of a group $G$ is it's cardinality denoted $|G|$. If $G$ is finite then the order is the number of elements. If $G$ is infinite we just say that the order is infinite.

Given two finite groups $A,B$ we have that:
$$
|A \times B| =|A||B|
$$
