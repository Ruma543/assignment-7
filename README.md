#Project features:

1. In this Project users can select courses from the available course menu.
   Users can choose their selected course within the set limit of credit hour.

2. User can view their selected course in the cart section. In addition to this
   the cart section also shows the total credit, total price of selected
   courses.

3. The Toast notifications is showed when an user select one course on second
   time, credit hour remaining is less then 0 and the total credit hour is more
   then 20.This feature will help an user to be aware of credit limit and avoid
   unnecessary course duplication.

#Managed the state in This Assignment:

useState is a function that takes the initial state as an argument and returns
an array with two items.In thisAssignment i have used state in Courses.jsx file
named courses and in App.jsx file i have used 4 state named
selectCarts,remainingHour,hour,price.

1.courses:In this state variable is used to store the list of available courses
fetched from an external data source (data.json). The state is updated using
setCourses when the data is fetched and loaded.

2.selectCarts: This state variable stores an array of selected courses ( course
name).

3.remainingHour: It represents the remaining credit hours available to the user.

4.hour: This state variable keeps track of the total credit hours of the
selected courses.

5. price: It stores the total price of the selected courses.
