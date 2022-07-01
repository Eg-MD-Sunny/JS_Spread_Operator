</> JS_Spread_Operator

</> Description:
Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.In the above example, the defined function takes x, y, and z as arguments and returns the sum of these values. An array value is also defined.When we invoke the function, we pass it all the values in the array using the spread syntax and the array name — ...numbers. <br><br>

If the array contained more than three numbers, e.g. [1, 2, 3, 4], then it would still work fine, except that all four would be passed, but only the first three would be used unless you added more arguments to the function<br>

function sum(x, y, z, n) {<br>
  return x + y + z + n;<br>
}<br>
