# Jest Workshop Submission

## Student Details
- Name: Ishita Singh
- Roll Number: 2024-B-14042006B
- GitHub Username: ish1416

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: should return subtotal when no coupon provided
**What it protects against:**  
Ensures the function works correctly when no coupon is applied, preventing bugs where undefined coupons might cause crashes.

---

### 2. Test Name: applies SAVE10 coupon correctly
**What it protects against:**  
Verifies SAVE10 coupon applies 10% discount properly, catching calculation errors in percentage-based discounts.

---

### 3. Test Name: FLAT50 works at boundary
**What it protects against:**  
Tests edge case where discount equals subtotal, ensuring the function returns 0 instead of negative values.

---

### 4. Test Name: throws error for invalid subtotal
**What it protects against:**  
Prevents processing of negative or invalid amounts that could corrupt financial calculations.

---

### 5. Test Name: coupon codes are case insensitive
**What it protects against:**  
Ensures users can enter coupons in any case (SAVE10, save10, Save10) without failures.  

---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes
- GitHub Actions Run URL: (Will be available after pushing to GitHub)

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

I learned how boundary testing is crucial for catching edge cases that might cause unexpected behavior in production, especially with financial calculations.

