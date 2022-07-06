# Regular-Expressions
Some problem solutions from my training in Softuni

## **1. Match Full Name**

Write a JavaScript function to **match full names** from a list of names
and **print** them on the console.

### Writing the Regular Expression

First, write a regular expression to match a valid full name, according
to these conditions:

  - A valid full name has the following characteristics:
    
      - It consists of **two words**.
    
      - Each word **starts** with a **capital letter**.
    
      - After the first letter, it **only contains lowercase letters
        afterward**.
    
      - **Each** of the **two words** should be **at least two letters
        long**.
    
      - The **two words** are **separated** by a **single space**.

To help you out, we've outlined several steps:

1.  > Use an online regex tester like <https://regex101.com/>

2.  > Check out how to use **character sets** (denoted with square
    > brackets - **"\[\]"**)

3.  > Specify that you want **two words** with a space between them (the
    > **space character** ' ', and **not** any whitespace symbol)

4.  > For each word, specify that it should begin with an uppercase
    > letter using a **character set**. The desired characters are in a
    > range – **from 'A' to 'Z'**.

5.  > For each word, specify that what follows the first letter are only
    > **lowercase letters**, one or more – use another character set and
    > the correct **quantifier**.

6.  > To prevent capturing of letters across new lines, put **"\\b"** at
    > the beginning and the end of your regex. This will ensure that
    > what precedes and what follows the match is a word boundary (like
    > a new line).

To check your RegEx, use these values for reference (paste all of them
in the **Test String** field):

| **Match ALL of these** | **Match NONE of these**                                                      |
| ---------------------- | ---------------------------------------------------------------------------- |
| Ivan Ivanov            | ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov |

By the end, the matches should look something like this:

![](media/image1.png)

After you’ve constructed your regular expression, it’s time to write the
solution in JavaScript.

### Implementing the Solution in JavaScript

Create a new JavaScript file and copy your **regular expression** into a
variable:

![](media/image2.png)

Note: You should put **"/"** before and after the pattern so that it is
interpreted as a RegEx pattern. Also, place the **'g'** (global) flag
after it, so that you get all the matches in the text.

Now, it’s time to **read the input**, **extract the matches** from it
and push them into an array. For this we can use **exec()**:

![](media/image3.png)

The **exec** method matches the string and the pattern keeps the first
index after the match. This way the next time **exec** runs it starts
looking after the last match. If there are no more matches, it will
return **null**.

We are declaring a variable in the while loop's condition because we
need to check every time if there are any more matches.

Now we have an array (**validNames**), which holds all of the valid
names in the input. All that is left is to **join** it by **space** and
**print** it (do this by using **join()**):

![](media/image4.png)

### Examples

| **Input**                                                                      |
| ------------------------------------------------------------------------------ |
| "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov" |
| **Output**                                                                     |
| Ivan Ivanov Test Testov                                                        |

## **2. Match Phone Number**

Write a regular expression to match a **valid phone number** from
**Sofia**. After you find all **valid phones**, **print** them on the
console, separated by a **comma and a space ", "**.

### Compose the Regular Expression

A valid number has the following characteristics:

  - It starts with **"+359"**

  - Then, it is followed by the area code (always **2**)

  - After that, it’s followed by the **number** itself:
    
      - The number consists of **7 digits** (separated into **two**
        **groups** of **3** and **4** **digits** respectively).

  - The different **parts** are **separated** by **either a space or a
    hyphen** (**'-'**).

You can use the following RegEx properties to **help** with the
matching:

  - Use **quantifiers** to match a **specific number** of **digits**

  - Use a **capturing group** to make sure the delimiter is **only one
    of the allowed characters** **(space or hyphen)** and **not** a
    **combination** of both (e.g. **+359 2-111 111** has **mixed
    delimiters**, it is **invalid**). Use a **group backreference** to
    achieve this.

  - Add a **word boundary** at the **end** of the match to avoid
    **partial matches** (the last example on the right-hand side).

  - Ensure that before the **'+'** sign there is either a **space** or
    the **beginning of the string**.

You can use the following table of values to test your RegEx against:

<table>
<thead>
<tr class="header">
<th><strong>Match ALL of these</strong></th>
<th><strong>Match NONE of these</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>+359 2 222 2222</p>
<p>+359-2-222-2222</p></td>
<td><p>359-2-222-2222, +359/2/222/2222, +359-2 222 2222</p>
<p>+359 2-222-2222, +359-2-222-222, +359-2-222-22222</p></td>
</tr>
</tbody>
</table>

### Implement the Solution in JavaScript

Now it’s time to write the solution, so let’s start writing\!

First, just like in the previous problem, put your RegEx in a variable:

![](media/image5.png)

After that, let’s make an array of matches using like in the previous
exercise:

![](media/image6.png)

Now let's print **all the matches**, separated by **", "**:

![](media/image7.png)

### Examples

| **Input**                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'\]                                                                                                           |
| **Output**                                                                                                                                                                                                                                         |
| \+359 2 222 2222, +359-2-222-2222                                                                                                                                                                                                                  |
| **Input**                                                                                                                                                                                                                                          |
| \['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222'\] |
| **Output**                                                                                                                                                                                                                                         |
| \+359 2 357 3351, +359 2 173 3408, +359-2-789-2584, +359 2 193 3953, +359-2-961-0248, +359-2-789-2584, +359 2 727 9740, +359-2-854-2280, +359 2 193 3953, +359 2 357 3351, +359 2 558 8560                                                         |

## **3. Match Dates**

Write a program, which matches a date in the format
**"dd{separator}MMM{separator}yyyy"**.

### Compose the Regular Expression

Every valid date has the following characteristics:

  - Always starts with **two digits**, followed by a **separator**

  - After that, it has **one uppercase** and **two lowercase** letters
    (e.g. **Jan**, **Mar**).

  - After that, it has a **separator** and **exactly 4 digits** (for the
    year).

  - The separator could be either of three things: a period (**"."**), a
    hyphen (**"-"**) or a forward-slash (**"/"**)

  - The separator needs to be **the same** for the whole date (e.g.
    13**.**03**.**2016 is valid, 13**.**03**/**2016 is **NOT**). Use a
    **group backreference** to check for this.

You can follow the table below to help with composing your RegEx:

| **Match ALL of these**                | **Match NONE of these**               |
| ------------------------------------- | ------------------------------------- |
| 13/Jul/1928, 10-Nov-1934, 25.Dec.1937 | 01/Jan-1951, 23/sept/1973, 1/Feb/2016 |

Use **named capturing groups** for the **day**, **month** and **year**.

Since this problem requires more complex RegEx, which includes **named
capturing groups**, we’ll take a look at how to construct it:

  - First off, we don’t want anything at the **start** of our date, so
    we’re going to use a **word boundary "\\b"**:  
    ![](media/image8.png)

  - Next, we’re going to match the **day**, by telling our RegEx to
    match **exactly two digits**, and since we want to **extract** the
    day from the match later, we’re going to put it in a **capturing
    group**:  
    ![](media/image9.png)  
    We’re also going to give our group a **name** since it’s easier to
    navigate by **group name** than by **group index**:  
    ![](media/image10.png)

  - Next comes the separator – either a **hyphen**, **period,** or
    **forward slash**. We can use a **character class** for this:  
    ![](media/image11.png)  
    Since we want to use the separator we matched here to match the
    **same separator** further into the date, we’re going to put it in a
    **capturing group**:  
    ![](media/image12.png)

  - Next comes the **month**, which consists of a **capital Latin
    letter** and **exactly two lowercase Latin letters**:**  
    **![](media/image13.png)

  - Next, we’re going to match the **same separator** **we matched
    earlier**. We can use a **backreference** for that:  
    ![](media/image14.png)

  - Next up, we’re going to match the year, which consists of **exactly
    4 digits**:  
    ![](media/image15.png)

  - Finally, since we don’t want to match the date if there’s anything
    else **glued to it**, we’re going to use another **word boundary**
    for the end:  
    ![](media/image16.png)

Now it’s time to find all the **valid dates** in the input and **print
each date** in the following format: **"Day: {day}, Month: {month},
Year: {year}"**, each on a **new line**.

### Implement the Solution in JavaScript

First off, we’re going to put our RegEx in a variable and get the
matches from the string:

![](media/image17.png)

Next, we’re going to **iterate** over every single **element** in the
array and **extract** the **day**, **month** and **year** by making new
patterns and matching them:

![](media/image18.png)

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']</td>
</tr>
<tr class="even">
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td><p>Day: 13, Month: Jul, Year: 1928</p>
<p>Day: 10, Month: Nov, Year: 1934</p>
<p>Day: 25, Month: Dec, Year: 1937</p></td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
</tr>
<tr class="odd">
<td>['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']</td>
</tr>
<tr class="even">
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td><p>Day: 11, Month: Dec, Year: 2010</p>
<p>Day: 18, Month: Jan, Year: 2014</p></td>
</tr>
</tbody>
</table>

## **4. Furniture**

Write a function to calculate the total cost of different types of
furniture. You will be given some lines of input until you receive the
line "**Purchase**". For the line to be **valid** it should be in the
following format:

> **"\>\>{furniture name}\<\<{price}\!{quantity}"**

The **price** can be a floating-point number or a whole number.
Furniture **items** must start with a capital letter. Store the names of
the furniture and the total price. At the end print each bought
furniture on a separate line in the format:

> **"Bought furniture:**
> 
> **{1<sup>st</sup> name}**
> 
> **{2<sup>nd</sup> name}**
> 
> **…"**

And on the last line print, the following: **"Total money spend: {spend
money}"** formatted to the second decimal point.

If there are not valid furniture print only:

> **Bought furniture:**
> 
> **Total money spend: {spend money}**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['&gt;&gt;Sofa&lt;&lt;312.23!3',</p>
<p>'&gt;&gt;TV&lt;&lt;300!5',</p>
<p>'&gt;Invalid&lt;&lt;!5',</p>
<p>'Purchase']</p></td>
<td><p>Bought furniture:</p>
<p>Sofa</p>
<p>TV</p>
<p>Total money spend: 2436.69</p></td>
<td>Only the Sofa and the TV are valid, for each of them we multiply the price by the quantity and print the result</td>
</tr>
<tr class="even">
<td><p>['&gt;&gt;Laptop&lt;&lt;312.2323!3',</p>
<p>'&gt;&gt;TV&lt;&lt;300.21314!5',</p>
<p>'&gt;Invalid&lt;&lt;!5',</p>
<p>'&gt;&gt;TV&lt;&lt;300.21314!20',</p>
<p>'&gt;&gt;Invalid&lt;!5',</p>
<p>'&gt;&gt;TV&lt;&lt;30.21314!5',</p>
<p>'&gt;&gt;Invalid&lt;&lt;!!5',</p>
<p>'Purchase']</p></td>
<td><p>Bought furniture:</p>
<p>Laptop</p>
<p>TV</p>
<p>TV</p>
<p>TV</p>
<p>Total money spend: 8593.09</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p>['&gt;Invalid&lt;&lt;!4',</p>
<p>'&gt;Invalid&lt;&lt;!2',</p>
<p>'&gt;Invalid&lt;&lt;!5',</p>
<p>'Purchase']</p></td>
<td><p>Bought furniture:</p>
<p>Total money spend: 0.00</p></td>
<td></td>
</tr>
</tbody>
</table>

## **5. Race**

Write a function that processes information about a race. On the **first
line**, you will be given a **list of participants** **separated by ",
"**. On the next few lines until you receive a line **"end of race"**
you will be given some info which will be some **alphanumeric
characters**. In between them, you could have some **extra characters
which you should ignore**. For example: **"G\!32e%o7r\#32g$235@\!2e"**.
The **letters are the name** of the person and the **sum of the digits
is the distance** he ran. So here we have **George** who ran **29 km**.
Store the information about the person only **if the list of racers
contains the name of the person**. If you receive the **same person more
than once just add the distance to his old distance**. At the end
**print the top 3 racers** ordered by **distance in descending** in the
format:

> **"1st place: {first racer}**
> 
> **2nd place: {second racer}**
> 
> **3rd place: {third racer}"**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['George, Peter, Bill, Tom',</p>
<p>'G4e@55or%6g6!68e!!@ ',</p>
<p>'R1@!3a$y4456@',</p>
<p>'B5@i@#123ll',</p>
<p>'G@e54o$r6ge#',</p>
<p>'7P%et^#e5346r',</p>
<p>'T$o553m&amp;6',</p>
<p>'end of race']</p></td>
<td><p>1st place: George</p>
<p>2nd place: Peter</p>
<p>3rd place: Tom</p></td>
<td>On the 3<sup>rd</sup> input line we have Ray. He is not in the list, so we do not count his result. The other ones are valid. George has total of 55 km, Peter has 25 and Tom has 19. We do not print Bill because he is on 4<sup>th</sup> place.</td>
</tr>
<tr class="even">
<td><p>['Ronald, Bill, Tom, Timmy, Maggie, Michonne',</p>
<p>'Mi*&amp;^%$ch123o!#$%#nne787) ',</p>
<p>'%$$B(*&amp;&amp;)i89ll)*&amp;) ',</p>
<p>'R**(on%^&amp;ald992) ',</p>
<p>'T(*^^%immy77) ',</p>
<p>'Ma10**$#g0g0g0i0e',</p>
<p>'end of race']</p></td>
<td><p>1st place: Michonne</p>
<p>2nd place: Ronald</p>
<p>3rd place: Bill</p></td>
<td></td>
</tr>
</tbody>
</table>

## **6. SoftUni Bar Income**

**Let\`s take** a break and visit the game bar at SoftUni. It is about
time for the people behind the bar to go home and you are the person who
has to draw the line and calculate the money from the products that were
sold throughout the day. Until you receive a line with the text **"end
of shift"** you will be given lines of input. But before processing that
line you have to do some validations first.

**Each valid order should have a customer, product, count, and a
price:**

  - > Valid customer's name should be **surrounded by '%'** and must
    > **start with a capital letter**, followed by **lower-case
    > letters**

  - > **Valid product contains any word character and must be surrounded
    > by '\<' and '\>'**

  - > Valid count is an **integer**, **surrounded by '|'**

  - > **Valid price is any real number followed by '$'**

The parts of a valid order should appear in the order given: **customer,
product, count, and price.**

Between each part there can be other symbols, except (**'|', '$', '%'
and '.'**)

For each valid line print on the console: **"{customerName}: {product} -
{totalPrice}"**

When you receive **"end of shift"** print the total amount of money for
the day **rounded to 2 decimal places** in the following format:
**"Total income: {income}".**

### Input / Constraints

  - > Strings that you have to process until you receive text **"end of
    > shift".**

### Output

  - Print all of the valid lines in the format **"{customerName}:
    {product} - {totalPrice}"**

  - After receiving **"end of shift"** print the total amount of money
    for the day rounded to 2 decimal places in the following format:
    **"Total income: {income}"**

  - Allowed working **time** / **memory**: **100ms** / **16MB**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['%George%&lt;Croissant&gt;|2|10.3$',</p>
<p>'%Peter%&lt;Gum&gt;|1|1.3$',</p>
<p>'%Maria%&lt;Cola&gt;|1|2.4$',</p>
<p>'end of shift']</p></td>
<td><p>George: Croissant - 20.60</p>
<p>Peter: Gum - 1.30</p>
<p>Maria: Cola - 2.40</p>
<p>Total income: 24.30</p></td>
<td><p>Each line is valid, so we print each order, calculating the total price of the product bought.</p>
<p>At the end we print the total income for the day</p></td>
</tr>
<tr class="even">
<td><p>['%InvalidName%&lt;Croissant&gt;|2|10.3$',</p>
<p>'%Peter%&lt;Gum&gt;1.3$',</p>
<p>'%Maria%&lt;Cola&gt;|1|2.4',</p>
<p>'%Valid%&lt;Valid&gt;valid|10|valid20$',</p>
<p>'end of shift']</p></td>
<td><p>Valid: Valid - 200.00</p>
<p>Total income: 200.00</p></td>
<td><p>On the first line, the customer name isn`t valid, so we skip that line.<br />
The second line is missing product count.</p>
<p>The third line don`t have a valid price.</p>
<p>And only the forth line is valid</p></td>
</tr>
</tbody>
</table>

## **7. \*Star Enigma**

The war is at its peak, but you, young Padawan, can turn the tides with
your programming skills. You are tasked to create a program to
**decrypt** the messages of The Order and prevent the death of hundreds
of lives.

You will receive several messages, which are **encrypted** using the
legendary star enigma. You should **decrypt the messages**, following
these rules:

To properly decrypt a message, you should **count all the letters**
**\[s, t, a, r\]** – **case insensitive** and **remove** the count from
the **current ASCII value of each symbol** of the encrypted message.

After decryption:

Each message should have a **planet name, population, attack type ('A',
as an attack or 'D', as destruction), and soldier count.**

The planet name **starts after** **'@'** and contains **only letters
from the Latin alphabet**.

The planet population **starts after ':'** and is an **Integer**;

The attack type may be **"A"(attack) or "D"(destruction)** and must be
**surrounded by "\!"** (exclamation mark).

The **soldier count** starts after **"-\>"** and should be an Integer.

The order in the message should be: **planet name -\> planet population
-\> attack type -\> soldier count.** Each part can be separated from the
others by **any character except: '@', '-', '\!', ':' and '\>'.**

### Input / Constraints

  - The **first line** **holds n** – the number of **messages**–
    **integer in the range \[1…100\];**

  - On the next **n** lines, you will be receiving encrypted messages.

### Output

After decrypting all messages, you should print the decrypted
information in the following format:

First print the attacked planets, then the destroyed planets.  
**"Attacked planets: {attackedPlanetsCount}"  
"-\> {planetName}"  
"Destroyed planets: {destroyedPlanetsCount}"  
"-\> {planetName}"**

The planets should be **ordered by name** **alphabetically.**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['2',</p>
<p>'<strong>ST</strong>CDoghudd4=63333$D$0<strong>A</strong>53333',</p>
<p>'EHf<strong>s</strong>y<strong>ts</strong>nhf?8555&amp;I&amp;2C9555<strong>SR</strong>']</p></td>
<td><p>Attacked planets: 1</p>
<p>-&gt; Alderaa</p>
<p>Destroyed planets: 1</p>
<p>-&gt; Cantonica</p></td>
<td><p>We receive two messages, to decrypt them we calculate the key:</p>
<p>First message has decryption key 3. So we substract from each characters code 3.</p>
<p><strong>PQ@Alderaa1:30000!A!-&gt;20000</strong></p>
<p>The second message has key 5.</p>
<p><strong>@Cantonica:3000!D!-&gt;4000NM</strong></p>
<p><strong>Both messages are valid</strong> and they contain planet, population, attack type and soldiers count.</p>
<p>After decrypting all messages we print each planet according the format given.</p></td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
<td><strong>Comments</strong></td>
</tr>
<tr class="odd">
<td><p>['3',</p>
<p>"<strong>tt</strong>(''DG<strong>s</strong>vywge<strong>r</strong>x&gt;6444444444%H%1B9444",</p>
<p>'GQh<strong>rr</strong>|<strong>A</strong>977777(H(<strong>TTTT</strong>',</p>
<p>'EHf<strong>s</strong>y<strong>ts</strong>nhf?8555&amp;I&amp;2C9555<strong>SR</strong>']</p></td>
<td><p>Attacked planets: 0</p>
<p>Destroyed planets: 2</p>
<p>-&gt; Cantonica</p>
<p>-&gt; Coruscant</p></td>
<td><p>We receive three messages.</p>
<p>Message one is decrypted with key 4:</p>
<p><strong>pp$##@Coruscant:2000000000!D!-&gt;5000</strong></p>
<p>Message two is decrypted with key 7:</p>
<p><strong>@Jakku:200000!A!MMMM</strong></p>
<p>This is <strong>invalid message</strong>, missing soldier count, so we continue.</p>
<p>The third message has key 5.</p>
<p><strong>@Cantonica:3000!D!-&gt;4000NM</strong></p></td>
</tr>
</tbody>
</table>

"It’s a trap\!" – Admiral Ackbar

## **8. \*Nether Realms**

A mighty battle is coming. In the stormy nether realms, demons are
fighting against each other for supremacy in a duel from which only one
will survive.

Your job, however, is not so exciting. You are assigned to **sign in all
the participants** in the nether realm's mighty battle's demon book,
which of course is **sorted alphabetically**.

A demon's **name contains his health and his damage**.

The **sum of the ascii codes** of **all characters** (excluding numbers
(0-9), arithmetic symbols (**'+', '-', '\*', '/'**) and delimiter dot
(**'.'**)) gives a **demon's total health**.

**The sum of all numbers** in his name forms his base damage. Note that
you should consider the plus **'+'** and minus **'-'** signs (e.g. **+10
is 10** and **-10 is -10**). However, there are some symbols (**'\*'**
and **'/'**) that can further **alter the base damage by multiplying or
dividing it by 2** (e.g. in the name "m**15**\*/c**-5.0**", the base
damage is **15 + (-5.0) = 10** and then you need to multiply it by 2
(e.g. 10 \* 2 = 20) and then divide it by 2 (e.g. 20 / 2 = 10)).

So, **multiplication and division** are applied **only after all numbers
are included** in the calculation and **in the order, they appear in the
name**.

You will get all demons **on a single line**, separated by commas and
zero or more blank spaces. Sort them in **alphabetical order** and print
their names **along with their health and damage**.

### Input

The input will be read from the console. The input consists of a
**single line** containing all demon names **separated by commas and
zero or more spaces** in the format: **"{demon name}, {demon name}, …
{demon name}"**

### Output

Print all demons **sorted by their name in ascending order**, each on a
separate line in the format:

  - **"{demon name} - {health points} health, {damage points} damage"**

### Constraints

  - > A demon's name will contain **at least one character**

  - > A demon's name **cannot contain** blank spaces ' ' or commas ','

  - A **floating-point number will always have digits before and after
    its decimal separator**

  - **Number** in a demon's name **is considere**d everything that is a
    valid integer or floating point number (with dot '.' used as
    separator). For example, all these are valid numbers: '4', '+4',
    '-4', '3.5', '+3.5', '-3.5'

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>M3ph-0.5s-0.5t0.0**</td>
<td>M3ph-0.5s-0.5t0.0** - 524 health, 8.00 damage</td>
<td><p>M3ph-0.5s-0.5t0.0**:</p>
<p>Health = 'M' + 'p' + 'h' + 's' + 't' = 524 health.</p>
<p>Damage = (3 + (-0.5) + (-0.5) + 0.0) * 2 * 2 = 8 damage.</p></td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
<td><strong>Comments</strong></td>
</tr>
<tr class="odd">
<td>M3ph1st0**, Azazel</td>
<td><p>Azazel - 615 health, 0.00 damage</p>
<p>M3ph1st0** - 524 health, 16.00 damage</p></td>
<td><p>Azazel:</p>
<p>Health - 'A' + 'z' + 'a' + 'z' + 'e' + 'l' = 615 health. Damage - no digits = 0 damage.</p>
<p>M3ph1st0**:</p>
<p>Health - 'M' + 'p' + 'h' + 's' + 't' = 524 health.</p>
<p>Damage - (3 + 1 + 0) * 2 * 2 = 16 damage.</p></td>
</tr>
<tr class="even">
<td>Gos/ho</td>
<td>Gos/ho - 512 health, 0.00 damage</td>
<td></td>
</tr>
</tbody>
</table>

## **9. \*Extract Emails**

Write a function to **extract all email addresses from a given text**.
The text comes at the only input line. Print the emails on the console,
each at a separate line. Emails are considered to be in format
**\<user\>@\<host\>**, where:

  - **\<user\>** is a sequence of **letters** and **digits**, where
    '**.**', '**-**' and '**\_**' can appear between them.
    
      - Examples of valid users: "**stephan**", "**mike03**",
        "**s.johnson**", "**st\_steward**", "**softuni-bulgaria**",
        "**12345**".
    
      - Examples of invalid users: ''**--123**", "**.....**",
        "**nakov\_-**", "**\_steve**", "**.info**".

  - **\<host\>** is a sequence of at least two words, separated by dots
    '**.**'. Each word is a sequence of letters and can have hyphens
    '**-**' between the letters.
    
      - Examples of hosts: "**softuni.bg**",
        "**software-university.com**", "**intoprogramming.info**",
        "**mail.softuni.org**".
    
      - Examples of invalid hosts: "**helloworld**",
        "**.unknown.soft.**", "**invalid-host-**", "**invalid-**".

  - Examples of **valid emails**: **info@softuni-bulgaria.org**,
    **kiki@hotmail.co.uk**, **no-reply@github.com**,
    **s.peterson@mail.uu.net**,
    **info-bg@software-university.software.academy**.

  - Examples of **invalid emails**: **--123@gmail.com**, **…@mail.bg**,
    **.info@info.info**, **\_steve@yahoo.cn**, **mike@helloworld**,
    **mike@.unknown.soft.**, **s.johnson@invalid-**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Please contact us at: support@github.com.</td>
<td>support@github.com</td>
</tr>
<tr class="even">
<td>Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.</td>
<td><p>s.miller@mit.edu</p>
<p>j.hopking@york.ac.uk</p></td>
</tr>
<tr class="odd">
<td>Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.</td>
<td>steve.parker@softuni.de</td>
</tr>
</tbody>
</table>
