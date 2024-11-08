# User Stories:

[ Login Page ]
Given the use wishes to access the POS site
When the user logs in with their username and password
Then the user will be directed to the homepage

    [ Nav Bar ]

    <Employees> links to the view of all the employees
    <Sales Report > links to the view of all monthly sales report
    <Order List> links to the view of the order history
    <Shepard's Pie > links to the view of the homepage

    Given the user is an Admin
    When the user is logged into the site
    Then the user will see Employees, Sales Report, Order List & Shepard's Pie (homepage)

                [ Employees ]
                Given the user is an admin and wants to view the employees card list
                When the user clicks on employees inside of the Nav Bar
                Then the user will be directed to the Employees page where they can view and edit a list of employee cards

                Given the user wants to register a new employee
                When the user fills in all employee information fields within the register an employee box and clicks submit new employee button
                Then the employees page will be rendered again with the new employee card added to the employee list

                Given the user wants to edit an existing employee
                When the user selects the edit button from an employee card
                Then the employees information will populate within the register an employee box and the employee can adjust the information as needed and click the submit new employee button to save the adjustments to the database


                [ Sales Report ]
                Given the user is an admin and wants to view the sales report
                When the user selects sales report in the Nav Bar
                Then the user will be directed to the sales report page  where they can view monthly expenses and top ingredients for each month

                Given the user wants to view a different months sales report
                When the user selects a month from the month drop down
                Then the sales report page will render with the selected months sales reports

    Given the user is an employee
    When the user is logged into the site
    Then the user will see Order List & Shepard's Pie (homepage)



        [ Homepage ]
        Given the user wishes to start an order
        When the user is at the homepage clicks on "Start Order"
        Then the user will be directed to the drive in or delivery option page


                [ Dine In / Delivery Page ]
                Given the user wishes to start a dine in order
                When the user is at the dine in/delivery page and enters in a table number and clicks on Dine In
                Then the user will be directed to the Create Order view

                Given the user wishes to start a delivery order
                When the user is at the dine in/delivery page and enters in the customers name, phone number, address
                Then the user will be directed to the Create Order view

                [ Create Order ]
                Given the user selected delivery
                When the user is at the Create Order page
                Then the user will see their delivery name in the top left of the create order page

                    Given the user wishes to add a new pizza to the order
                    When the user selects a size, cheese, sauce and all toppings requested and clicks finish to order
                    Then the pizza order properties will be displayed on the top left of the page

                    Given the user wishes to add a new pizza to the order
                    When the user selects a size, cheese, sauce and all toppings requested ands click Submit Order
                    Then the users order is added to the database and the user will be returned back to the homepage

                Given the user selected dine in
                When the user is at the Create Order page
                Then the user will see their table number in the top left of the create order page

                    Given the user wishes to add a new pizza to the order
                    When the user selects a size, cheese, sauce and all toppings requested and clicks adds pizza
                    order
                    Then the pizza order properties will be displayed on the top left of the page

                    Given the user wishes to add a new pizza to the order
                    When the user selects a size, cheese, sauce and all toppings requested ands click Submit Order
                    Then the users order is added to the database and the user will be returned back to the homepage

        Given the user wishes to view the order history
        When the user is at the homepage and clicks on "Order History" or clicks on Order list in the Nav Bar
        Then the user will be directed to the Order History page where they will see the current days order history which displays only each orders #, date/time placed, delivery/dine in (if delivery then driver or option to assign driver, if dine in then table number), trash can icon.

                        [ Order History ]
                        Given the user wants to view an existing order
                        When the user clicks on an order # inside of the order cards displayed
                        Then the user will be directed to the Order Details page where they can view all properties of that order

                        Given the user wants to view other days orders
                        When the user selects the filter by day drop down
                        Then the user can view and select a different days order history

                        Given the user wants to delete an order from the database
                        When the user selects the trash can icon inside of an order cards display
                        Then the order will be removed from the database and the page will be rerendered without that order card

                        Given the user is an admin and wants to assign a delivery driver to an order without one
                        When the user selects an employee from the assign delivery driver drop down in the order card
                        Then the order card will be updated with to display the delivery drivers name

                        Given the user wants to edit an existing order
                        When they click on an order # inside of an order card
                        Then the user will be directed to the Order Details Page

                                [ Order Details ]
                                Given the user wants to edit or add an existing orders pizza
                                When the user clicks on the edit order button at the bottom of the page
                                Then the user will be directed to the create order page and the orders information will be displayed within the pizza display box

                                        [ Create Order ]
                                        Given the user wants to select an existing pizza to edit
                                        When the user selects the pizza from the pizza display box
                                        Then the user will see all of the pizza choices displayed on the page, they can adjust any pizza and then add pizza back to the list by clicking finish pizza

                                        Given the user has made all adjustments and additions they need to the order
                                        When the user clicks Submit Order
                                        Then the order will be saved again to the database with the new properties and the order history page will be rerendered with the adjusted order
