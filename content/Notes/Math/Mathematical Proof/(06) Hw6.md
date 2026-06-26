#math #math220 #proof
## Solutions to homework 6

### 1. Prove or disprove the following:

**(a)** If $m, n \in \mathbb Z$, then  
$\{x \in \mathbb Z : mn \mid x\} \subseteq \{x \in \mathbb Z : m \mid x\} \cap \{x \in \mathbb Z : n \mid x\}$.

> [!proof]
> *Proof.* Let $m, n \in \mathbb Z$. Assume that $s \in \{x \in \mathbb Z : mn \mid x\}$. Then $mn \mid s$ and thus $s = mnk$ for some $k \in \mathbb Z$. Hence $s = m(nk)$ and $s = n(mk)$. Since $nk, mk \in \mathbb Z$, we get that $n \mid s$ and $m \mid s$. Thus,
>
> $$
> s \in \{x \in \mathbb Z : m \mid x\} \cap \{x \in \mathbb Z : n \mid x\}.
> $$
>
> Therefore,
> $$
> \{x \in \mathbb Z : mn \mid x\} \subseteq \{x \in \mathbb Z : m \mid x\} \cap \{x \in \mathbb Z : n \mid x\}.
> $$
> ◻

---

**(b)** If $A$ and $B$ are sets, then $\mathcal P(A) \cup \mathcal P(B) = \mathcal P(A \cup B)$.

> [!proof]
> *Proof (Disproof).* We see that this statement is false. Let $A = \{1\}$ and $B = \{2\}$. Then
>
> $$
> \mathcal P(A) \cup \mathcal P(B) = \{\varnothing, \{1\}, \{2\}\}
> $$
>
> but
>
> $$
> \mathcal P(A \cup B) = \{\varnothing, \{1\}, \{2\}, \{1,2\}\}.
> $$
>
> Thus the sets are not equal. ◻

---

**(c)** If $A, B, C$ are sets, then  
$A - (B \cup C) = (A - B) \cup (A - C)$.

> [!proof]
> *Proof (Disproof).* This statement is false. Let $A = B = \{1\}$ and $C = \{2\}$. Then
>
> $$
> A - (B \cup C) = \varnothing
> $$
>
> but
>
> $$
> (A - B) \cup (A - C) = \{1\}.
> $$
>
> Thus the sets are not equal. ◻

---

**(d)** Suppose $A, B, C$ are sets. If $A = B - C$, then $B = A \cup C$.

> [!proof]
> *Proof (Disproof).* This statement is false. Let $A = B = \{1\}$ and $C = \{2\}$. Then $A = B - C$, but
>
> $$
> A \cup C = \{1,2\} \neq \{1\} = B.
> $$
>
> Thus the statement is false. ◻

---

### 2. For any $k \ge 1$, let $A_k = \left(\frac{1}{k+1}, 1 + \frac{1}{k+1}\right)$.

We recall:
$$
\bigcup_{k=1}^{\infty} A_k = \{x \in \mathbb R : \exists k \in \mathbb N \text{ such that } x \in A_k\},
$$
$$
\bigcap_{k=1}^{\infty} A_k = \{x \in \mathbb R : \forall k \in \mathbb N, x \in A_k\}.
$$

---

**(a)** Show that $\bigcup_{k=1}^{\infty} A_k = \left(0, \frac{3}{2}\right)$.

> [!proof]
> *Proof.* Let us show the two inclusions.
>
> Let $x \in \bigcup A_k$. Then $x \in A_k$ for some $k$, so
> $$
> \frac{1}{k+1} < x < 1 + \frac{1}{k+1}
> $$
> which implies $0 < x < \frac{3}{2}$.
>
> Conversely, let $x \in (0, \frac{3}{2})$.
>
> If $x \ge \frac{1}{2}$, then $x \in A_1$.  
> If $x < \frac{1}{2}$, let $n = \lceil 1/x \rceil$, then $x > \frac{1}{n+1}$ so $x \in A_n$.
>
> Thus $x \in \bigcup A_k$. ◻

---

**(b)** Show that $\bigcap_{k=1}^{\infty} A_k = \left[\frac{1}{2}, 1\right]$.

> [!proof]
> *Proof.* Let $x \in \bigcap A_k$. Then for all $k$,
> $$
> \frac{1}{k+1} \le x < 1 + \frac{1}{k+1}.
> $$
> Hence $x \ge \frac{1}{2}$ and $x \le 1$.
>
> Conversely, let $x \in [\frac{1}{2},1]$. Then for all $k$,
> $$
> \frac{1}{k+1} \le x < 1 + \frac{1}{k+1}
> $$
> so $x \in A_k$.
>
> Thus $x \in \bigcap A_k$. ◻

---

### 3. Prove that  
$(A - B) \cup (A - C) = A - (B \cap C)$.

> [!proof]
> *Proof.* We prove both inclusions.
>
> Let $x \in$ LHS. Then $x \in A$ and $x \notin B$ or $x \notin C$. Hence $x \notin B \cap C$, so $x \in$ RHS.
>
> Conversely, let $x \in$ RHS. Then $x \in A$ and $x \notin B \cap C$, so $x \notin B$ or $x \notin C$. Thus $x \in$ LHS. ◻

---

### 4. Prove that  
$A - (B - C) = (A \cap C) \cup (A - B)$.

> [!proof]
> *Proof.* Let $x \in$ LHS. Then $x \in A$ and $x \notin (B - C)$, so $x \notin B$ or $x \in C$. Hence $x \in$ RHS.
>
> Conversely, if $x \in$ RHS:
>
> - If $x \in A \cap C$, then $x \notin B - C$
> - If $x \in A - B$, then $x \notin B - C$
>
> Thus $x \in$ LHS. ◻

---

### 5. Suppose $x, y \in \mathbb R$, $k \in \mathbb N$, $x,y>0$, and $x^k = y$.  
Prove that  
$\{x^a : a \in \mathbb Q\} = \{y^a : a \in \mathbb Q\}$.

> [!proof]
> *Proof.* We prove both inclusions.
>
> Let $z = x^a$ with $a = \frac{p}{q}$. Then
> $$
> z = x^{p/q} = y^{p/(qk)}.
> $$
> So $z \in \{y^a\}$.
>
> Conversely, let $u = y^a = y^{s/t}$. Then
> $$
> u = x^{sk/t}.
> $$
> So $u \in \{x^a\}$. ◻