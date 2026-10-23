# Pointer Quiz Prep

> [!info] Pointers, structs, static vs dynamic, and C → SM213
> Built from 11 claude.ai chats about 213 (Sep 24 – Oct 21) and Lectures 1–9. The first section covers the mistakes that came up in those chats, ranked by how often. If you only have ten minutes, read that and do the practice questions at the bottom.

## The mistakes I kept making

### 1. Loading when I wanted an address
- **Oct 21:** I thought `ld 4(r1), r5` did the same thing as `inca r1`. It doesn't. The `ld` reads the value stored at r1+4, while `inca` only makes r1 point 4 bytes further.
- **Oct 17:** for `a->y = b.j` I used `ld 4(r1), r2`, which reads `b.j[0]`. I needed the address `&b + 4`.
- **Oct 17:** in a trace I treated `ld (r1,r2,4), r3` as working out 1×4 = 4. It reads the memory at that address.
- **Oct 17:** `a = m[4]` copies the value stored in `m[4]` (the address 0x7010) into `a`. It is not `&m[4]`.

> [!tip] Rule
> An `ld` with parentheses always reads memory. To get an address, use `ld $label`, `add`, `inca` or `shl`, none of which touch memory.

### 2. One dereference too many, or one too few
- **Oct 17:** for `list->next = new_node` I loaded the old `list->next` before storing to it. A field on the left of `=` only needs its address: `st r3, 4(r1)`.
- **Oct 20:** I asked why `d = &f[5]` takes 0 reads. `d` is the destination, so it gets written without being read.
- **Oct 17:** `a = new_node->data` was one load short. I stored the pointer itself instead of following it.
- **Oct 17:** for `a->b_struct->j[1]` I added `ld (r1), r1`, thinking a pointer needs its own dereference before the offset load. `ld 8(r1), r2` already dereferences r1 and adds 8 in one step.

> [!tip] Rule
> Each pointer you go through costs exactly one `ld`. If the expression is on the left of `=`, compute its address and `st`. If it's on the right, `ld` its value.

### 3. Pointer field vs something stored inside the struct
- **Oct 21/17:** in `a->y[3]`, `y` is an `int*`, so it must be loaded before indexing. `e.g[i]` and `s->c.x[3]` are arrays stored inside the struct, so they're just offsets.
- **Oct 17:** in `b.j` and `q.m[l]`, `b` and `q` are structs held directly. `ld $b` is already the struct's address, and loading through it reads the first field.
- **Oct 17:** in a multiple-choice question, the trap answer (d) loaded the embedded struct `c` as if it were a pointer.

> [!tip] Rule
> For every name, ask what it is. A **pointer** must be loaded before you can follow it. A **struct you hold** has a free address. An **array** name is already an address.

### 4. Bytes vs elements
- **Oct 17:** I wrote offsets as `1`, meaning "the second field". SM213 offsets are in bytes, as in `4(r1)`.
- **Oct 17:** element 3 of an int array is at offset 3 × 4 = 12, not 3.
- **Oct 20:** I used `add r0, r2` for `c[a]` without first multiplying `a` by 4.
- **Oct 17:** I expected `&a[5] - &a[4]` to be 4. It's 1.

> [!tip] Rule
> Assembly counts in bytes. C pointer arithmetic counts in elements: `p + n` moves n × sizeof(\*p) bytes, and `p − q` divides the byte gap by sizeof(\*p).

### 5. Mixing hex and decimal
- **Oct 17:** 5 × 4 = 20 bytes, written as 0x18. 20 is **0x14**, so the address was 0x7014.
- **Oct 17:** 1000 + 16 written as 1010. The question was in decimal, so the answer is 1016.

> [!tip] Rule
> Check which base the question uses before adding. Byte counts to memorize: 12 = 0xC, 16 = 0x10, 20 = 0x14, 24 = 0x18, 28 = 0x1C, 32 = 0x20, 40 = 0x28.

### 6. Alignment of nested structs and arrays
- **Oct 17:** I thought struct T had to be a multiple of U's *size* (24), making it 48. It only needs to be a multiple of U's *alignment* (8), so T is 32 bytes.
- **Oct 17:** I thought `int b[4]` needed 16-byte alignment. An array is aligned like its element type, so it needs 4.
- **Oct 17:** I got 1048 for `s->c.g` by adding g's own 8 bytes. A field's address is where it *starts*.

> [!tip] Rule
> A struct's alignment is the largest primitive alignment anywhere inside it. Each field's offset is the end of the previous field, rounded up to that field's alignment.

### 7. Pointers that move partway through a trace
- **Oct 17:** after `a = m[4]`, I used the original `a[2]` (value 7). `a` now points at the old `a[4]`, so `a[2]` is the old `a[6]`.
- **Clicker 1b.10:** after `c = &c[3]`, the statement `*c = *&c[3]` writes original element 3, using the value of original element 6.

> [!tip] Rule
> After any `p = …`, redraw the arrow. Every later `p[i]` counts from the new address.

### 8. Register slips
- **Oct 17:** I loaded `ld 12(r3), r2` while the pointer was in r2. I also wrote `ld $b = r0` instead of `ld $b, r0`.

> [!tip] Rule
> Give each value its own register and comment what it holds. The grader checks register contents for partial credit.

---

## Static vs dynamic

**Static** means known when the program is compiled. **Dynamic** means known only while it runs. Most questions boil down to whether the compiler can write an address straight into the instruction, or whether the code must read memory to find it.

| Thing | Which | Why |
| --- | --- | --- |
| Address of a global variable | static | The compiler assigns it (clicker 1b.3, answer A) |
| Value of a variable | dynamic | It changes as the program runs |
| Base address of `int b[10]` | static | The array is a global, so its address is fixed |
| Which element `b[i]` uses | dynamic | It depends on the value of `i` |
| Element size, field offsets, `sizeof` any struct | **always static** | They come from the type, which the compiler knows completely |
| Address returned by `malloc` | dynamic | Chosen at runtime, and can differ every call |
| Base address of `struct D d0` (global) | static | So `&d0.f` = `$d0 + 4`, all known in advance |
| Base address of `*d1` (`struct D *d1`) | dynamic | You must load `d1` to find it |
| The pointer variable `d1` itself | address static, value dynamic | Where it lives is fixed. What it holds is not. |

### Static struct vs dynamic struct (Lecture 7 slides)

```
static memory                     static memory           heap (malloc)
0x1000: d0.e                      0x1000: 0x2000 (d1) ──► 0x2000: d1->e
0x1004: d0.f                                              0x2004: d1->f
```

`d0.e = d0.f;` takes 1 read and 1 write.
```asm
ld $d0, r0      # r0 = &d0 = 0x1000
ld 4(r0), r1    # r1 = d0.f                 (read)
st r1, (r0)     # d0.e = d0.f               (write)
```

`d1->e = d1->f;` takes 2 reads and 1 write.
```asm
ld $d1, r0      # r0 = &d1 = 0x1000
ld (r0), r1     # r1 = d1 = 0x2000          (read: the extra load)
ld 4(r1), r2    # r2 = d1->f                (read)
st r2, (r1)     # d1->e = d1->f             (write)
```

Going through a pointer always costs exactly one extra load. Arrays work the same way: `int b[10]` vs `int *b = malloc(10 * sizeof(int))`.

![[Pasted image 20261006223318.png]]

### Clicker answers worth remembering
- **1b.4:** the RTL for `a = 0` (a at 0x1000) is `m[0x1000] ← 0`.
- **RTL for `b[a] = a`** (b at 0x2000): `m[0x2000 + 4*m[0x1000]] ← m[0x1000]`. The base and the ×4 are static, and the index is a memory read.
- **1b.9:** the number of loads in `b[a[0]] = a[b[0]]` is **E, not enough info**. It's 3 if both arrays are static, 4 if one is dynamic, and 5 if both are.
- **"Can it be determined?":** `s->c.g->c.f.y[0]` can't be. You know *where* `g` is stored (1040), but not *what it holds*. Any address that follows a pointer whose value you weren't given can't be determined.

---

## Pointers and pointer arithmetic

| C | Meaning |
| --- | --- |
| `int *p;` | `p` holds the address of an int |
| `&x` | The address of `x`. Computing it never reads `x`. |
| `*p` | The int at the address in `p`, the same as `p[0]` |
| `p[i]` | `*(p + i)` |
| `&p[i]` | `p + i` |
| `b` (array name) | `&b[0]`, so `int *bptr = b;` works |
| `p->f` | `(*p).f` |
| `int **pp` | A pointer to an `int*` |
| `int *a, *b;` | Each variable needs its own star |
| `void *` | Any address. You can't dereference it. `malloc` returns one. |
| `sizeof(int *)` | The size of an address (4 on SM213), not of what it points to |

> [!important] Arithmetic counts elements
> - `p + n` → address + n × sizeof(\*p)
> - `p − q` → (byte difference) ÷ sizeof(\*p). Both pointers must have the same type.
> - `(char *)p + n` or `(void *)p + n` → exactly n bytes

### Worked examples
- `&a[5] - &a[4]` = **1**. That's 4 bytes ÷ 4. Subtraction undoes addition: if `q = p + n`, then `q − p = n`.
- `int *p` holding 0x7000: `p + 5` = 0x7000 + 20 = **0x7014**.
- `rc_malloc` (Lecture 9): `int *ref_count = malloc(n + 8); … return (void *)ref_count + 8;`. The cast makes `+ 8` mean 8 bytes. Without it, `ref_count + 8` would move 8 ints, which is 32 bytes.
- Rewrite `**(arr + **arr + 1)` without stars: it's `arr[arr[0][0] + 1][0]`. Turn `*(p + k)` into `p[k]` and a bare `*p` into `p[0]`. Unary `*` binds tighter than `+`.
- Clicker 1b.10: `c = malloc(10*sizeof(int)); c = &c[3]; *c = *&c[3];` modifies **original element 3**, giving it the value of original element 6.

### The same arithmetic in SM213
`p + i` for an `int*` (a left shift by 2 multiplies by 4):
```asm
# r0 = p, r1 = i
shl $2, r1      # r1 = i * 4
add r1, r0      # r0 = p + i
```

`p − q` for `int*`. SM213 has no subtract, so negate then add:
```asm
# r0 = p, r1 = q
not r1
inc r1          # r1 = -q
add r1, r0      # r0 = p - q        (bytes)
shr $2, r0      # r0 = (p - q) / 4  (ints)
```

---

## Structs: layout and alignment

1. Each primitive field is aligned to its own size: char 1, int 4, long 8. A pointer is 4 in SM213 code and 8 when a question says 64-bit.
2. A struct's alignment is the largest primitive alignment inside it, looking through nested structs and arrays. An array is aligned like its element type.
3. The size is rounded up to a multiple of the alignment, so that arrays of the struct stay aligned. Padding can go between fields or after the last one.
4. Use `.` on a struct you hold and `->` on a pointer to a struct. An embedded struct is just more offset, while a pointer field needs a load.

```
struct X (Lecture 7)       size 8, align 4
  0  char a          1
  1  char b          1
  2  ░░ padding      2
  4  int i           4

struct Y (Lecture 7)       size 12, align 4
  0  char a          1
  1  ░░ padding      3
  4  int i           4
  8  char b          1     ← 8, not 9
  9  ░░ padding      3

struct X (1b.15)           size 88, align 4      D = {int e; int f;}: 8 bytes, 4-aligned
  0  int i           4
  4  struct D d[10]  80
 84  int j           4     ← answer: 84

struct Y (1b.16)           size 24, align 8
  0  char c          1
  1  ░░ padding      7
  8  long n          8
 16  char d          1
 17  ░░ padding      7

struct X (1b.16)           size 256, align 8
  0  int i           4
  4  ░░ padding      4     ← y needs Y's alignment (8), not its size (24)
  8  struct Y y[10]  240
248  int j           4     ← answer: 248
252  ░░ padding      4
```

Nested example from the Oct 17 chat (64-bit, reconstructed from the chat's answers):
```
struct U                   size 24, align 8
  0  int y[3]        12
 12  ░░ padding      4
 16  pointer x       8

struct T                   size 32, align 8      ← 32, not 48
  0  struct U f      24
 24  struct S *g     8

struct S                   size 48, align 8
  0  int a           4
  4  int b[3]        12
 16  struct T c      32
```

> [!example] Addresses with `s` = 1000 (decimal)
> - `s->b[0]` = 1000 + 4 = **1004**
> - `s->c.f.y[1]` = 1000 + 16 + 0 + 4 = **1020**
> - `s->c.g` = 1000 + 16 + 24 = **1040**. This is the address of `g`, not the address `g` holds.
> - `s->c.g->c.f.y[0]` = (value of g) + 16, which **can't be determined**

---

## C → SM213

### Memory instructions

| Name | Assembly | Semantics | Machine |
| --- | --- | --- | --- |
| load immediate | `ld $v, rd` | `r[d] ← v` | `0d-- vvvvvvvv` |
| load base+offset | `ld o(rs), rd` | `r[d] ← m[r[s] + o]` | `1psd` |
| load indexed | `ld (rs,ri,4), rd` | `r[d] ← m[r[s] + 4·r[i]]` | `2sid` |
| store base+offset | `st rs, o(rd)` | `m[r[d] + o] ← r[s]` | `3spd` |
| store indexed | `st rs, (rd,ri,4)` | `m[r[d] + 4·r[i]] ← r[s]` | `4sdi` |

The offset `o` is in bytes when you write assembly. The machine code stores `p = o / 4` in 4 bits, so `o` must be a multiple of 4 between 0 and 60. For example, `st r2, 4(r0)` assembles to `3210`. In indexed mode the 4 multiplies `ri`, and the index has to be a register.

![[Pasted image 20261001125120.png]]

### Arithmetic

| Assembly | Semantics | Machine |
| --- | --- | --- |
| `mov rs, rd` | `r[d] ← r[s]` | `60sd` |
| `add rs, rd` | `r[d] ← r[d] + r[s]` | `61sd` |
| `and rs, rd` | `r[d] ← r[d] & r[s]` | `62sd` |
| `inc rd` / `inca rd` | +1 / +4 | `63-d` / `64-d` |
| `dec rd` / `deca rd` | −1 / −4 | `65-d` / `66-d` |
| `not rd` | `r[d] ← ~r[d]` | `67-d` |
| `shl $s, rd` / `shr $s, rd` | << s / >> s | `7dss`, with ss negative for a right shift |

Decoding from the Sep 24 chat: `0x4624` is `st r6, (r2,r4,4)`, and `0x75F8` is `shr $8, r5`, because 0xF8 = −8.

> [!important] Counting memory reads
> **Reads = pointers you have to follow + index variables you have to read + 1 if you read the final value.**
> - `ld $x` is free. It's part of the instruction, and instruction fetches don't count.
> - Writing to the final location is a store (0 reads). So is taking its address with `&`.
> - A `.` into a struct you hold, or a constant index into an array stored inline, is a free offset.
> - Checks: `s->c.g->b[2]` follows s and g, plus the final read, so 2 + 1 = **3**. `&s->c.f.y[1]` follows s only, so **1**. `d = &f[5]` with static f is **0**.

> [!warning] Don't use the Oct 17 shortcut
> That chat's "1 for the variable, + 1 per `->`, + 1 for the final value" counts one too many. It gives 4 for `a->b_struct->j[1]`, but the correct code has 3 reads.
>
> **"Locations touched" questions** count distinct memory locations, so a location read twice and written once counts once. Pointer variables you read count too. The chats gave two different counting rules, and one set of answers was marked wrong. Check the worked example at the top of the question for whether it counts only the last statement.

### Pattern library
All variables are globals. ints and pointers are 4 bytes, as on SM213.

**`a = 0;`** with `int a;` takes 0 reads and 1 write.
```asm
ld $0, r0       # r0 = 0
ld $a, r1       # r1 = &a   (immediate, no read)
st r0, (r1)     # a = 0
```

**`b[i] = i;`** with a static array (`int i; int b[10];`) takes 1 read.
```asm
ld $i, r0             # r0 = &i
ld (r0), r1           # r1 = i                 (read)
ld $b, r2             # r2 = &b[0]   (static base, no read)
st r1, (r2, r1, 4)    # b[i] = i
```

**`b[i] = i;`** with a dynamic array (`int i; int *b;`) takes 2 reads.
```asm
ld $i, r0             # r0 = &i
ld (r0), r1           # r1 = i                 (read)
ld $b, r2             # r2 = &b
ld (r2), r3           # r3 = b   (the extra load)  (read)
st r1, (r3, r1, 4)    # b[i] = i
```

**`p = &b[5];`** with `int b[10]; int *p;` takes 0 reads.
```asm
ld $b, r0       # r0 = &b[0]
ld $20, r1      # r1 = 5 * sizeof(int)
add r1, r0      # r0 = &b[5]   (b[5] is never read)
ld $p, r2       # r2 = &p
st r0, (r2)     # p = &b[5]
```

**`*p = 7;`** with `int *p;` takes 1 read.
```asm
ld $7, r0       # r0 = 7
ld $p, r1       # r1 = &p
ld (r1), r2     # r2 = p                       (read)
st r0, (r2)     # *p = 7
```

**`p = p + 3;`** with `int *p;` takes 1 read.
```asm
ld $p, r0       # r0 = &p
ld (r0), r1     # r1 = p                       (read)
ld $12, r2      # r2 = 3 * sizeof(int)
add r2, r1      # r1 = p + 3
st r1, (r0)     # p = p + 3
```

**`v = a->y[3];`**, a pointer field (`struct A { int x; int *y; }; struct A *a; int v;`), takes 3 reads.
```asm
ld $a, r0       # r0 = &a
ld (r0), r1     # r1 = a                       (read)
ld 4(r1), r2    # r2 = a->y  (a pointer)       (read)
ld 12(r2), r3   # r3 = a->y[3]                 (read)
ld $v, r4       # r4 = &v
st r3, (r4)     # v = a->y[3]
```

**`a->y = b.j;`**, the address of an inline array (`struct B { int i; int j[4]; }; struct B b;`), takes 1 read.
```asm
ld $a, r0       # r0 = &a
ld (r0), r1     # r1 = a                       (read)
ld $b, r2       # r2 = &b   (b is a struct we hold)
ld $4, r3       # r3 = offset of j
add r2, r3      # r3 = &b.j[0]   (add, never ld)
st r3, 4(r1)    # a->y = b.j
```

**`s->c.x[3] = 0;`**, an embedded struct with an inline array (`struct T { int x[4]; }; struct S { int *a; int b[4]; struct T c; }; struct S *s;`), takes 1 read.
```asm
ld $s, r0       # r0 = &s
ld (r0), r1     # r1 = s                       (read)
ld $0, r2       # r2 = 0
st r2, 32(r1)   # s->c.x[3] = 0   (20 + 0 + 12 = 32)
```

**`v = q.m[l];`**, a variable index into an inline array (`struct Q { int r; int m[8]; }; struct Q q; int l, v;`), takes 2 reads.
```asm
ld $q, r0             # r0 = &q
inca r0               # r0 = &q.m[0]   (m is at offset 4)
ld $l, r1             # r1 = &l
ld (r1), r2           # r2 = l                 (read)
ld (r0, r2, 4), r3    # r3 = q.m[l]            (read)
ld $v, r4             # r4 = &v
st r3, (r4)           # v = q.m[l]
```

**`list->next = new_node;`**, a field on the left of `=` (`struct node { int data; struct node *next; }; struct node *list, *new_node;`), takes 2 reads.
```asm
ld $list, r0        # r0 = &list
ld (r0), r1         # r1 = list                (read)
ld $new_node, r2    # r2 = &new_node
ld (r2), r3         # r3 = new_node            (read)
st r3, 4(r1)        # list->next = new_node
```

---

## Practice
Assume ints and SM213 pointers are 4 bytes unless a question says otherwise. Click a question to see the answer.

> [!question]- 1. `int a[10]` starts at 0x2000 and `int *p = &a[2]`. What address is `p + 3`, and which element is `p[3]`?
> `p` = 0x2008, and `p + 3` = 0x2008 + 12 = **0x2014**. `p[3]` is **a[5]**.

> [!question]- 2. Same `p`. What address is `(char *)p + 3`?
> **0x200B**. A `char*` steps 1 byte at a time.

> [!question]- 3. `&a[7] - &a[2]` for `int a[10]`?
> **5**. The byte gap is 20, and 20 ÷ 4 = 5.

> [!question]- 4. `struct D { int e; int f; };` and `struct X { int i; struct D d[10]; int j; };`. What is the offset of `j`? (clicker 1b.15)
> **84**. D is 8 bytes and 4-aligned, so `d` starts at 4 and takes 80 bytes.

> [!question]- 5. `struct Y { char c; long n; char d; };` and `struct X { int i; struct Y y[10]; int j; };`. What is the offset of `j`? (clicker 1b.16)
> **248**. Y is 24 bytes and 8-aligned because of `long`, so `y` starts at 8, not 4. Then 8 + 240 = 248. `sizeof(struct X)` is 256.

> [!question]- 6. `struct A { char a; int *b; int *p; };`, `struct X { char c; struct A a; int j; };` and a global `struct X s;`. How many memory reads does it take to load `s.a.b[2]` into r1? (clicker 1b.17)
> **2**. The address of `s.a.b` is static (`$s` + an offset), so one read gets `b` and a second read gets `b[2]`. `s` and `s.a` are held directly, so they cost nothing. The answer is 2 whether pointers are 4 or 8 bytes.

> [!question]- 7. Globals `int f[10]; int *d;`. How many reads do `d = &f[5];`, `*d = 5;` and `d[5] = d[0];` each take?
> **0**, **1** and **2**. The first only computes an address and stores it. The second reads `d`, then stores. The third reads `d` and `d[0]`, then stores.

> [!question]- 8. With `struct A { int x; int *y; }; struct A *a; int v;`, write SM213 for `v = a->y[3];`
> ```asm
> ld $a, r0       # r0 = &a
> ld (r0), r1     # r1 = a
> ld 4(r1), r2    # r2 = a->y
> ld 12(r2), r3   # r3 = a->y[3]
> ld $v, r4       # r4 = &v
> st r3, (r4)     # v = a->y[3]
> ```
> If you wrote 5 loads, you added an `ld (r2), r2` after loading `a->y`. That's mistake 2.

> [!question]- 9. Also with `struct B { int i; int j[4]; }; struct B b;`, write SM213 for `a->y = b.j;`
> ```asm
> ld $a, r0       # r0 = &a
> ld (r0), r1     # r1 = a
> ld $b, r2       # r2 = &b
> ld $4, r3       # r3 = 4
> add r2, r3      # r3 = &b.j[0]
> st r3, 4(r1)    # a->y = b.j
> ```
> Only 1 read. `b.j` used as a value is an address, so there's nothing to load (mistake 1).

> [!question]- 10. Rewrite `**(arr + **arr + 1) = 13;` using only `[ ]`.
> `arr[arr[0][0] + 1][0] = 13;`

> [!question]- 11. `int *c = malloc(10*sizeof(int)); c = &c[3]; *c = *&c[3];`. Which element of the original array changes? (clicker 1b.10)
> **Index 3**. It gets the value of original index 6, which is only read.

> [!question]- 12. Is `sizeof(struct S)` static or dynamic? What about the address of `s->a` when `s` is a `struct S *`?
> The size is **always static**, because it comes from the type. The address of `s->a` is **dynamic**: its base is the value in `s`, known only at runtime, although the offset of `a` is static.

> [!question]- 13. `struct X { int i; int j; } s;` (a global) with `ld $s, r0` already done. Which loads `s.j` into r1: `ld 4(r0), r1`, or `ld (r0), r0` followed by `ld 4(r0), r1`?
> **`ld 4(r0), r1`**. `s` is a struct you hold, not a pointer, so `ld (r0), r0` would read `s.i` and then treat it as an address.

---

## Fixes to my lecture notes
These are places where the notes disagree with the slides or the C rules. The lecture notes themselves are unchanged.

- **Lecture 7, line 17:** a struct's size is static because its type is known at **compile time**. The note says runtime.
- **Lecture 7, line 45:** in `struct Y`, `char b` goes at offset **8**, not 9, because `int i` fills bytes 4–7. The size is still 12, matching the slide.
- **Lecture 6, line 29:** the extra load reads the pointer's **value from memory into a register**. It doesn't load an address "into memory".
- **Lecture 4, line 59:** 16 registers need **4 bits**, which is one hexit. That's why a register takes half a byte in an instruction. The note says 16 bits.
- **Lecture 4, line 7:** `r[2] ← r[0] + r[1]` **replaces** r[2] with the sum. It doesn't increase r[2]. Only the SM213 instruction `add rs, rd` adds to its destination.
- **Lecture 9, line 4:** it's a string's **length** that is the array size − 1, because of the `'\0'` terminator. That isn't true of arrays in general.
