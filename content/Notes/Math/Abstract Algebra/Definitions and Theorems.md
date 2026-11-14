#math #AbstractAlgebra

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

For example, $(\mathbb Z, \times)$ is not a group because not every element has a multiplicative inverse, ie we can't multiply 2 by another integer to get 1. Also, $(\mathbb Q, -)$ is not a group because it is not associative. Also, $(\mathbb Z - \{ 0 \}, +)$ is not a group because it has no identity. Something like $(\mathbb Q - \{ 0 \}, \times)$ is a group though because it is associative, it contains 1 which is the multiplicative identity, and every element has an inverse. 

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
(\mathbb Z / n \mathbb Z)^{\times}= \{ a\in \mathbb Z/n\mathbb Z : \gcd(a, n) =1 \}
$$
Namely, the set of numbers mod $n$ with a multiplicative inverse are just the numbers mod $n$ that are coprime with $n$. For example, $(\mathbb Z / 10 \mathbb Z)^{\times}=\{ 1,3,7,9 \}$ where $1$ is the identity element under multiplication. So, the inverse of 1 is 1, the inverse of 3 is 7, the inverse of 7 is 3, and the inverse of 9 is 9. 

Remember when we are discussing the set $(\mathbb{Z} / n\mathbb{Z})^{\times}$ we are talking about the binary operation of multiplication.

## Euler's Totient Function
The number of elements in $(\mathbb Z / n \mathbb Z)^{\times}$ (its order) is given by the Euler Totient Function $\Phi(n)$ which is defined for the prime factorization of $n$ where $n=p_{1}^{\alpha_{1}}\cdots p_{k}^{\alpha_{k}}$ s.t. $p_{1},p_{2},\cdots,p_{k}$ are distinct primes and $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{k}$ are natural numbers. The function is defined as follows:
$$
\Phi(n) = p_{1}^{\alpha_{1}-1}(p_{1}-1)p_{2}^{\alpha_{2}-1}(p_{2}-1)\cdots p_{k}^{\alpha_{k}-1}(p_{k}-1)
$$

## Order
The order of a group $G$ is its cardinality denoted $|G|$. If $G$ is finite then the order is the number of elements. If $G$ is infinite we just say that the order is infinite.

Given two finite groups $A,B$ we have that:
$$
|A \times B| =|A||B|
$$

> [!tip] The Order of a Mod Number Unit Group 
>$$
> |(\mathbb Z / n \mathbb Z)^{\times}| = \Phi(n) 
>$$
>

## Subgroup
A subgroup $H$ of a group $G$ is a subset of $G$ that is a group under the same binary operation as $G$. $H = \{ e \}$ is the trivial subgroup. A subgroup of $G$ is written $H \leq G$.

## Subgroup Criterion Theorem
For a non-empty subset $H$ of a group $G$. $H \leq G$ if and only if:
1. $\forall h_{1}, h_{2} \in H, h_{1} * h_{2} \in H$. (Closure)
2. $\forall h \in H, \exists j \in H$ s.t. $h * j = e$. (Inverse)

## Center of a Group
The center of a group $G$ is defined $Z(G)=\{ z \in G  : zg=gz \quad \forall g\in G \}$. The largest possible center is obtained when $G$ is abelian. 


> [!tip] Centers in Cayley Tables 
> If an element of a group is in the center, then the row and column of that element in the group's Cayley table are the same. 
> 

## Generating a Group
Given a group $G$ and an element $g \in G$. We can write $\langle g \rangle = \{ g^k : k \in \mathbb{Z} \}$. This generates the set $\{ \cdots g^{-2}, g^{-1}, g^0, g^1, g^2, \cdots \}$ where $g^k = g * g * g * \cdots * g$ (k times).

## Cyclic Groups
Given a group $G$, if $\exists g \in G$ s.t. $\langle g \rangle =G$ we say that $G$ is cyclic and that $g$ generates the group. For example, $\langle 1 \rangle = (\mathbb{Z}, +)$, but something like $(\mathbb{R}, +)$ cannot be generated. Note that the group $\langle g \rangle$ is also a cyclic group, and any element $g$ can generate a cyclic group of that form.

## For any $g \in G$, $\langle g \rangle$ is a subgroup of $G$
Firstly, $\langle g \rangle$ is non-empty as $g^0 = e \in \langle g \rangle$, and $\langle g \rangle \subseteq G$ because $G$ is closed under $*$ and inverses. So, by the Subgroup Criterion Theorem it is enough to show:
1. Closure: $\forall h_{1}, h_{2} \in \langle g \rangle$ we can write them as $g^a, g^b$ for some $a,b \in \mathbb{Z}$. Then, $h_{1} * h_{2} = g^a * g^b = g^{a+b}$, and $a+b \in \mathbb{Z}$ so $h_{1} * h_{2} \in \langle g \rangle$.
2. Inverse: $\forall h \in \langle g \rangle$ we can write $h = g^a$ for some $a \in \mathbb{Z}$. Take $j = g^{-a}$, which is in $\langle g \rangle$ as $-a \in \mathbb{Z}$. Then, $h * j = g^a * g^{-a} = g^0 = e$.

Hence, $\langle g \rangle \leq G$.

## Order of an Element
Consider $\langle g \rangle = g, g^2, g^3, \cdots$ if $G$ is finite then there must be some repetition. Namely, for $a,b \in \mathbb{Z}$ s.t. $a < b$ we have $g^a=g^b$. This means that $g^a * g^{-a}=g^b * g^{-a}=e=g^{b-a}$. Hence, there exists a natural such that $g^n=e$. The minimal such $n$ is the order of $g$. If no such number exists, then $g$ has infinite order. For example, take the group $(\mathbb{Z} / 10\mathbb{Z})^{\times}$, the order of 1, denoted $\# 1=1$, where the order of 3 is $\#3=4$.

If the order of an element $g$ in $G$ is equal to the number of elements in $G$. Namely, if $\#g=|G|$. Then, if $G$ is finite we have that $\langle g \rangle = G$. That is, if the number of elements created by $g$ is equal to the size of $G$, and $G$ is finite, then because $\langle g \rangle \subseteq G$ they must be equal. 

## Every Cyclic Group is Abelian
Let $\langle g \rangle = G$, $\forall x,y \in G$ we can write them as $g^a, g^b$. Then, $g^a * g^b= g^{a+b}=g^b * g^a$. Namely cyclic $\implies$ abelian, so if a group is not abelian, then it is not cyclic. 

## Every Subgroup of a Cyclic Group is Cyclic
Let $G = \langle g \rangle$ and $H \leq G$. If $H = \{ e \}$ then $H = \langle e \rangle$ which is cyclic. Otherwise, $H$ contains some $g^k$ with $k \neq 0$, and because $H$ is a subgroup it also contains the inverse $g^{-k}$. One of $k, -k$ is positive, so $H$ contains a positive power of $g$. Let $m$ be the minimal natural s.t. $g^m \in H$. We show that $H = \langle g^m \rangle$.

$\langle g^m \rangle \subseteq H$: We have that $g^m \in H$, and $H$ is closed under $*$ and inverses, so $(g^m)^q \in H$ $\forall q \in \mathbb{Z}$.

$H \subseteq \langle g^m \rangle$: Take any $h \in H$. Because $h \in G$ we can write $h = g^a$ for some $a \in \mathbb{Z}$. By the division algorithm, $a = qm + r$ for some $q, r \in \mathbb{Z}$ with $0 \leq r < m$. Then:
$$
g^r = g^{a - qm} = g^a * (g^m)^{-q}
$$
Both $g^a$ and $(g^m)^{-q}$ are in $H$, so $g^r \in H$. But $r < m$ and $m$ is the minimal natural s.t. $g^m \in H$, so we must have $r = 0$. Namely, $h = g^{qm} = (g^m)^q \in \langle g^m \rangle$.

Hence, $H = \langle g^m \rangle$, so $H$ is cyclic.

## A Generating Set of a Group
A generating set of a group $G$ is a set $X \subseteq G$ s.t. $\langle X \rangle$ which denotes all finite combinations of elements in $X$ and their inverses, is equal to $G$. For example, $\mathbb{Z}= \langle 1 \rangle = \langle 2, 3 \rangle$.

## Finitely Generated Groups
A group $G$ is said to be finitely generated if there exists a finite $X \subseteq G$ such that $\langle X \rangle = G$. Note that all finite groups are finitely generated, and some infinite groups are finitely generated.


## $GL_{2}(\mathbb{R})$
This is the general linear group of invertible $2 \times 2$ real valued matrices. Namely $2 \times 2$ matrices with a non-zero determinant. Note that all scalar $2 \times 2$ matrices commute!

## $SL_{2}(\mathbb{R})$
This is the special linear group of $2 \times 2$ real valued matrices with a determinant of 1.

## Presentation
We can add in conditions to the generator(s) of a group: $\langle a, b | a^2 = e, b^3 = e, ab = ba \rangle$ etc. For example, we can capture the structure of a group like $\mathbb{Z} / 4 \mathbb{Z}$ this way and use $\langle a | a^4 = e \rangle = \{ e, a, a^2, a^3 \}$. Essentially, the presentation of a group describes the group in terms of generators and relations. Formally, let $S$ be a set of generators, and $R$ be a set of relations, we can then describe a group $G$ as $G = \langle S | R \rangle$. Note that for any group, **its presentation is NOT unique**.

## Dihedral Groups
The dihedral group of order $2n$ is denoted $D_{2n}$ and is the group of symmetries of a regular n-gon (a polygon with n sides). Its presentation is as follows:
$$
D_{2n}= \langle r, s | r^n = e, s^2 = e,  s r=r^{-1}s \rangle
$$
In which $r$ is a rotation, and $s$ is a reflection. Every element of this group can be expressed as $s^jr^k$ where $j=0,1$ and $k=0, 1, \cdots, n-1$. Note that $|D_{2n}|=2n$.

## Homomorphism
Let $(G, *)$ and $(H, \circ)$ be groups. A function $f: G \to H$ is a homomorphism, if $\forall x, y \in G$, $f(x*y)=f(x)\circ f(y)$. For example, the determinant is a homomorphism. The set of all these functions is $\text{Hom}(G, H)$.

If $f$ is a homomorphism then:

1. $f(e_{G})=e_{H}$
2. $\forall g \in G$, $n \in \mathbb{N}$, $f(g^n)=f(g)^n$
3. $\forall g \in G$, $f(g^{-1})=f(g)^{-1}$

## Isomorphism
If a function $f: G \to H$ is a homomorphism, but it is also bijective, then $f$ is an isomorphism. If such a function exists we write $G \simeq H$ and say $G$ and $H$ are isomorphic groups. If $f$ is an isomorphism, then $f^{-1}$ is also an isomorphism. The set of all these functions is $\text{Iso}(G, H)$.

If $f$ is an isomorphism then:

1. $|G|=|H|$ (there is a bijection between them)
2. $G$ is abelian $\iff$ $H$ is abelian
3. $\forall g \in G$, $|g|=|f(g)|$
4. If $K \leq G$ then $f(K)\leq H$


> [!Danger] $\text{Hom}(G, H)$ and $\text{Iso}(G, H)$ cannot be groups under function composition.
> A function's inverse would be contained in a different set $(H, G)$. Assuming $G \ne H$.

## Endomorphism
A homomorphism from $G$ to itself is called an endomorphism. The set of all these functions is $\text{End}(G)$. Note that $\text{End}(G)$ may not be a group under function composition since some functions might not be invertible.

## Automorphism
An isomorphism from $G$ to itself is called an automorphism. The set of all these functions is $\text{Aut}(G)$. Note that $\text{Aut}(G)$ is closed under function composition.

## Injective
A function $f$ is injective if $\forall x, y$ in its domain, if $f(x)=f(y)$ then $x=y$. That is, no two elements map to the same element in the codomain.

## Surjective
A function $f$ is surjective if every element in its codomain is mapped to by an element of its domain. That is, the image of $f$ equals its codomain. 

## Image
Let $f: G \to H$ be a homomorphism, the image of a homomorphism $f$ is:
$$
\text{Im}(f)=\{ h \in H : h = f(g), g \in G \}
$$
That is, the elements in $H$ that are mapped to by points in $G$ under $f$.

## Kernel
The kernel of $f$ is:
$$
\text{Ker}(f)=\{ g \in G : f(g)=e_{H} \}
$$
That is, the elements in $G$ that map to the identity element of $H$ under $f$.

## $\text{Ker}(f)=\{ e_{G} \}\iff f \text{ is injective}$
($\Leftarrow$) Suppose $f$ is injective. $f(e_{G})=e_{H}$, so $e_{G} \in \text{Ker}(f)$. If $g \in \text{Ker}(f)$ then $f(g)=e_{H}=f(e_{G})$, so $g = e_{G}$ by injectivity. Hence $\text{Ker}(f)=\{ e_{G} \}$.

($\Rightarrow$) Suppose $\text{Ker}(f)=\{ e_{G} \}$ and $f(x)=f(y)$. Then $f(xy^{-1})=f(x)f(y)^{-1}=e_{H}$, so $xy^{-1} \in \text{Ker}(f)$. Thus $xy^{-1}=e_{G}$, namely $x = y$, and $f$ is injective.

## Pre-image
Given a homomorphism $f: G \to H$ and $K \leq H$, the pre-image of $K$ is $f^{-1}(K)=\{ g \in G : f(g) \in K \}$. That is, the elements in $G$ that land us in $K$ under $f$.

## $f^{-1}(K)\leq G$
A corollary of this is that $\text{Ker}(f)=f^{-1}(\{ e_{H} \})$ is a subgroup of $G$ (take $K = \{ e_{H} \}$).

$f(e_{G})=e_{H} \in K$ as $K \leq H$, so $e_{G} \in f^{-1}(K)$ and $f^{-1}(K)$ is non-empty. By the Subgroup Criterion Theorem it is enough to show:
1. Closure: if $a, b \in f^{-1}(K)$ then $f(ab)=f(a)f(b) \in K$ as $K$ is closed, so $ab \in f^{-1}(K)$.
2. Inverse: if $a \in f^{-1}(K)$ then $f(a^{-1})=f(a)^{-1} \in K$ as $K$ is closed under inverses, so $a^{-1} \in f^{-1}(K)$ and $aa^{-1}=e_{G}$.

Hence $f^{-1}(K) \leq G$.