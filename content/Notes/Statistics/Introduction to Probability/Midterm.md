#stats #math #stat302 

---

## Question 1 [10 points]

Suppose Ω = {A, B, C} where ℙ({C}) = 3ℙ({B}) = 15ℙ({A}).

**(a)** [4 points] Compute ℙ({A}), ℙ({B}), and ℙ({C}).

**(b)** [2 points] Let X = I_A and Y = I_B. Is Z = X + Y an indicator function? If so, what is it an indicator of?

**(c)** [4 points] Suppose students are randomly assigned to residences (A or B) with equal probability. Choosing A results in happiness score of 100 and choosing B results in a score of 60. Define V as the total combined happiness score for two random students. Write out the distribution of V.

---

## Question 2 [7 points]

**(a)** [3 points] Let A and B be events where ℙ(A), ℙ(B) > 0. Prove that ℙ(A | B) > ℙ(A) if ℙ(B | A) > ℙ(B).

**(b)** [4 points] Show that if A and B^c are independent events, then so are A and B.

---

## Question 3 [9 points]

Suppose you are a technician at a manufacturing plant that produces specialized sensors. On average, 10% of the sensors fail the calibration test. Your supervisor asks you to collect exactly 3 functional (passing) sensors for a new client shipment. You test the sensors one by one in the order they come off the assembly line.

**(a)** [4 points] What is the probability that you will need to test exactly 5 sensors in total to find your 3rd functional sensor? Round your final answer to the nearest thousandth (i.e., 0.123).

**(b)** [5 points] What is the probability that you will need to test 4 or more sensors in total to find your 3rd functional sensor? Round your final answer to the nearest thousandth (i.e., 0.123).

---

## Question 4 [8 points]

A residential building has an issue with toasters setting off the fire alarms frequently. Suppose that in a given building, there are an average of 2 fire alarms per week. Suppose the fire alarms are all independent. Let T be the time between successive alarms in days.

**(a)** [2 points] What distribution does T follow? List the values of any parameters.

**(b)** [2 points] What is the probability that the time between successive alarms will be exactly 2 days? Round your final answer to the nearest thousandth (i.e., 0.123).

**(c)** [4 points] What is the probability that the time between successive alarms is more than 4 days? Round your final answer to the nearest thousandth (i.e., 0.123).

---

## Question 5 [8 points]

Suppose the random variable X has the probability density function:

$$f_X(x) = 2e^{-2x} I_{(0,\infty)}(x)$$

Let Y = e^X.

**(a)** [4 points] Compute the density f_Y(y). Simplify your answer as much as possible.

**(b)** [4 points] Compute the CDF F_Y(y).

---

## Question 6 [7 points]

Let X be a discrete random variable with probability function

$$p_X(x) = \begin{cases} 2^{-x} & x = 1, 2, 3, \dots \ 0 & \text{otherwise} \end{cases}$$

Let Z = X − 1.

**(a)** [4 points] Compute the probability mass function of Z.

**(b)** [3 points] Name the distribution of Z that you found in part (a), and identify its parameters. _Hint: you may need to do some algebra to get it in a familiar form. Recall b^(−a) = (1/b)^a for b > 0 and a ∈ ℝ._

---

## Question 7 [8 points]

A knitter produces small keychains across three different periods of the day: morning, afternoon, and evening. 50% of all keychains are made in the morning, 30% are made in the afternoon, and 20% are made in the evening. If a stitch is dropped, the keychain is considered unsellable. The knitter has noticed:

- A keychain produced during the morning is unsellable with probability 0.02.
- A keychain produced during the afternoon is unsellable with probability 0.05.
- A keychain produced during the evening is unsellable with probability 0.09.

At the end of the day, all keychains get put into the same container, are mixed together, and then are randomly examined.

**(a)** [4 points] A randomly chosen keychain was found to be unsellable. At which time (morning, afternoon, or evening) was this keychain most likely produced?

**(b)** [4 points] The knitter wants to reduce the overall rate of unsellable keychains produced to below 4%. If proportions of unsellable keychains produced in the afternoon and evening remain unchanged, what is the maximum proportion of unsellable keychains that the knitter can produce in the morning? You can assume that the proportion of keychains produced at each time (morning, afternoon, evening) also remains unchanged. Round your final answer to the nearest thousandth (i.e., 0.123).

---

## Question 8 [5 points]

A regional sales manager at a company knows from historical data that each cold call has a 30% chance of resulting in a successful product demo booking. On a given Monday morning, a sales representative makes 2 independent cold calls. Let X be the number of successful product demo bookings.

**(a)** [5 points] Write out the CDF of X, F_X(x), explicitly calculating the required probabilities. Round any probabilities to the nearest thousandth (i.e., 0.123).

## Distributions

If X ~ Bern(θ), then $$p_X(x;\theta) = \theta^x(1-\theta)^{1-x} I_{{0,1}}(x) \text{ where } \theta \in (0,1)$$

If X ~ Binom(n, θ), then $$p_X(x;n,\theta) = \binom{n}{x}\theta^x(1-\theta)^{n-x} I_{{0,1,...,n}}(x) \text{ where } \theta \in (0,1), n \in {1,2,...}$$

If X ~ Poiss(λ), then $$p_X(x;\lambda) = \frac{\lambda^x}{x!}e^{-\lambda} I_{{0,1,2,...}}(x) \text{ where } \lambda > 0$$

If X ~ Geom(θ), then $$p_X(x;\theta) = (1-\theta)^x\theta I_{{0,1,2,...}}(x) \text{ where } \theta \in (0,1)$$

If X ~ NegBinom(r, θ), then $$p_X(x;\theta,r) = \binom{r-1+x}{x}\theta^r(1-\theta)^x I_{{0,1,2,...}}(x) \text{ where } \theta \in (0,1), r \in {1,2,...}$$

If X ~ HyperGeom(N, K, n), then $$p_X(x;N,K,n) = \frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}} I_{[\max(0,n+K-N),\min(n,K)]}(x)$$ where N ∈ {0,1,2,...}, K ∈ {0,1,2,...,N}, b ∈ {0,1,2,...,N}

If X ~ Unif(L, R), then $$f_X(x;L,R) = \frac{1}{R-L} I_{[L,R]}(x) \text{ where } L < R \in \mathbb{R}$$

If X ~ Exp(λ), then $$f_X(x;\lambda) = \lambda e^{-\lambda x} I_{[0,\infty)}(x) \text{ where } \lambda > 0$$

If X ~ Gam(α, λ), then $$f_Z(z;\alpha,\lambda) = \frac{\lambda^\alpha}{\Gamma(\alpha)}z^{\alpha-1}e^{-\lambda z} I_{[0,\infty)}(z) \text{ where } \alpha,\lambda > 0$$

If X ~ N(μ, σ), then
$$
f_Z(z;\mu,\sigma^2) = \frac{1}{\sqrt{2 \pi \sigma^2 }}\exp{-\frac{(z-\mu)^2}{2\sigma^2}} \quad \text{such that} \quad\mu \in \mathbb{R}, \sigma > 0
$$