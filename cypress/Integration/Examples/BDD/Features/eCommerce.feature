Feature: End to End eCommerce Validation

    application Regression

    Scenario: eCommerce product delivery
    Given I open eCommerce Page
    When I add items to cart
    When Validate the total prices
    Then Select the country submit and verify Success message

    Scenario: Filling the form to shop
    Given I open eCommerce Page
    When I fill the forms details
    Then Validate the forms behaviour
    Then Select the shop Page 