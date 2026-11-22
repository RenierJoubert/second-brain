#math #DifferentialEquationsII #PDEs

# Parseval and Complex Fourier Series

## Parseval's identity
The "energy" of $f$ equals the sum of the energies of its Fourier components. It's Pythagoras for functions: for $\mathbf v = v_x\hat\imath + v_y\hat\jmath + v_z\hat k$, $\lvert\mathbf v\rvert^2 = v_x^2 + v_y^2 + v_z^2$.

> [!tip] On the formula sheet
> Parseval for the full series: $\frac1L\int_{-L}^Lf^2\,dx = \frac{a_0^2}{2} + \sum_{n=1}^\infty(a_n^2 + b_n^2)$. The half-range versions below are not given.

**Half-range versions.** Apply the full version to the odd or even extension. The extension's integral over $[-L, L]$ is twice the integral over $[0, L]$:
$$
\text{sine series: } \frac2L\int_0^Lf^2\,dx = \sum b_n^2 \qquad\qquad \text{cosine series: } \frac2L\int_0^Lf^2\,dx = \frac{a_0^2}{2} + \sum a_n^2
$$
**Proof for the sine series (L18):** square $f = \sum b_n\sin\frac{n\pi x}{L}$ and integrate over $[0, L]$. Orthogonality kills all the cross terms, leaving $\int_0^Lf^2 = \frac L2\sum b_n^2$.

### Using it to sum a series
1. Find the Fourier coefficients of $f$.
2. Compute $\frac1L\int f^2$ directly.
3. Set the two equal and solve for the series you want.

**Which tool?** If the sum you want involves the coefficients themselves, plug in a point ([[13 Extensions and Convergence]]). If it involves their ==squares==, use Parseval. For example, coefficients like $\frac{1}{n^2}$ give $\sum\frac1{n^2}$ from a point and $\sum\frac1{n^4}$ from Parseval.

**Example (L18).** $x^2$ on $(-\pi, \pi)$ has $a_0 = \frac{2\pi^2}{3}$, $a_n = \frac{4(-1)^n}{n^2}$ and $b_n = 0$.
$$
\frac1\pi\int_{-\pi}^\pi x^4\,dx = \frac{2\pi^4}{5}, \qquad \frac{a_0^2}{2} + \sum a_n^2 = \frac{2\pi^4}{9} + 16\sum\frac{1}{n^4}
$$
So $16\sum\frac{1}{n^4} = \frac{2\pi^4}{5} - \frac{2\pi^4}{9} = \frac{8\pi^4}{45}$, and $\sum\frac{1}{n^4} = \frac{\pi^4}{90}$.

**Example (A6 supplementary).** The triangle wave $\lvert x\rvert$ on $(-\ell, \ell)$ has $a_0 = \ell$ and $a_n = -\frac{4\ell}{n^2\pi^2}$ for odd $n$. Parseval gives $\frac{2\ell^2}{3} = \frac{\ell^2}{2} + \frac{16\ell^2}{\pi^4}\sum_{n\text{ odd}}\frac{1}{n^4}$, so $\sum_{n\text{ odd}}\frac{1}{n^4} = \frac{\pi^4}{96}$.

## Bessel's inequality and the error
The mean-square error of the partial sum $S_N$ is
$$
E_N = \frac1L\int_{-L}^L(f - S_N)^2\,dx = \frac1L\int_{-L}^Lf^2\,dx - \Big[\frac{a_0^2}{2} + \sum_{n=1}^N(a_n^2 + b_n^2)\Big]
$$
- $E_N \geq 0$, so $\frac{a_0^2}{2} + \sum_{n\leq N}(a_n^2 + b_n^2) \leq \frac1L\int f^2$. That's **Bessel's inequality**. It shows the sum of squared coefficients converges.
- $E_{N+1} \leq E_N$: adding terms never makes the approximation worse.
- Parseval is exactly the statement that $E_N \to 0$.

## Complex form
Substitute $\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}$ and $\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$ into the full series and collect terms:
$$
f(x) = \sum_{n=-\infty}^{\infty}c_n\,e^{in\pi x/L}, \qquad c_n = \frac{1}{2L}\int_{-L}^Lf(x)\,e^{-in\pi x/L}\,dx
$$
**Link to the real form:** $c_0 = \frac{a_0}{2}$, $c_n = \frac{a_n - ib_n}{2}$ and $c_{-n} = \frac{a_n + ib_n}{2}$. Going back: $a_n = c_n + c_{-n}$ and $b_n = i(c_n - c_{-n})$. If $f$ is real, $c_{-n} = \overline{c_n}$.

It's one integral instead of two, and exponentials are easy to integrate.

**Example (L18).** $f = 0$ on $(-\pi, 0)$ and $1$ on $(0, \pi)$:
$$
c_n = \frac{1}{2\pi}\int_0^\pi e^{-inx}\,dx = \frac{1 - (-1)^n}{2\pi in} = \begin{cases}\frac{1}{i\pi n} & n \text{ odd} \\ 0 & n \text{ even},\ n \neq 0\end{cases}, \qquad c_0 = \frac12
$$

**Example (A6 P3).** $f = e^{\alpha x}$ on $(-1, 1)$, so $L = 1$. Using $e^{\pm in\pi} = (-1)^n$:
$$
c_n = \frac12\int_{-1}^1e^{(\alpha - in\pi)x}\,dx = \frac{e^{\alpha - in\pi} - e^{-(\alpha - in\pi)}}{2(\alpha - in\pi)} = \frac{(-1)^n\sinh\alpha}{\alpha - in\pi}
$$
so $e^{\alpha x} = \sinh\alpha\sum_{n=-\infty}^{\infty}\frac{(-1)^n}{\alpha - in\pi}e^{in\pi x}$.

## Fourier transform (L19)
Let $L \to \infty$ in the complex series. The wavenumbers $k_n = \frac{n\pi}{L}$ get closer together and become a continuous $k$:
$$
\hat f(k) = \int_{-\infty}^\infty f(x)e^{-ikx}\,dx, \qquad f(x) = \frac{1}{2\pi}\int_{-\infty}^\infty\hat f(k)e^{ikx}\,dk
$$
This handles functions on the whole line that aren't periodic.

> [!warning] Traps
> - The sheet's Parseval uses $\frac1L\int_{-L}^L$. For a sine or cosine series on $[0, L]$, use $\frac2L\int_0^L$.
> - Forgetting the $\frac{a_0^2}{2}$ term, or writing $a_0^2$.
> - In the complex form, $c_n$ has $e^{-in\pi x/L}$ (minus sign) and the prefactor is $\frac{1}{2L}$.
