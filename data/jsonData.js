[{
    "quiz": {
        "Id": 1,
        "name": "Javascript Quiz",
        "description": ""
    },
    "questions": [{
        "Id": 1010,
        "Name": "Which is not an advantage of using a clousre?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055,"optNo":"A","QuestionId": 1010, "Name": "Prevention Pollution of  global scope", "IsAnswer": false },
            { "Id": 1056,"optNo":"B","QuestionId": 1010, "Name": "Encapsulation", "IsAnswer": false },
            { "Id": 1057,"optNo":"C","QuestionId": 1010, "Name": "Private Propeprties and methods", "IsAnswer": true },
            { "Id": 1058,"optNo":"D","QuestionId": 1010, "Name": "Allow conditional use of strict mode", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1011,
        "Name": "Which message will be returned by injecting this service and executing 'myService.getMessage()'",
        "Code": "angular.module('myModule',[]).service('myService,(function() {\n var message = 'Message one!' \nvar getMessage = function() {\nreturn this.message} \nthis.message ='Message two!' \nthis.getMessage = function() {\n return message }\nreturn function() {\nreturn {  \n getMessage: getMessage, message: 'Message three!'\n}}})())",
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "optNo": "A", "QuestionId": 1010, "Name": "1", "IsAnswer": false },
            { "Id": 1057, "optNo": "B", "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1056, "optNo": "C", "QuestionId": 1010, "Name": "3", "IsAnswer": true }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1012,
        "Name": "Given <div id=\"outer\"><div class=\"inner\"></div></div>, which of these two is the most performant way to select the inner div?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "optNo": "A", "QuestionId": 1010, "Name": "getElementById(\"outer\").children[0]", "IsAnswer": true },
            { "Id": 1057, "optNo": "B", "QuestionId": 1010, "Name": "getElementsByClassName(\"inner\")[0]", "IsAnswer": false }           
            ],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1013,
        "Name": "To pass an array of strings to a function, you should not use...",
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "optNo": "A", "QuestionId": 1010, "Name": "fn.apply(this, stringsArray)", "IsAnswer": false },
            { "Id": 1057, "optNo": "B", "QuestionId": 1010, "Name": "fn.call(this, stringsArray)", "IsAnswer": false },
            { "Id": 1056, "optNo": "C", "QuestionId": 1010, "Name": "fn.bind(this, stringsArray)", "IsAnswer": true }
           ],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1014,
        "Name": "To create a columned list of twoline email subjects and dates for a masterdetail view,which are the most semantically correct?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "optNo": "A", "QuestionId": 1010, "Name": "<div>+<span>", "IsAnswer": false },
            { "Id": 1057, "optNo": "B", "QuestionId": 1010, "Name": "<tr>+<td>", "IsAnswer": true },
            { "Id": 1056, "optNo": "C", "QuestionId": 1010, "Name": "<ul>+<li>", "IsAnswer": false },
            { "Id": 1058, "optNo": "D", "QuestionId": 1010, "Name": "<p>+<br>", "IsAnswer": false },
            { "Id": 1059, "optNo": "E", "QuestionId": 1010, "Name": "none of these", "IsAnswer": false },
            { "Id": 1060, "optNo": "F", "QuestionId": 1010, "Name": "all of these", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    }]
}]