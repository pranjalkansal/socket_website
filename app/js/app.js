'use strict';

var app = angular.module('chat', []);

app.controller('ChatController', ['$scope', function ($scope) {
    var chat = io.connect('http://localhost:3000/chat');

    chat.on('connect', function () {console.log('connected');});

    angular.element('input').bind('keyup', function (event) {
	if(event.keyCode == 13) {
	    $('.chat-body').append('you: ' + $scope.message + '<br />');
	    chat.send($scope.message);
	}
    });

    chat.on('message', function (message) {
	$('.chat-body').append('server: ' + message + '</br>');
    });
}]);
