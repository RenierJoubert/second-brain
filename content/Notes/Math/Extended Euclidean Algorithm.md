#math #cs #java 
# The Extended Euclidean Algorithm

## The Standard Euclidean Algorithm

The Euclidean Algorithm efficiently computes the **greatest common divisor (gcd)** of two integers using the following equality:

> **gcd(a, b) = gcd(b mod a, a)**

This holds because any common divisor of `a` and `b` must also divide every linear combination of them, thus also including the remainder `b mod a`. Hence the gcd is preserved at each step, and the numbers strictly shrink until one hits zero.

###  The Algorithm

```java
public static long gcd(long a, long b) {

	if (a == 0) {
	
		return b;
	
	} else return gcd(b % a, a);
	
}
```

### A worked example

```
gcd(48, 18)   a=48, b=18 → gcd(18 % 48, 48) = gcd(18, 48)
gcd(18, 48)   a=18, b=48 → gcd(48 % 18, 18) = gcd(12, 18)
gcd(12, 18)   a=12, b=18 → gcd(18 % 12, 12) = gcd(6,  12)
gcd(6,  12)   a=6,  b=12 → gcd(12 %  6,  6) = gcd(0,   6)
gcd(0,   6)   a=0 → return b = 6 
```

## The Extended Algorithm

The extended Euclidean Algorithm extends the standard algorithm by simultaneously computing the following:

1. `gcd(a, b)`
2. The **Bézout coefficients** `x`, `y` such that `ax + by = gcd(a, b)` 

## Bézout's Identity

For any integers `a` and `b`, there exist integers `x` and `y` such that:

$$
ax+by=\gcd(a,b)
$$

The values `x` and `y` are called **Bézout coefficients**. They are not unique and infinitely many pairs satisfy the equation but the *Extended Euclidean Algorithm* finds one such pair efficiently.

==But how does this have any application?==

Well, namely modular inverses exist if and only if the gcd = 1. That is, if `gcd(a, b) = 1`, Bézout gives `ax + by = 1`.  Then taking this mod b yields:

$$
ax≡1\pmod b
$$

Hence `x mod b` is the modular inverse of `a` mod `b`. **However,** if `gcd(a, b) ≠ 1`, no inverse exists.

## The Extended Algorithm

```java
extendedEuclidean(a, b):
  if a == 0: return (b, 0, 1)          
  (g, x, y) = extendedEuclidean(b mod a, a)
  return (g, y, x - ⌊b/a⌋ × y)       
```

This returns `[gcd, x, y]` satisfying `ax + by = gcd`.

### In Java

```java
private static long[] extendedEuclidean(long a, long b) {
    if (a == 0) return new long[]{b, 0, 1};
    long[] r = extendedEuclidean(b % a, a);
    return new long[]{r[0], r[2], r[1] - (b / a) * r[2]};
}
```

The goal is to find `x, y` such that `ax + by = gcd(a, b)`.

At the base case `a = 0`, this is trivially true: `0·0 + b·1 = b`. So `x=0, y=1` just falls out of the wood work, in essence, 

```java
long[] r = extendedEuclidean(b % a, a);
```

gets the gcd first, and only after that

```java
return new long[]{r[0], r[2], r[1] - (b / a) * r[2]}; 
```

returns x and y that makes ax + by = gcd(a,b) true.

This works because at every level, the recursive call below solved:

```
(b mod a)·x + a·y = gcd
```

Now to find coefficients for the current `a` and `b` we can substitute `b mod a = b - ⌊b/a⌋·a` into the equation above to yield

```
(b - ⌊b/a⌋·a)·x + a·y = gcd
```

Then expanding we find:

```
b·x + a·(y - ⌊b/a⌋·x) = gcd
```

This allows us to just read off the coefficients for the current level:

- coefficient of `b` → `x` (becomes new x)
- coefficient of `a` → `y - ⌊b/a⌋·x` (becomes new y)
## Time Complexity

Each step the first argument shrinks by the smallest possible amount. But even in this worst case, every ==two== steps the first argument at least halves because if `b mod a >= a/2` then the next step gives `a mod (b mod a) < a/2`. So across two calls you're guaranteed to halve, giving O(log min(a, b)) depth overall.

